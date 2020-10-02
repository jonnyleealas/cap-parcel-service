'use strict';
require('./events');
const faker = require('faker');

const address = faker.address.streetAddress();
const idNumber = faker.random.uuid();
const fakeName = faker.name.findName();
// const address = faker.address.streetAddress();
console.log({
  fakeName,
  address,
  idNumber
});
