const router = require('express').Router()
const GoogleAPIs = require('../webApi/GoogleAPIS')
const axios = require('axios')
router.get('/restaurants', async (req, res) => {
    const { city } = req.query;
  
    
    console.log(city);
    try {
      const response = await GoogleAPIs.getRestaurants(city);
      res.status(200).send(response.data);
    } catch (error) {
      console.log('error');
      console.log(error);
      return res.status(400).send('error');
    }
  });
  
  router.get('/thingstodo', async (req, res) => {
    const { city } = req.query;
  
    
    console.log(city);
    try {
      const response = await GoogleAPIs.getThingsToDo(city);
      res.status(200).send(response.data);
    } catch (error) {
      console.log('error');
      console.log(error);
      return res.status(400).send('error');
    }
  });


  router.get('/autocomplete', async (req, res) => {
    const { q } = req.query;
    console.log(q);
    try {
      const response = await GoogleAPIs.getAutocompleteInput(q);
      res.status(200).send(response.data);
    } catch (error) {
      console.log('error');
      console.log(error);
      return res.status(400).send('error');
    }
  });
  

  module.exports = router