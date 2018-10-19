import React, { Component } from 'react';
import { encryptWithAes } from '../utils/meat-grinder.js';
import { View } from 'react-native';
const testPrivateKey =
  '8238BAE35C77FE4AEBB2DEB1B83A6F0027A01D0E4D93BF5B81F7117796955A17';
export default class RCTAesTests extends Component {
  async testAesEncryption() {
    let aesOutput = await encryptWithAes(
      testPrivateKey,
      'ffffffffffffffffffffffffffffffffffffffffffffffffffff'
    );
    if (!aesOutput) {
      throw Error('output is not good');
    }
    console.warn(aesOutput);
    return 'success';
  }
  render() {
    this.testAesEncryption();
    return <View testID="welcome" style={{ flex: 1 }} />;
  }
}
