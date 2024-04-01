const axios = require('axios');

exports.fetchData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    const apiUrl = 'https://api.publicapis.org/entries';
    let queryParams = {};

    if (category) {
      queryParams.category = category;
    }

    if (limit) {
      queryParams.limit = limit;
    }

    const response = await axios.get(apiUrl, { params: queryParams });
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
