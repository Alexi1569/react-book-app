import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../../actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: false
  };

  submitForm = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.dispatch(loginUser(email, password));
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push('/user');
    }
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;

    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Login here</h2>
          <div className="form_element">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              name="password"
              onChange={this.handleInput}
            />
          </div>
          <button type="submit">Login</button>
          <div className="error">
            {user.login ? <div>{user.login.message}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps)(Login);
