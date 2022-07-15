const belvo = require('belvo').default;

const client = new belvo(
  process.env.BELVO_SECRET_ID,
  process.env.BELVO_SECRET_PASSWORD,
  process.env.BELVO_ENV_URL
);   

export default async function handler(req, res) {

  const { link } = req.query

  client.connect()
    .then(() => {
    // Here, as with our invoices.js wrapper, we create variables to calculate the current year
    // so that we can automatically retrieve the last five years of tax return data.
      const toDate = (new Date()).getFullYear()
      const fromDate = toDate - 5
      client.taxReturns.retrieve(link, fromDate, toDate)
        .then((response) => {
            res.json(response);
        })
        .catch(function (error) {
          console.log('error', error)
            res.status(500).send({
                message: error.message
            });
        });
    });
}