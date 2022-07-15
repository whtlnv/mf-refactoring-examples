const { createStatementData } = require('./createStatementData');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

describe('createStatementData', () => {
  it('should create data... for statement', () => {
    const data = createStatementData(invoices[0], plays);
    const expected = {
      customer: 'BigCo',
      performances: [
        {
          amount: 65000,
          audience: 55,
          play: {
            name: 'Hamlet',
            type: 'tragedy',
          },
          playID: 'hamlet',
          volumeCredits: 25,
        },
        {
          amount: 58000,
          audience: 35,
          play: {
            name: 'As You Like It',
            type: 'comedy',
          },
          playID: 'as-like',
          volumeCredits: 12,
        },
        {
          amount: 50000,
          audience: 40,
          play: {
            name: 'Othello',
            type: 'tragedy',
          },
          playID: 'othello',
          volumeCredits: 10,
        },
      ],
      totalAmount: 173000,
      totalVolumeCredits: 47,
    };

    expect(data).toEqual(expect.objectContaining(expected));
  });
});
