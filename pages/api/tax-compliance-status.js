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
      client.taxComplianceStatus.retrieve(link)
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