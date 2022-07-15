import Head from 'next/head'
import React, { useState } from 'react';
import * as Plot from "@observablehq/plot";
import {PlotFigure} from 'plot-react'
import * as aq from 'arquero';
const d3 = require("d3")

const fetcher = (url) => fetch(url).then((res) => res.json())
const getAverage = arr => Math.round(arr.reduce( ( p, c ) => p + c, 0 ) / arr.length);
const getUniqueValues = arr => [...new Set(arr)]


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
  
  console.log(data)

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
            <p>You successfully loaded the app! Open the browser console and you will see all the data being retrieved from Belvo.</p>
            <p>In the next step, you will see the Tax status data appear here :) </p>
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