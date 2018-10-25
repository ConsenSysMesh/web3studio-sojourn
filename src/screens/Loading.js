import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isSignedIn } from '../modules/signIn/signInSelectors';

export class Loading extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool,
    navigation: PropTypes.object
  };

  componentDidMount() {
    const { navigation, isSignedIn } = this.props;

    if (!navigation) {
      // Still waiting on state to load
      return;
    }

    navigation.navigate(isSignedIn ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sojourn</Text>
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
  }
});

const mapStateToProps = state => ({
  isSignedIn: isSignedIn(state)
});

export default connect(mapStateToProps)(Loading);
