import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, H2, Text, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { signInWithUPort } from './signInReducer';
import { isSignedIn } from './signInSelectors';

/**
 * Sign in screen. Allows users to log in with uPort.
 */
export class SignInScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    isSignedIn: PropTypes.bool
  };

  /**
   * Called on prop update
   */
  componentDidUpdate() {
    this.navigateOnSignIn();
  }

  /**
   * Called on mount
   */
  componentDidMount() {
    this.navigateOnSignIn();
  }

  /**
   * Navigates to Application router when signed in
   */
  navigateOnSignIn = () => {
    const { navigation, isSignedIn } = this.props;

    if (isSignedIn) {
      navigation.navigate('App');
    }
  };

  /**
   * Dispatches sign in redux action
   */
  uPortLogin = async () => {
    const { signInWithUPort } = this.props;

    signInWithUPort();
  };

  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    return (
      <Container testID="sign-in-screen">
        <Content contentContainerStyle={styles.content}>
          <H2 style={styles.welcome}>Sojourn</H2>
          <Button style={styles.button} onPress={this.uPortLogin}>
            <Text>Continue with uPort</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40
  }
});

/**
 * Redux connect mappings
 *
 * @param {Object} state - redux state
 * @returns {{isSignedIn}} - injected props
 */
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
