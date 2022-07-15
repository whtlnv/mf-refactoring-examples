const { PerformanceCalculator } = require('./PerformanceCalculator');

function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, perf) => total + perf.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, perf) => total + perf.amount, 0);
  }
}

module.exports = { createStatementData };
