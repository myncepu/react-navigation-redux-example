import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    title: 'Log In',
    headerStyle: {
      backgroundColor: 'yellowgreen',
    }
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value,
    }
    this.setState(newState)
  }

  handleSubmit = () => {
    // TODO: 不要只是切换login状态
    // 下一步验证密码
    this.props.navigation.dispatch({ type: 'Login' })

    const { email, password } = this.state
    if (email.length === 0) {
      return this.setState({ emailError: true })
    }
    this.setState({ emailError: false })

    if (password.length === 0) {
      return this.setState({ passwordError: true })
    }
    this.setState({ passwordError: false })

    return this.props.screenProps.changeLoginState(true)
  }

  render() {
    const { emailError, passwordError } = this.state

    return (
      <Container>
        <Content>
          <Form>
            <Item error={emailError}>
              <Input
                placeholder="Email"
                onChangeText={value => this.handleInputChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item error={passwordError}>
              <Input
                placeholder="Password"
                onChangeText={value => this.handleInputChange('password', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button full onPress={this.handleSubmit}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default LoginScreen
