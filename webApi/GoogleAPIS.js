const makeTextSearch = require('./makeTextSearch');
const axios = require('axios')
module.exports = {
  getRestaurants: (city) => makeTextSearch(`restaurants in ${city}`),
  getThingsToDo: (city) => makeTextSearch(`things to do in ${city}`),
  getAutocompleteInput : (q) =>  axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${q}&key=${process.env.GOOGLE_API_KEY}`)
};
