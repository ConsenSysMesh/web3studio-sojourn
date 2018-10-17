import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import configureUportConnect from 'react-native-uport-connect';
import {
  UPORT_APP_NAME,
  UPORT_APP_ADDRESS,
  UPORT_PRIVATE_KEY
} from 'react-native-dotenv';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  uPortLogin = async () => {
    const { uport } = configureUportConnect({
      appName: UPORT_APP_NAME,
      appAddress: UPORT_APP_ADDRESS,
      privateKey: UPORT_PRIVATE_KEY
    });

    const result = await uport.requestCredentials({
      requested: ['name', 'avatar']
    });

    alert(JSON.stringify(result));
  };

  render() {
    return (
      <View testID="welcome" style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title={'Log in with uPort'} onPress={this.uPortLogin} />
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
