import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, H2, Text, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { setupUport } from './setupReducer';
import { hasSetupUport } from './setupSelectors';

/**
 * Sign in screen. Allows users to log in with uPort.
 */
export class SetupScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    hasSetupUport: PropTypes.bool
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
    const { navigation, hasSetupUport } = this.props;

    if (hasSetupUport) {
      navigation.navigate('App');
    }
  };

  /**
   * Dispatches sign in redux action
   */
  uPortLogin = async () => {
    const { setupUport } = this.props;

    setupUport();
  };

  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    return (
      <Container testID="setup-screen">
        <Content contentContainerStyle={styles.content}>
          <H2 style={styles.welcome}>Sojourn</H2>
          <Text style={styles.welcome}>
            Sojourn uses uPort to make your notes tamper-resistant. Add or
            create your uPort Identity.
          </Text>
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
  welcome: {
    textAlign: 'center',
    marginTop: 20
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
  hasSetupUport: hasSetupUport(state)
});

const mapDispatchToProps = {
  setupUport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen);
