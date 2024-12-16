const app = require('../app');
const request = require('supertest');

describe('POST /park', () => {
  it('responds with an unauthorize', async () => {
    await request(app).post('/park').set('Accept', 'application/json').expect('Content-Type', /json/).expect(401);
  });
  it('responds with parked details with slot number', async () => {
    await request(app)
      .post('/park')
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY3NTU2ODQ4fQ._9QZVlaNVn-TT7Vciyg-X-FOL5RUCN3KZilABeLxeqU',
      )
      .send({
        car: 'GJ01SG5816',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('isAvailable');
        expect(response.body.data.isAvailable).toBe(false);
      });
  });
  it('responds with already parked car details', async () => {
    await request(app)
      .post('/park')
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY3NTU2ODQ4fQ._9QZVlaNVn-TT7Vciyg-X-FOL5RUCN3KZilABeLxeqU',
      )
      .send({
        car: 'GJ01SG5816',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('isAvailable');
        expect(response.body.data.isAvailable).toBe(false);
        expect(response.body.data.slot).toBe('Already Parked in slot 1');
      });
  });
});
