import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connectDrizzleState } from '../components/DrizzleProvider';
import StringStore from '../../build/contracts/StringStore.json';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Home extends Component {
  static propTypes = {
    drizzleInitialized: PropTypes.bool
  };

  deployContract = async () => {
    const {
      account,
      drizzle: { web3 }
    } = this.props;

    const stringStore = new web3.eth.Contract(StringStore.abi, null, {
      from: account,
      gas: 4712388,
      data: StringStore.bytecode
    });

    const deployedStore = await stringStore.deploy().send();

    alert(deployedStore._address);
  };

  render() {
    const { drizzleInitialized } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to SoJourn!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {drizzleInitialized && (
          <Button title={'Deploy Contract'} onPress={this.deployContract} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    account: state.accounts[0]
  };
};

export default connectDrizzleState(mapStateToProps)(Home);
