import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from './../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserPosts extends Component {
  componentWillMount() {
    this.props.getUserPosts(this.props.user.auth.id);
  }

  showUserPosts = user => {
    return user.posts
      ? user.posts.map(item => {
          return (
            <tr key={item._id}>
              <td>
                <Link to={`/user/edit-book/${item._id}`}>{item.name}</Link>
              </td>
              <td>{item.author}</td>
              <td>{moment(item.date).format('MM/DD/YY')}</td>
            </tr>
          );
        })
      : null;
  };

  render() {
    const { user } = this.props;

    return (
      <div className="user_posts">
        <h4>Your reviewes:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.showUserPosts(user)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserPosts: id => dispatch(getUserPosts(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);
