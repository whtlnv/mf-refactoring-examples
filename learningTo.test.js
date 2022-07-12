const { Province } = require('./Province');
const { sampleProvinceData } = require('./sampleProvinceData');

describe('province', function () {
  it('shortfall', function () {
    console.log(sampleProvinceData);
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
  it('profit', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).toBe(230);
  });
});
