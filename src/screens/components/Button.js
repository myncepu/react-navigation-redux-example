/*
 * Button.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const {onPress, title} = this.props
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 40,
          backgroundColor: 'indigo',
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
