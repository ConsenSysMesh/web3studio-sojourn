import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Application Home Screen
 */
export default class Home extends Component {
  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to SoJourn!</Text>
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
