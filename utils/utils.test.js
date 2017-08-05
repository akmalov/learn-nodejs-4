const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
   let res = utils.add(33, 11);

   expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should set firstName and lastName', () => {
    let user = {location: 'Philadelphia', age: 25};
    let res = utils.setName(user, 'John Doe');

    expect(user).toInclude({
        firstName: 'John',
        lastName: 'Doe'
    });
});