import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'
import {Link} from 'react-router-dom'

class LoginFormContainer extends React.Component {
  state = { email: '', password: ''}

  onSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
  }

  onChangeEmail = event => {
    const { value } = event.target
    this.setState({ email: value })
  }

  onChangePassword = event => {
    const {value} = event.target
    this.setState({password: value})
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChangeEmail={this.onChangeEmail}
          onChangePassword={this.onChangePassword}
        />
        {
          !this.props.user
            ? null
            : <p>You are logged in!</p>
        }
        <p>Don't have an account? <Link to='/sign-up'>Sign Up!</Link></p>
        <p><Link to='/events'>Go To Events</Link></p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser })(LoginFormContainer)