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
import { persistHash } from '../modules/notes/notesReducer';
import { selectHashDisplayList } from '../modules/notes/notesSelectors';
import theme from '../theme/variables';

/**
 * Notes List screen
 */
export class Notes extends PureComponent {
  static propTypes = {
    hashes: PropTypes.array,
    navigation: PropTypes.object
  };

  /**
   * Navigates to the Edit Note screen
   */
  createNewNote = () => {
    this.props.navigation.navigate('EditNote');
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
        <Fab active={false} onPress={this.createNewNote} style={styles.fab}>
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
)(Notes);
