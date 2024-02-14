const assert = require('assert');
const supertest = require('supertest');
const { app } = require('../index');
const connection = require('../db/index');

const request = supertest(app);

describe('User Controller', () => {

  it('should create a new user', async () => {
    const newUser = {
      "firstname": 'John',
      "lastname": 'Doe',
      "email": 'john.doe@example.com',
      "address": 'street 143',
      "password": 'SecureP@ssword'
    };

    const response = await request.post('/users/create').send(newUser);

    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.body.message, 'User created successfully');
    assert.deepStrictEqual(response.body.user, newUser);
  });

  it('should handle invalid user data', async () => {
    const invalidUser = {
      
    };

    const response = await request.post('/users/create').send(invalidUser);

    assert.strictEqual(response.status, 400);
    assert.ok(response.body.error);
  });
});
 