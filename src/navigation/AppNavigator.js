import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import AppFrame from '../components/AppFrame';
import HomeScreen from '../screens/Home';

const BottomTabNavigator = createBottomTabNavigator({ Home: HomeScreen });

export default class AppNavigator extends PureComponent {
  static router = BottomTabNavigator.router;

  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <AppFrame>
        <BottomTabNavigator navigation={this.props.navigation} />
      </AppFrame>
    );
  }
}
