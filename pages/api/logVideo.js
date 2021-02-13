import fetch from 'node-fetch';

export default async (req, res) => {
  const { firstName, lastName, email } = req.query;

  var raw = JSON.stringify({
    records: [{ fields: { firstName, lastName, email } }],
  });

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: raw,
  };

  const resp = await fetch(
    `https://api.airtable.com/v0/app78ThPhVgkxB2ZJ/videolog?api_key=${process.env.AIRTABLEAPIKEY}`,
    requestOptions
  );

  const data = await resp.json();
  res.statusCode = 200;
  res.json(data);
};
