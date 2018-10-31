import React, { Component } from 'react';
import { encryptWithAes } from '../src/utils/meat-grinder.js';
import { View, Text } from 'react-native';

const inputSizes = [16, 20, 48];
const testPrivateKey =
  '8238BAE35C77FE4AEBB2DEB1B83A6F0027A01D0E4D93BF5B81F7117796955A17';

/**
 * Application root for end to end tests
 */
export default class E2ETests extends Component {
  /**
   * Component constructor
   *
   * @param {Object} props - Element Properties
   */
  constructor(props) {
    super(props);
    this.state = { input16: 0, input20: 0, input48: 0 };
    inputSizes.map(inputSize => {
      this.encryptForSize(inputSize);
    });
  }

  /**
   * Sets the state for various input length's cipher length
   *
   * @param {number} sizeInBytes - Byte size
   */
  async encryptForSize(sizeInBytes) {
    const aesOutput = await encryptWithAes(
      testPrivateKey,
      new Array(sizeInBytes).join('x')
    );

    if (!aesOutput) {
      throw Error('output is not good');
    }

    this.setState({ ['input'.concat(sizeInBytes)]: aesOutput.ciphertext });
  }

  /**
   * React render
   *
   * @returns {React.Element} Rendered Component
   */
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
