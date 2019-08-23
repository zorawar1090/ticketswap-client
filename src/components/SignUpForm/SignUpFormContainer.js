import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'
import { Link } from 'react-router-dom'
import request from 'superagent'
import SignUpForm from './SignUpForm'

class LoginFormContainer extends React.Component {
  state = { name: '', email: '', password: '', userCreated: false, err: '' }

  onSubmit = async event => {
    event.preventDefault()

    this.setState({err: ''})

    request
      .post('http://localhost:4000/user')
      .send({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.setState({userCreated: true})
        return res.body
      })
      .catch(err => {
        this.setState({err: err.response.text})
        return console.error(err)
      })
  }

  onChangeName = event => {
    const { value } = event.target
    this.setState({ name: value })
  }

  onChangeEmail = event => {
    const { value } = event.target
    this.setState({ email: value })
  }

  onChangePassword = event => {
    const { value } = event.target
    this.setState({ password: value })
  }

  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.onSubmit}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onChangePassword={this.onChangePassword}
        />
        {!this.state.userCreated
          ? null
          : <p>Sign Up Successful! You can now <Link to='/'>log in</Link></p>
        }
        {!this.state.err
          ? null
          : <p>Error: {this.state.err}</p>
        }
      </div>
    )
  }
}

export default connect(null, { loginUser })(LoginFormContainer)