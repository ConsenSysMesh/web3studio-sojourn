import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import {
  Body,
  Left,
  Right,
  Container,
  Header,
  Button,
  Icon,
  Text,
  Title
} from 'native-base';
import { connect } from 'react-redux';
import theme from '../../theme/variables';
import { noteChanged, notarizeAndSaveNoteToVault } from './notesReducer';
import { selectCurrentNote } from './notesSelectors';
import { Note } from '../propTypes';

/**
 * Screen to allow users to create or edit a note
 */
export class EditNoteScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    noteChanged: PropTypes.func,
    notarizeAndSaveNoteToVault: PropTypes.func,
    note: Note
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  handleSave = () => {
    const { notarizeAndSaveNoteToVault, note } = this.props;

    notarizeAndSaveNoteToVault(note);

    this.goBack();
  };

  /**
   * Give focus to the text area on enter.
   * Allows for a line-wrapping single line header
   *
   * @private
   */
  handleTitleSubmitEditing = () => {
    this.textAreaInputRef.current.focus();
  };

  titleInputRef = createRef();
  textAreaInputRef = createRef();

  /**
   * Handle change for fields and set the state
   *
   * @private
   * @param {string} name - name of the field
   * @returns {Function} - A onChangeText handler
   */
  handleTextChange = name => text => {
    const { note, noteChanged, navigation } = this.props;

    navigation.setParams({
      noteId: note.id
    });

    noteChanged({
      ...note,
      [name]: text
    });
  };

  handleTitleTextChange = this.handleTextChange('title');
  handleBodyTextChange = this.handleTextChange('body');

  /**
   * Renders the component
   *
   * @returns {React.element} - Element to render
   */
  render() {
    const { note } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name="chevron-left" />
            </Button>
          </Left>
          <Body>
            <Title>New Note</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.handleSave}>
              <Text>Done</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              ref={this.titleInputRef}
              style={styles.title}
              placeholderTextColor={theme.inputColorPlaceholder}
              onChangeText={this.handleTitleTextChange}
              placeholder="Title"
              defaultValue={note.title}
              multiline
              autoCapitalize="sentences"
              returnKeyType="go"
              blurOnSubmit={true}
              onSubmitEditing={this.handleTitleSubmitEditing}
            />
            <TextInput
              ref={this.textAreaInputRef}
              style={styles.textArea}
              onChangeText={this.handleBodyTextChange}
              placeholder="Start writing"
              defaultValue={note.body}
              autoFocus
              placeholderTextColor={theme.inputColorPlaceholder}
              multiline
            />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  form: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 10
  },
  title: {
    fontFamily: theme.titleFontfamily,
    fontSize: theme.fontSizeH3
  },
  textArea: {
    flexGrow: 1,
    fontFamily: theme.fontfamily,
    fontSize: theme.fontSizeBase,
    paddingTop: 10
  }
});

/**
 * Redux state mapper
 *
 * @param {Object} state - Redux state
 * @param {Object} props - React element props
 * @returns {{hashes}} - Mapped props
 */
const mapStateToProps = (state, props) => ({
  note: selectCurrentNote(state, props)
});

const mapDispatchToProps = { noteChanged, notarizeAndSaveNoteToVault };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteScreen);
