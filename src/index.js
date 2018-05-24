import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppWithNavigationState from './screens/AppNavigator'
import configureStore from './store'

class ReduxExampleApp extends React.Component {
  constructor(props) {
    super(props)

    const { store, persistor } = configureStore()
    this.state = {
      store,
      persistor,
    }
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate loading={null} persistor={this.state.persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp)

export default ReduxExampleApp
