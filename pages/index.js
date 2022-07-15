import Head from 'next/head'
import React, { useState } from 'react';
import * as Plot from "@observablehq/plot";
import {PlotFigure} from 'plot-react'
import * as aq from 'arquero';
const d3 = require("d3")

const fetcher = (url) => fetch(url).then((res) => res.json())
const getAverage = arr => Math.round(arr.reduce( ( p, c ) => p + c, 0 ) / arr.length);
const getUniqueValues = arr => [...new Set(arr)]

const getComplianceCheckResult = (outcome) => {
  const statements = {
    'NEGATIVE': '❌ - Not complying to his tax obligations',
    'NO_OBLIGATIONS': '✅ Has no obligations',
    'POSITIVE': '✅ Complying to all tax obligations'
  }
  return statements[outcome]
}

export default function Home(props) {
   const [value, setValue] = useState("");
  const [data, setData] = useState({taxStatus: null, taxComplianceStatus: null, invoices: [], taxReturns: null });
  const [loading, setLoading] = useState(false);

  const fetchFiscalData = async (link) => {
    setLoading(true)
    let [taxStatus, taxComplianceStatus, invoices, taxReturns] = await Promise.all([
      fetcher(`http://localhost:3000/api/tax-status?link=${link}`),
      fetcher(`http://localhost:3000/api/tax-compliance-status?link=${link}`),
      fetcher(`http://localhost:3000/api/invoices?link=${link}`),
      fetcher(`http://localhost:3000/api/tax-returns?link=${link}`),
     ]);
    setData({ 
      taxStatus,
      taxComplianceStatus,
      invoices,
      taxReturns,
    });
    setLoading(false)
  }

  let {taxStatus, taxComplianceStatus, invoices, taxReturns } = data;

  const payrollInvoices = invoices && invoices.filter(i => i.invoice_type == 'Nómina').sort((b,a) => new Date(b.invoice_date) - new Date(a.invoice_date))

  const totalEarningsPerYear = taxReturns && taxReturns.filter(tr => tr.hasOwnProperty('sueldos_salarios')).map(tr => tr.informacion_general.ejercicio + tr.servicios_profesionales.ingresos.total_ingresos)

  return (
    <div className="container">
      <Head>
        <title>Fiscal guide</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <h1> SAT report for individuals</h1>
        <div className='search' styles={{textAlign: 'center'}}>
          <input 
            placeholder="Please insert the Belvo link_id" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            type="text" 
          /> 
          <button onClick={() => fetchFiscalData(value)}>Create report</button>
        </div>

        {loading && <>...loading</>}

        { taxStatus && taxComplianceStatus && invoices && taxReturns && (
          <>
            <h2> Step #1 - Get to know the company </h2>
            <h3> Taxpayer information</h3>
            <ul>
                <li>
                  Name: {taxStatus.official_name}
                </li>
                <li>
                  Location: {taxStatus.address.locality}, {taxStatus.address.state}
                </li>
                <li>
                  Phone: {taxStatus.tax_payer_information.phone}
                </li>
                <li>
                  Email: {taxStatus.tax_payer_information.email}
                </li>
                <li>
                  Active taxpayer since: {taxStatus.tax_payer_information.start_operations_date.substring(0,10)}
                </li>
                <li>
                  Economic activities: {taxStatus.economic_activity.map(a => a.economic_activity).join(', ')}
                </li>
            </ul>

            <h3> Economic activites</h3>  
              <PlotFigure 
                className='plot' 
                options={
                  {
                    marginLeft:150,
                    marks: [
                      Plot
                       .barX(
                         taxStatus.economic_activity
                          .map(a => ({activity: a.economic_activity, value: a.percentage})), 
                          {
                            x: "value", 
                            y: "activity",
                            fill: "#4E79A7"
                          })
                    ],
                    x: {
                      label: "Percentage of income",
                    },
                    y: {
                      label: "Business activity",
                    },
                    marginBottom: 40, 
                  }
                }
              />

            <h2>Step #2 - Indicators of fraud & non-compliance</h2>
            <h3>Tax compliance status</h3>
            <ul>
              <li>
                {getComplianceCheckResult(taxComplianceStatus.outcome)}
              </li>
            </ul>

            <h2>Step #3 - Identify the risk profile of the client</h2>
            <h3>Historical payroll invoices</h3>
            <ul>
              <li>
                Average monthly paycheck: MXN {getAverage(payrollInvoices.map(i => i.total_amount))}
              </li>
              <li>
                Number of employers during period: {getUniqueValues(payrollInvoices.map(i => i.sender_id)).length}
              </li>
            </ul>
            <PlotFigure 
              className='plot' 
              options={
                {
                  marks: [
                    Plot.barY(payrollInvoices, 
                      Plot.groupX({y: "sum", }, { 
                        x: d => new Date(d.invoice_date), 
                        y: "total_amount", 
                        thresholds: d3.timeMonth, 
                        fill: "sender_id",
                    })),
                    Plot.frame(),
                  ],
                  x: { 
                    tickRotate: -30, 
                    tickFormat: d => Plot.formatMonth()(d.getMonth()) + " " + d.getFullYear(),
                    label: "Month of the year",
                  },
                  y: {
                    label: "Income",
                  },
                  grid: true,
                  marginBottom: 75, 
                  marginLeft: 100,
                }
              }
            />
            <h3>Yearly total earnings</h3>
            <ul>
              <li>
                Average yearly total earnings: MXN {getAverage(totalEarningsPerYear)}
              </li>
            </ul>
            <PlotFigure 
              className='plot' 
              options={
                {
                  marks: [
                    Plot.barY(taxReturns, 
                      Plot.groupX({y: "sum", }, { 
                        x: d => d.informacion_general.ejercicio, 
                        y: (d) => d.sueldos_salarios.ingreso_anual + d.servicios_profesionales.ingresos.total_ingresos, 
                        fill: "#4E79A7"
                    })),
                    Plot.frame(),
                  ],
                  x: { 
                    tickRotate: -30, 
                    label: "Year"
                  },
                  y: {
                    label: "Yearly income"
                  },
                  grid: true,
                  marginBottom: 75, 
                  marginLeft: 100,
                }
              }
            />
          </>
        )}
      </main>

      <style jsx>{`
        .shorten {
          text-overflow: ellipsis
        }
        .container {
          min-height: 100vh;
          padding: 0 19rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #8a9aa8;
        }
        main {
          width: 800px 
        }
        p {
          line-height: 28px
          font-weight: 400;
        }
        h1, h2 {
          color: #161a1d;
        }
        em {
          font-family: monospace;
          color: #3882fa;
          font-style: initial;
        }
        .search {
          background-color: #f6ffed;
          border: 1px solid #b7eb8f;
          padding: 15px
        }
        input {
          font-family: "Noto Sans",Arial,Verdana;
          width: 65%;
        }
        button {
          font-family: "Noto Sans",Arial,Verdana;
          width: 25%;
        }
        pre {
          margin: 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: "Noto Sans",Arial,Verdana;
          font-weight: 400;
          color: #161a1d;
        }
        table, .plot {
          color: black;
          font-size: 12px;
        }
        table {
          border-color: grey;
        }
        td {
          border: 1px solid #eee;
        }
      `}</style>
    </div>
  )
}

