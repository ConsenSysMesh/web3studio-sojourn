var HashPersistor = artifacts.require('./HashPersistor.sol');

module.exports = deployer => {
  deployer.deploy(HashPersistor);
};
