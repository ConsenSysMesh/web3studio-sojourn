import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Icon,
  Title,
  Text,
  Fab,
  Card,
  CardItem
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { persistHash } from '../modules/meatGrinder/meatGrinderReducer';
import { selectHashDisplayList } from '../modules/meatGrinder/meatGrinderSelectors';
import { web3 } from '../modules/signIn/uport';
import theme from '../theme/variables';

/**
 * Notes List screen
 */
class Home extends PureComponent {
  static propTypes = {
    hashes: PropTypes.array
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
      <Container>
        <Header>
          <Body>
            <Title>Notes</Title>
          </Body>
        </Header>
        <ScrollView>
          <Content padder contentContainerStyle={styles.container}>
            {hashes.map(hash => (
              <Card icon key={hash.hash}>
                <CardItem>
                  <Icon
                    active
                    name={hash.status === 'confirmed' ? 'lock' : 'lock-open'}
                  />
                  <Body>
                    {hash.timestamp && <Text note>{hash.timestamp}</Text>}
                    <Text numberOfLines={1}>{hash.hash}</Text>
                  </Body>
                </CardItem>
              </Card>
            ))}
          </Content>
        </ScrollView>
        <Fab active={false} onPress={this.persistHash} style={styles.fab}>
          <Icon name="plus" />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    backgroundColor: theme.brandPrimary
  }
});

/**
 * Redux state mapper
 *
 * @param {Object} state - Redux state
 * @returns {{hashes}} - Mapped props
 */
const mapStateToProps = state => ({
  hashes: selectHashDisplayList(state)
});

const mapDispatchToProps = { persistHash };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
