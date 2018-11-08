<h1 align="center">
  Sojourn
</h1>

<h4 align="center">
  A React Native DevKit with code for a Web3 Decentralized Data Storage Pattern.
</h4>

<p align="center">
  <a href="#getting-started">Getting Started</a> ∙
  <a href="#license">License</a> ∙
  <a href="#devkit">DevKit</a> ∙
  <a href="#description">Description</a> ∙
  <a href="#consensys-web3-studio---durham">ConsenSys Web3 Studio - Durham</a>
</p>

## Getting Started

This DevKit includes a [React Native](https://facebook.github.io/react-native/) app built
with a focus on iOS. To demonstrate the pattern, we're using [uPort](https://www.uport.me/)
for authentication and Ethereum interactions. Developers are encouraged to use
other providers where it makes sense. To get up and running you need to:

Clone the repo and install dependencies:

```bash
$ git clone git@github.com:ConsenSys/imagineering-sojourn.git
$ cd imagineering-sojourn
$ yarn install
```

Register a [uPort App](https://appmanager.uport.me/) and fill in the details
in file named `.env.development`.

```env
# .env.development

UPORT_APP_NAME=Sojourn
UPORT_APP_ADDRESS=<YOUR_APP_ADDRESS>
UPORT_PRIVATE_KEY=<YOUR_PRIVATE_KEY>
```

Run the development app to a simulator. (Uses [ganache-cli](https://github.com/trufflesuite/ganache-cli) for Ethereum interactions.)

```bash
# One time per simulator to install
$ yarn ios

# Every time to start the metro bundler and ganache cli
$ yarn start
```

Run the development app on your device. (Uses uPort and requires an installed [uPort](https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8) app on your phone).

```bash
# One time per device to install
$ yarn react-native run-ios --device "<YOUR_DEVICE_NAME>"

# Every time to start the metro bundler
$ yarn start
```

### Deploying your own Smart Contracts

We've provided deployed smart contracts for Rinkeby. If you'd like to deploy
your own, or on a different network, create an [infura.io](https://infura.io/dashboard)
api key and setup an HD wallet like metamask and add them to your `.env.development` file.

```env
# .env.development

# ... Other environment variables

INFURA_KEY=<INFURA_API_KEY>
DEPLOY_WALLET_MNEMONIC=<HD_WALLET_MNEMONIC>
```

Network definitions are located in `truffle.js`. You can add your own test-net
or use ours. To do a migration, run:

```bash
$ yarn truffle migrate --network YOUR_NETWORK_ID
```

For more details see [Truffle's Documentation.](https://truffleframework.com/docs/truffle/getting-started/running-migrations)

## License

## DevKit

## Description

## ConsenSys Web3 Studio - Durham
