const { statement } = require('./statement');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

const txtStatement = statement(invoices[0], plays);

console.log(txtStatement);
