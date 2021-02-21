import React from 'react';
import './Results.scss';

const Results = ({ results }) => {
  if (results && results.weather) {
    const {weather, main, name} = results;
    const {description, icon} = weather[0];

    return (
      <div className="results">
        <div className="results__details">
          <h2>{name} Weather</h2>
          <div className="results__current-temperate">{parseInt(main.temp)}&deg; F</div>
          <p>
            <strong>{description}</strong><br />
            Feels like {parseInt(main.feels_like)}&deg;
          </p>
        </div>
        <div className="results__overview">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <div className="results__daily-temperature">
            {parseInt(main.temp_max)}&deg; / {parseInt(main.temp_min)}&deg;
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Nothing to see here
      </div>
    );
  }
};

export default Results;
