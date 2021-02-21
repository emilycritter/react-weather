import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [location, setLocation] = useState('76102');

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('/api/search-location', {
        params: {
          location: location
        }
      });
      console.log(data);
    };

    const timeoutId = setTimeout(() => {
      if (location) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [location]);

  return (
    <div className="search">
      <div className="form">
        <div className="field">
          <label>Enter City or Zip</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
