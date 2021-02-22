# React Weather App

## Project description  
This application accepts a user input (i.e. City or Zip) and returns current weather data. The weather data is provided by the [Open Weather Map API](https://openweathermap.org/current).

## Local Setup  

### Development
* Node v14.x.x
* To install node modules after initial clone, run `yarn` from both the project root and client directory

### Starting Local Server
* To start the React app and Express server, run `npm run dev`
* To start the just Express server, run `npm start` from the project root

### Running Tests
* To run tests, run `npm test` from the project root

## Limitations
* The application currently works for locations in the US
* The application does not allow the user to select whether they'd like to see results in Fahrenheit or Celsius
* The OpenWeather API returns the location name, but it does not include the state
  - As a result, locations that exist in more than one state (e.g. Arlington, Virginia and Arlington, Texas) are difficult to search
      * Potential workarounds:
        - Prompt the user to include the city and state
        - Return a map of the location so users can verify the results are for their intended location
        - Incorporate another API  to get more accurate weather results

## Enhancements & Future Iterations
* Replace placeholder gif with animated svg or html5 video to improve performance
* Add pause functionality to animation for accessibility
* Add 5 day forecast
* Allow user to search outside of US
  - Include Fahrenheit or Celsius toggle (with default based on location)
* Get user's location by IP to populate results initially
* Add more robust testing
  - Unit test Results component and the Search component form submission
  - Add integration tests
