import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { signInWithUPort } from './signInReducer';
import { isSignedIn } from './signInSelectors';

class SignInScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    isSignedIn: PropTypes.bool
  };

  componentDidUpdate() {
    const { navigation, isSignedIn } = this.props;

    if (isSignedIn) {
      navigation.navigate('App');
    }
  }

  uPortLogin = async () => {
    const { signInWithUPort } = this.props;

    signInWithUPort();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sojourn</Text>
        <Button title={'Continue with uPort'} onPress={this.uPortLogin} />
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

const mapStateToProps = state => ({
  isSignedIn: isSignedIn(state)
});

const mapDispatchToProps = {
  signInWithUPort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
