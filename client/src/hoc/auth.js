import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from './../actions';

export default function(ComposedClass, reload = null) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentWillMount() {
      this.props.auth();
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false
      });

      if (!nextProps.user.auth.isAuth) {
        if (reload) {
          this.props.history.push('/login');
        }
      } else {
        if (reload === false) {
          this.props.history.push('/user');
        }
      }
    }

    render() {
      if (this.state.loading) {
        return <div className="loader">Loading...</div>;
      }

      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.userReducer
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      auth: () => dispatch(auth())
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticationCheck);
}
