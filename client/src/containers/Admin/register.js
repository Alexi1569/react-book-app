import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, registerUser } from './../../actions';

class Register extends Component {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: null
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillMount() {
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.isRegistered === false) {
      this.setState({
        error: 'Try again'
      });
    } else if (nextProps.users.isRegistered === true) {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: null
      });
    }
  }

  submitForm = e => {
    e.preventDefault();

    this.setState({
      error: null
    });

    const user = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(user, this.props.users.list);
  };

  renderUsers = users => {
    return users
      ? this.props.users.list.map(user => {
          return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
            </tr>
          );
        })
      : null;
  };

  render() {
    const { users } = this.props;

    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add User</h2>
          <div className="form_element">
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
              placeholder="Enter name"
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              name="lastname"
              onChange={this.handleInputChange}
              value={this.state.lastname}
              placeholder="Enter lastname"
            />
          </div>
          <div className="form_element">
            <input
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              placeholder="Enter email"
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              placeholder="Enter password"
            />
          </div>
          <button>Add User</button>
          {this.state.error ? (
            <div className="error">{this.state.error}</div>
          ) : null}
        </form>
        <div className="current_users">
          <h4>Current users:</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.renderUsers(users.list)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: users => dispatch(getUsers(users)),
    registerUser: (user, list) => dispatch(registerUser(user, list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
