const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
   let res = utils.add(33, 11);

   expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
   utils.asyncAdd(4, 3, (sum) => {
       expect(sum).toBe(7).toBeA('number');
       done();
   })
});

it('should square a number', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
   utils.asyncSquare(5, (res) => {
       expect(res).toBe(25).toBeA('number');
       done();
   })
});

it('should set firstName and lastName', () => {
    let user = {location: 'Philadelphia', age: 25};
    let res = utils.setName(user, 'John Doe');

    expect(user).toInclude({
        firstName: 'John',
        lastName: 'Doe'
    });
});