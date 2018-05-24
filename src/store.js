/*
 * store.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import AppReducer from './screens/navigation/reducer'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, AppReducer)

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(...[reactNavigationReduxMiddleware, logger]),
  )

  let persistor = persistStore(store)
  return { store, persistor }
}
