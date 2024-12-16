const app = require('../app');
const request = require('supertest');

describe('GET /slot?slot=1', () => {
  it('responds with an unauthorize', async () => {
    await request(app).get('/slot?slot=1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(401);
  });
  it('responds with slot status', async () => {
    await request(app)
      .get('/slot?slot=1')
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY3NTU2ODQ4fQ._9QZVlaNVn-TT7Vciyg-X-FOL5RUCN3KZilABeLxeqU',
      )
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('data');
      });
  });
});
