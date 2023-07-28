export default async function handler(req, res) {
  const { id } = JSON.parse(req.body);

  const url = `https://alert-puce-neckerchief.cyclic.app/api/v1/players/${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
}
