const expect = require('chai').expect;
const HashPersistor = artifacts.require('HashPersistor');

contract('HashProvider', accounts => {
  let hashProvider;

  beforeEach(async () => {
    hashProvider = await HashPersistor.deployed();
  });

  it('should allow you to save a hash', async () => {
    const hash = web3.utils.sha3("Pinkie Pie's pies are the best.");
    await hashProvider.save(hash);
    const savedTimestamp = await hashProvider.hashes.call(accounts[0], hash);

    expect(savedTimestamp).to.exist;
  });

  it('should allow you to easily fetch a saved timestamp', async () => {
    const startTime = Math.floor(Date.now() / 1000);
    const hash = web3.utils.sha3('Rainbow dash is twenty percent cooler.');
    await hashProvider.save(hash);
    const savedTimestamp = await hashProvider.getTimestamp(hash);

    expect(savedTimestamp.toNumber()).to.be.at.least(startTime);
  });
});
