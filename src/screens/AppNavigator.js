import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

import LoginScreen from './login'
import HomeScreen from './home'
import ProfileScreen from './profile'

const AppStack = createStackNavigator({ Home: HomeScreen, Profile: ProfileScreen })
const AuthStack = createStackNavigator({ Login: LoginScreen })

export const AppNavigator = createSwitchNavigator(
  {
    // AuthLoading: LoginScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props
    const addListener = createReduxBoundAddListener('root')
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
