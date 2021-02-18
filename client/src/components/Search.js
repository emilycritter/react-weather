import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [zip, setZip] = useState('76102');

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('/api/search-location', {
        params: {
          location: zip
        }
      });
      console.log(data);
    };

    const timeoutId = setTimeout(() => {
      if (zip) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [zip]);

  return (
    <div>
      <div className="form">
        <div className="field">
          <label>Input Zip</label>
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
