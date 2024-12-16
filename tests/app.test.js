const app = require('../app');
const request = require('supertest');

//not found
describe('GET /what-is-this-even', () => {
  it('responds with a not found message', (done) => {
    request(app).get('/what-is-this-even').set('Accept', 'application/json').expect(404, done);
  });
});

//health check
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { status: 1, message: 'PARKING MANAGER BACKEND APIs.' }, done);
  });
});
