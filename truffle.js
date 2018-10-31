const HDWalletProvider = require('truffle-hdwallet-provider');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env.development') });

const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.DEPLOY_WALLET_MNEMONIC;

module.exports = {
  networks: {
    development: {
      contracts_build_directory: `{__dirname}/build/devContracts`,
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/${infuraKey}`
        ),
      network_id: 4
    }
  }
};
