import request from 'supertest';
import expect from 'expect.js';
import app from '../server/app';
import factory from './factory/index';

let taxiId;
describe('#POST create a new taxi', () => {
  it('Create A new Taxi', async () => {
    try {
      const taxiData = await factory.attrs('Taxi');
      const res = await request(app).post('/api/v1/taxis')
        .send(taxiData)
        .set('Accept', 'application/json')
        .expect(201);
      // eslint-disable-next-line prefer-destructuring
      expect(res.body).have.property('success');
      expect(res.body.success).to.equal(true);
      expect(res.body).have.property('statusCode');
      expect(res.body.statusCode).to.equal(201);
      expect(res.body).have.property('message');
      expect(res.body.message).to.equal('Taxi created Successfully');
      expect(res.body.data).have.property('plateNumber');
      expect(res.body.data).have.property('model');
      expect(res.body.data).have.property('owner');
      expect(res.body.data).have.property('taxiImage');
      expect(res.body.data).have.property('_id');
      expect(res.body.data).have.property('createdAt');
      expect(res.body.data).have.property('updatedAt');
      taxiId = res.body.data._id;
    } catch (error) {
      throw new Error(error);
    }
  });
});

describe('#GET get taxi', () => {
  it('Get taxi', async () => {
    try {
      const res = await request(app).get(`/api/v1/taxis/${taxiId}`)
        .set('Accept', 'application/json')
        .expect(200);
      expect(res.body).have.property('success');
      expect(res.body.success).to.equal(true);
      expect(res.body).have.property('statusCode');
      expect(res.body.statusCode).to.equal(200);
      expect(res.body).have.property('message');
      expect(res.body.message).to.equal('Taxi retrieved Successfully');
      expect(res.body.data).have.property('plateNumber');
      expect(res.body.data).have.property('model');
      expect(res.body.data).have.property('owner');
      expect(res.body.data).have.property('taxiImage');
      expect(res.body.data).have.property('_id');
      expect(res.body.data).have.property('createdAt');
      expect(res.body.data).have.property('updatedAt');
    } catch (error) {
      throw new Error(error);
    }
  });
});

describe('#GET get all taxi', () => {
  it('Get taxis', async () => {
    try {
      const res = await request(app).get('/api/v1/taxis')
        .set('Accept', 'application/json')
        .expect(200);
      expect(res.body).have.property('success');
      expect(res.body.success).to.equal(true);
      expect(res.body).have.property('statusCode');
      expect(res.body.statusCode).to.equal(200);
      expect(res.body).have.property('message');
      expect(res.body.message).to.equal('Taxis retrieved Successfully');
      expect(res.body.data[0]).have.property('plateNumber');
      expect(res.body.data[0]).have.property('model');
      expect(res.body.data[0]).have.property('owner');
      expect(res.body.data[0]).have.property('taxiImage');
      expect(res.body.data[0]).have.property('_id');
      expect(res.body.data[0]).have.property('createdAt');
      expect(res.body.data[0]).have.property('updatedAt');
    } catch (error) {
      throw new Error(error);
    }
  });
});
