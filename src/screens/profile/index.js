import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
// import { NavigationActions } from 'react-navigation'

// import LoginStatusMessage from '../components/LoginStatusMessage'
import Button from '../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

class ProfileScreen extends Component {
  static propTypes = {
  }

  static navigationOptions = {
    title: 'Profile', 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You are 'logged in' right now
        </Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Logout' })}
          title="Log out"
        />
      </View>
    )
  }
}

export default connect()(ProfileScreen)
