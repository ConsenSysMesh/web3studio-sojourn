# Sojourn

A Self-Sovereign Journal

## Contributing

You'll need to set up a [uPort App](https://appmanager.uport.me/). Once you have one,
create a file `.env.development` in the root of the directory and fill in the details like below.

```
UPORT_APP_NAME=Sojourn
UPORT_APP_ADDRESS=2onKAS55Vs9hGwDPsBT6DYHwAP1HJ3FsBXh
UPORT_PRIVATE_KEY=<YOUR_PRIVATE_KEY>
INFURA_KEY=<INFURA_API_KEY>
DEPLOY_WALLET_MNEMONIC=<HD_WALLET_MNEMONIC>
```

### Deploying your own Smart Contracts

With `INFURA_KEY` and `DEPLOY_WALLET_MNEMONIC` set up in your `.env.development`, you can now deploy contracts.

Network definitions are located in `truffle.js`. You can add your own test-net or use ours. We've provided deployed contracts in Rinkeby for your use. To run a migration, simply run:

```bash
$ yarn truffle migrate
```

For more details see [Truffle's Documentation.](https://truffleframework.com/docs/truffle/getting-started/running-migrations)

# Testing

### End to End Tests

Run `yarn e2e` to run end to end tests. Because schemes other than debug and release are not trivial in react-native,
and because javascript environment variables are not trivial to pass in react-native,
there are two index files, index.ios.js which is the entry point for the regular app as it should be used in production,
and index.e2e.js, an entry point which is used for e2e tests. This is a temporary measure, as a way to test native modules
on the javascript side that are not yet integrated into the app (mainly for cryptography functions);
