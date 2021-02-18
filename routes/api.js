const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/search-location', (req, res, next) => {
  if (req.body.location) {
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        appid: process.env.OPEN_WEATHER_MAP_API_KEY,
        units: 'imperial',
        q: req.body.location + ',US'
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(next)
  } else {
    res.json({
      error: "Please provide a location."
    })
  }
});

module.exports = router;
