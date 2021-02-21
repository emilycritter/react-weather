import React, { useState } from 'react';
import Card from './Card';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [results, setResults] = useState({});

  const onFormSubmit = async (location) => {
    const { data } = await axios.get('/api/search-location', {
      params: {
        location: location
      }
    });
    setResults(data);
  }

  return (
    <React.Fragment>
      <Card>
        <h1 className="text-center">React Weather App</h1>
        <Search label="Enter City or Zip" onFormSubmit={onFormSubmit} />
      </Card>
      <Card>
        <Results results={results} />
      </Card>
    </React.Fragment>
  );
};

export default Weather;
