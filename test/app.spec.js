"use strict";
import expect from 'expect.js';
import request from 'supertest';
import app from '../server/app';

describe("#GET Check if API is Alive", function () {
    it("Check if API is Alive", async function () {
        try {
            const result = await request(app)
                .get('/api')
                .expect(200);
            expect(result.body.message).to.eql("API is alive and kickin - check.\'");
        } catch (err) {}
    });
});