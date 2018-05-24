import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import AppWithNavigationState from './screens/AppNavigator'
import store from './store'

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp)

export default ReduxExampleApp
