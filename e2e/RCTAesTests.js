import React, { Component } from 'react';
import { encryptWithAes } from '../src/utils/meat-grinder.js';
import { View, Text } from 'react-native';
var inputSizes = [16, 20, 48];
const testPrivateKey =
  '8238BAE35C77FE4AEBB2DEB1B83A6F0027A01D0E4D93BF5B81F7117796955A17';
export default class RCTAesTests extends Component {
  constructor(props) {
    super(props);
    this.state = { input16: 0, input20: 0, input48: 0 };
    inputSizes.map(inputSize => {
      this.encryptForSize(inputSize);
    });
  }
  async encryptForSize(sizeInBytes) {
    let aesOutput = await encryptWithAes(
      testPrivateKey,
      new Array(sizeInBytes).join('x')
    );
    if (!aesOutput) {
      throw Error('output is not good');
    }
    this.setState({ ['input'.concat(sizeInBytes)]: aesOutput.ciphertext });
    console.warn(this.state);
    return 'success';
  }
  render() {
    return (
      <View testID="welcome" style={{ flex: 1, justifyContent: 'center' }}>
        <Text testID="16ByteInput">{this.state.input16.length}</Text>
        <Text testID="20ByteInput">{this.state.input20.length}</Text>
        <Text testID="48ByteInput">{this.state.input48.length}</Text>
      </View>
    );
  }
}
