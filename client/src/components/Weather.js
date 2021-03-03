import React, { useState } from 'react';
import Card from './Card';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [units, setUnits] = useState(true);
  const [results, setResults] = useState({});
  const [error, setError] = useState(false);

  const onFormSubmit = async (location, units) => {
    await axios.get('/api/search-location', {
      params: {
        location: location,
        units: units ? 'imperial' : 'metric'
      }
    })
    .then(response => {
      if (response.data && response.data.weather) {
        setResults(response.data);
        setError(false);
      } else {
        setError(true);
      }
    })
    .catch(error => {
      setError(true);
    });
  }

  return (
    <React.Fragment>
      <Card>
        <h1 className="text-center">React Weather App</h1>
        <Search label="Enter City or Zip" onFormSubmit={onFormSubmit} error={error} units={units} setUnits={setUnits}/>
      </Card>
      <Card>
        <Results results={results} error={error} units={units}/>
      </Card>
    </React.Fragment>
  );
};

export default Weather;
