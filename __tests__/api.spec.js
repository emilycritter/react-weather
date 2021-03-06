const request = require('supertest');
const app = require('../index');

describe('GET /api/search-location', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/api/search-location')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with error when no location is provided', function(done) {
    request(app)
      .get('/api/search-location')
      .expect(function(res) {
        res.body.error == 'Please provide a location.'
      })
      .expect(200, done)
  });

  it('responds with weather data when a zipcode is provided', function(done) {
    request(app)
      .get('/api/search-location')
      .query({
        'location': '76102'
      })
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.length != 0;
        res.body.weather.length != 0;
      })
      .expect(200, done)
  });

  it('responds with weather data when a city is provided', function(done) {
    request(app)
      .get('/api/search-location')
      .query({
        'location': 'Fort Worth, TX'
      })
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.length != 0;
        res.body.weather.length != 0;
      })
      .expect(200, done)
  });

  it('responds with an error when a bad location is provided', function(done) {
    request(app)
      .get('/api/search-location')
      .query({
        'location': 'this is a non sense location asdkgfja'
      })
      .expect(function(res) {
        res.body.name == 'Error'
      })
      .expect(200, done)
  });
});
