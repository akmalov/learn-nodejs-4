const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return hello world response', (done) => {
   request(app)
       .get('/')
       .expect(200)
       .expect('Hello world!')
       .end(done);
});

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