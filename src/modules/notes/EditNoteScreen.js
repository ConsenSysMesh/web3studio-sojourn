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
import { web3 } from '../signIn/uport';
import { persistHash } from './notesReducer';

/**
 * Screen to allow users to create or edit a note
 */
export class EditNoteScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    persistHash: PropTypes.func
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  handleSave = () => {
    const { persistHash } = this.props;
    const hash = web3.utils.sha3(Date.now().toString());

    persistHash(hash);
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

const mapDispatchToProps = { persistHash };

export default connect(
  null,
  mapDispatchToProps
)(EditNoteScreen);
