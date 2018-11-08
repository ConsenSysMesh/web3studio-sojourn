import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
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
   * Navigates to the Edit Note screen, new note
   */
  createNewNote = () => {
    this.props.navigation.navigate('EditNote');
  };

  /**
   * Navigates to the Edit Note screen, existing note
   *
   * @param {string} noteId - an existing note id
   * @returns {Function} - An onPress handler
   */
  handleNotePressed = noteId => () => {
    this.props.navigation.navigate('EditNote', { noteId });
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
                <CardItem button onPress={this.handleNotePressed(note.id)}>
                  <Body>
                    <Text style={styles.caption} note>
                      {note.calendarLastModified}
                    </Text>
                    <View style={styles.notesContainer}>
                      {note.title ? (
                        <H3 style={styles.title} numberOfLines={1}>
                          {note.title}
                        </H3>
                      ) : null}
                      {note.body ? (
                        <Text style={styles.body} numberOfLines={2}>
                          {note.body}
                        </Text>
                      ) : null}
                    </View>
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
  },
  notesContainer: {
    marginTop: 10
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
