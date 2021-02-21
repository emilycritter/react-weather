import React, { useState } from 'react';
import Card from './Card';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState({});
  const [error, setError] = useState(false);

  const onFormSubmit = async (location) => {
    await axios.get('/api/search-location', {
      params: {
        location: location
      }
    })
    .then(response => {
      if (!response.data || !response.data.weather) {
        setError(true);
      }
      setResults(response.data);
      setError(false);
    })
    .catch(error => {
      setError(true);
    });
  }

  return (
    <React.Fragment>
      <Card>
        <h1 className="text-center">React Weather App</h1>
        <Search label="Enter City or Zip" onFormSubmit={onFormSubmit} error={error}/>
      </Card>
      <Card>
        <Results results={results} error={error}/>
      </Card>
    </React.Fragment>
  );
};

export default Weather;
