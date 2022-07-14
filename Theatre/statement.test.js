const { statement, htmlStatement } = require('./statement');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

describe('Statement', () => {
  it('returns a text statement', () => {
    const expectedStatement = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`;
    const txtStatement = statement(invoices[0], plays);

    expect(txtStatement).toEqual(expectedStatement);
  });
});

describe('HTML Statement', () => {
  it('returns an html statement', () => {
    const expectedStatement = `<h1>Statement for BigCo</h1>\n<table>\n<tr><th>play</th><th>seats</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n</table>\n<p>Amount owed is <em>$1,730.00</em></p>\n<p>You earned <em>47</em> credits</p>\n`;
    const html = htmlStatement(invoices[0], plays);

    expect(html).toEqual(expectedStatement);
  });
});
