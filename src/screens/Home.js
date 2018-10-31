import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { persistHash } from '../modules/meatGrinder/meatGrinderReducer';
import { selectHashes } from '../modules/meatGrinder/meatGrinderSelectors';
import { web3 } from '../modules/signIn/uport';

/**
 * Application Home Screen
 */
class Home extends PureComponent {
  static propTypes = {
    hashes: PropTypes.object
  };

  /**
   * Persists a random hash as a test of uPort interacting with a smart contract
   */
  persistHash = async () => {
    const { persistHash } = this.props;
    const hash = web3.utils.sha3(Date.now().toString());

    persistHash(hash);
  };
  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    const { hashes } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to SoJourn!</Text>
        <Button title="Save Hash" onPress={this.persistHash} />

        {Object.keys(hashes).map(hash => (
          <Text key={hash}>
            {hash}: {hashes[hash].status}
            {hashes[hash].timestamp && hashes[hash].timestamp}
          </Text>
        ))}
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

/**
 * Redux state mapper
 *
 * @param {Object} state - Redux state
 * @returns {{hashes}} - Mapped props
 */
const mapStateToProps = state => ({
  hashes: selectHashes(state)
});

const mapDispatchToProps = { persistHash };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
