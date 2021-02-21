import placeholder from '../images/weather-placeholder.gif';
import './Results.scss';

const Results = ({ results, error }) => {
  if (results && results.weather && !error) {
    const { weather, main: { temp, feels_like, temp_max, temp_min }, name } = results;
    const { main, description, icon } = weather[0];

    return (
      <div className="results">
        <div className="results__current-conditions">
          <h2>{name} Weather</h2>
          <div className="results__current-temperate">{parseInt(temp)}&deg;F</div>
          <p>
            <strong>{main}</strong><br />
            Feels like {parseInt(feels_like)}&deg;
          </p>
        </div>
        <div className="results__overview">
          <div className="results__description">{description}</div>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <div className="results__daily-range">
            {parseInt(temp_max)}&deg; / {parseInt(temp_min)}&deg;
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="results__placeholder">
        <img
          src={placeholder} alt="Animated icon of different weather."
          width="375" height="282"
        />
      </div>
    );
  }
};

export default Results;
