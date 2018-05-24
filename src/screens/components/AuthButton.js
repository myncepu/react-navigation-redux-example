import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'react-native'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

class AuthButton extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired,
  }

  render() {
    const { logout, loginScreen, isLoggedIn } = this.props
    return (
      // <Button
      //   title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
      //   onPress={isLoggedIn ? logout : loginScreen}
      // />
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 40,
          backgroundColor: 'indigo',
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={isLoggedIn ? logout : loginScreen}
      >
        <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
          {isLoggedIn ? 'Log Out' : 'Open Login Screen'}
        </Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)
