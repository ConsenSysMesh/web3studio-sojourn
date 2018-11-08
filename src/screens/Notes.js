import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Icon,
  Title,
  H3,
  Text,
  Fab,
  Card,
  CardItem
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectNotesDisplayList } from '../modules/notes/notesSelectors';
import theme from '../theme/variables';
import { Note } from '../modules/propTypes';

/**
 * Notes List screen
 */
export class Notes extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    notes: PropTypes.arrayOf(Note)
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
    const { notes } = this.props;

    return (
      <Container>
        <Header>
          <Body>
            <Title>Notes</Title>
          </Body>
        </Header>
        <ScrollView>
          <Content padder contentContainerStyle={styles.container}>
            {notes.map(note => (
              <Card key={note.id}>
                <CardItem>
                  <Body>
                    <Text note>{note.calendarLastModified}</Text>
                    {note.title ? (
                      <H3 numberOfLines={1}>{note.title}</H3>
                    ) : null}
                    {note.body ? (
                      <Text numberOfLines={2}>{note.body}</Text>
                    ) : null}
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
  notes: selectNotesDisplayList(state)
});

export default connect(mapStateToProps)(Notes);
