const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/search-location', (req, res, next) => {
  if (req.query.location) {
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        appid: process.env.OPEN_WEATHER_MAP_API_KEY,
        units: req.query.units,
        q: req.query.location + ',US'
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    })
  } else {
    res.json({
      error: "Please provide a location."
    })
  }
});

module.exports = router;
