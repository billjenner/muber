const assert = require('assert');
const request = require('supertest');
const app = require('../app');


describe('The express app', () => {
    it('handles a get request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                //console.log(response);
                assert(responce.body.hi === 'there');
                done();
        });
    });
});
