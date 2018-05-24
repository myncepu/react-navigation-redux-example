import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

import LoginScreen from './login'
import MainScreen from './main'
import ProfileScreen from './profile'

export const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
})

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
