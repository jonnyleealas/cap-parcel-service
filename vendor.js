'use strict';
require('./events');


/*

store name =process.env.STORE
every 5 seconds simulate a new order
- must have a fake order as an object:
{
storeName, id, customerName, address
}
- emit pickup event and attach the fake order as payload
Vender alerts dirver to pickup
{
use faker library to make phony info
}
- give a thank you for delivered item in console
vendor reads transit and says cool
vendor reads delivered and says thanks with id


*/