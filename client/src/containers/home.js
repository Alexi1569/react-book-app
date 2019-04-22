import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './../actions';

import BookItem from './../widgets/bookItem';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getBooks(1, 0, 'asc'));
  }

  renderItems = books => {
    const items = books.list
      ? books.list.map((book, i) => {
          return <BookItem {...book} key={i} />;
        })
      : null;

    return items;
  };

  loadMore = () => {
    const count = this.props.books.list.length;
    this.props.dispatch(getBooks(1, count, 'asc', this.props.books.list));
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div onClick={this.loadMore} className="loadmore">
          Load More
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer
  };
};

export default connect(mapStateToProps)(HomeContainer);
