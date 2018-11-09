import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isSignedIn } from '../modules/signIn/signInSelectors';
import { Container, Content } from 'native-base';

/**
 * App loading screen. Handles routing to authentication flow.
 */
export class Loading extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool,
    navigation: PropTypes.object
  };

  /**
   * Redirects to correct screen.
   */
  componentDidMount() {
    const { navigation, isSignedIn } = this.props;

    if (!navigation) {
      // Still waiting on state to load
      return;
    }

    navigation.navigate(isSignedIn ? 'App' : 'Auth');
  }

  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    return (
      <Container testID="sign-in-screen">
        <Content contentContainerStyle={styles.content} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
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

export default connect(mapStateToProps)(Loading);
