import request from 'supertest';
import expect from 'expect.js';
import app from '../server/app';
import factory from './factory/index';

let phoneNumber;
describe('#POST create a new user', () => {
  it('Signup', async () => {
    try {
      const userData = await factory.attrs('User');
      const res = await request(app).post('/api/v1/users')
        .send(userData)
        .set('Accept', 'application/json')
        .expect(201);
      // eslint-disable-next-line prefer-destructuring
      phoneNumber = res.body.data.phoneNumber;
      expect(res.body).have.property('success');
      expect(res.body.success).to.equal(true);
      expect(res.body).have.property('statusCode');
      expect(res.body.statusCode).to.equal(201);
      expect(res.body).have.property('message');
      expect(res.body.message).to.equal('User created Successfully');
      expect(res.body.data).have.property('firstName');
      expect(res.body.data).have.property('lastName');
      expect(res.body.data).have.property('phoneNumber');
      expect(res.body.data).have.property('_id');
      expect(res.body.data).have.property('createdAt');
      expect(res.body.data).have.property('updatedAt');
    } catch (error) {
      throw new Error(error);
    }
  });

  it('Signin', async () => {
    try {
      const loginData = {
        phoneNumber,
        password: 'password1234',
      };
      const res = await request(app).post('/api/v1/login')
        .send(loginData)
        .set('Accept', 'application/json')
        .expect(200);
      expect(res.body).have.property('success');
      expect(res.body.success).to.equal(true);
      expect(res.body).have.property('statusCode');
      expect(res.body.statusCode).to.equal(200);
      expect(res.body).have.property('message');
      expect(res.body.message).to.equal('User login Successfully');
      expect(res.body.data.user).have.property('firstName');
      expect(res.body.data.user).have.property('lastName');
      expect(res.body.data.user).have.property('phoneNumber');
      expect(res.body.data.user).have.property('_id');
      expect(res.body.data.user).have.property('createdAt');
      expect(res.body.data.user).have.property('updatedAt');
    } catch (error) {
      throw new Error(error);
    }
  });
});
