<h1 align="center">
  <br/>
  <a href='https://consensys.github.io/web3studio-sojourn/'><img 
      width='100px' 
      alt='' 
      src="https://user-images.githubusercontent.com/5770007/48513223-45f83e00-e829-11e8-97c4-72850d7b46d8.png" /></a>
  <br/>
  Sojourn
  <br/>
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

<p align='center'>
  <br/>
  <br/>
  <a href='https://consensys.github.io/web3studio-sojourn/'><img 
      alt='' 
      src="https://user-images.githubusercontent.com/5770007/48524945-3cce9780-e850-11e8-9f71-6c81b7b1525d.png" /></a>
  <br/>
  <br/>
</p>

Sojourn is a really simple example of what you can do with an approach to Web3
storage that our team simplified for a React Native application.
It’s a note taking application...or rather, it is a set of UI and back-end
components that you can use to construct your own Web3 note taking application.

<p align='center'>
  <br/>
  <br/>
  <img 
    alt='' 
    src="https://user-images.githubusercontent.com/5770007/48513239-50b2d300-e829-11e8-9dd5-04c4fa009555.gif" />
  <br/>
  <br/>
<p align='center'>

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

## Storage
Sojourn uses IPFS to securely store each document in a way where the user can access it from any device without compromising the security of their data. The way we do this is via Shamir's Secret Sharing Algorithm. Specifically, it encrypts each file with AES, splits it apart with Shamir's Secret Sharing Algorithm, and spreads the shards onto IPFS. Web3Studio created an open source project integrating this pipeline into React-Native, [`react-native-sssa`](https://github.com/ConsenSys/react-native-sssa). Pull request are welcome and encouraged.

## DevKit

[Go to the Devkit](https://consensys.github.io/web3studio-sojourn/)

The ConsenSys Web3 Studio in Durham, NC has a pretty sweet job. Our team of
developers, designers and writers spend our days coming up with what we hope
are novel, unexpected ways to use blockchain and Web3-related technologies.

We publish stories about these uses in the form of “product reviews from the
near future” on [Medium](https://medium.com/web3studio). Then we build some of these stories into
[developer kits](https://consensys.github.io/web3studio-sojourn/) like this
one. The kits are open source.

Success for us is you taking the kit’s ideas and open source code and building
your own web3 applications.

What do we want in return? Two things:

1. We never say no to [tweets](https://twitter.com/web3studio) and other signs of thanks and comments;
2. We want to hear about what you are building! [Tweet us](https://twitter.com/web3studio) and let us know.
