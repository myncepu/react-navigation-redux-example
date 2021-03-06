import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellowgreen',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

class LoginScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    title: 'Log In',
    headerStyle: {
      backgroundColor: 'yellowgreen',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Screen A
        </Text>
        <Text style={styles.instructions}>
        This is great
        </Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
          title="Log in"
        />
      </View>
    )
  }
}

export default LoginScreen
