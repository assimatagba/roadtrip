require('dotenv').config();
const axios = require('axios');

module.exports = async (query) => {
  const link = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.GOOGLE_API_KEY}`;
  const result = await axios.get(link);
  return result;
};
