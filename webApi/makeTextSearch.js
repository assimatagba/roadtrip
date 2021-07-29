require('dotenv').config();
const axios = require('axios');

// Make a request for a user with a given ID
module.exports = async (text) => {
  const link = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&key=${process.env.GOOGLE_API_KEY}`;
  const result = await axios.get(link);
  return result;
};
