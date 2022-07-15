const belvo = require('belvo').default;
import { DateTime } from 'luxon';

const client = new belvo(
  process.env.BELVO_SECRET_ID,
  process.env.BELVO_SECRET_PASSWORD,
  process.env.BELVO_ENV_URL
);   

export default async function handler(req, res) {
  const { link } = req.query

  try {
    await client.connect()
    const now = DateTime.local()
    let invoices = []
    
    // Fetch invoices for the past 5 years
    for(let i = 0; i < 5; i++) {
      const fromDate = now.minus({days: (i + 1) * 360}).toISODate()
      const toDate = now.minus({days: i * 360}).toISODate()
      const inflowInvoices = await client.invoices.retrieve(link, fromDate, toDate, 'INFLOW')
      const outflowInvoices = await client.invoices.retrieve(link, fromDate, toDate, 'OUTFLOW')
      invoices = [...invoices, ...inflowInvoices, ...outflowInvoices]
    }

    res.json(invoices)
    res.status(200).end();
  } catch(err) {
    res.status(500)
    return res.end()
  }
}