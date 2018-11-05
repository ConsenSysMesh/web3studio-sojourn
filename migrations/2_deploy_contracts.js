var HashNotary = artifacts.require('./HashNotary.sol');

module.exports = deployer => {
  deployer.deploy(HashNotary);
};
