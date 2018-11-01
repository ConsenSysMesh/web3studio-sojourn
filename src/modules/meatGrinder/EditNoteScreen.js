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
import theme from '../../theme/variables';

/**
 * Screen to allow users to create or edit a note
 */
class EditNoteScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  /**
   * Give focus to the text area on enter.
   * Allows for a line-wrapping single line header
   */
  handleTitleSubmitEditing = () => {
    this.textAreaInputRef.current.focus();
  };

  titleInputRef = createRef();
  textAreaInputRef = createRef();

  /**
   * Renders the component
   *
   * @returns {React.element} - Element to render
   */
  render() {
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
            <Button transparent>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              ref={this.titleInputRef}
              style={styles.title}
              placeholderTextColor={theme.inputColorPlaceholder}
              placeholder="Title"
              multiline
              autoCapitalize="sentences"
              returnKeyType="go"
              blurOnSubmit={true}
              onSubmitEditing={this.handleTitleSubmitEditing}
            />
            <TextInput
              ref={this.textAreaInputRef}
              style={styles.textArea}
              placeholder="Start writing"
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
    lineHeight: 10,
    paddingTop: 10
  }
});

export default EditNoteScreen;
