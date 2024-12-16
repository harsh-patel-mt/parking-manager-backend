const app = require('../app');
const request = require('supertest');

describe('POST /unpark', () => {
  it('responds with an unauthorize', async () => {
    await request(app).post('/unpark').set('Accept', 'application/json').expect('Content-Type', /json/).expect(401);
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
  it('responds with car unparked', async () => {
    await request(app)
      .post('/unpark')
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
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Car Found and Slot is available now!');
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('isAvailable');
        expect(response.body.data.isAvailable).toBe(true);
      });
  });
  it('responds with car not found', async () => {
    await request(app)
      .post('/unpark')
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY3NTU2ODQ4fQ._9QZVlaNVn-TT7Vciyg-X-FOL5RUCN3KZilABeLxeqU',
      )
      .send({
        car: 'GJ01SG5816',
      })
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Car not found!');
      });
  });
});
