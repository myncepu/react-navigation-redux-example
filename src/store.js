/*
 * store.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

import AppReducer from './screens/navigation/reducer'

const store = createStore(
  AppReducer,
  applyMiddleware(...[reactNavigationReduxMiddleware, logger]),
)

export default store
