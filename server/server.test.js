const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done);
        });
    });

    describe('GET /', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Mike',
                        age: 30
                    });
                })
                .end(done);
        });
    })
});



