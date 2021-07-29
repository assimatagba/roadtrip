/* eslint-disable no-undef */
const getPlaces = require('../webApi/getPlaces');
const GoogleAPIS = require('../webApi/GoogleAPIS');

it('test if google get places api works', async () => {
  const result = await getPlaces('paradisio burkina');
  expect(result.data.status).toEqual('OK');
});

it('test if get things to do by city works', async () => {
  const result = await GoogleAPIS.getThingsToDo('ouagadougou');
  expect(result.data.status).toEqual('OK');
});

it('test if get restaurants by city works', async () => {
  const result = await GoogleAPIS.getRestaurants('ouagadougou');
  expect(result.data.status).toEqual('OK');
});


it('test if autocomplete input works', async () => {
  const result = await GoogleAPIS.getAutocompleteInput('lill');
  expect(result.data.predictions[0].description).toEqual('Lille, France');
});
