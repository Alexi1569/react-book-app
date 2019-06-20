import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from './../../actions';

class AddBook extends Component {
  state = {
    formData: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  };

  submitForm = e => {
    e.preventDefault();

    this.props.addBook({
      ...this.state.formData,
      ownerId: this.props.user.auth.id
    });
  };

  componentWillUnmount() {
    this.props.clearNewBook();
  }

  handleInputChange = e => {
    const newFormData = { ...this.state.formData };
    newFormData[e.target.name] = e.target.value;

    this.setState({
      formData: newFormData
    });
  };

  showNewBook = book => {
    return book.post ? (
      <div className="conf_link">
        Book Added <Link to={`/book/${book.bookId}`}>{book.bookId}</Link>
        <p>Click the link to see the post</p>
      </div>
    ) : null;
  };

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add book</h2>
          <div className="form_element">
            <input
              name="name"
              value={this.state.formData.name}
              placeholder="Enter name"
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div className="form_element">
            <input
              name="author"
              value={this.state.formData.author}
              placeholder="Enter author"
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <textarea
            name="review"
            placeholder="Enter review"
            value={this.state.formData.review}
            onChange={this.handleInputChange}
          />
          <div className="form_element">
            <input
              name="pages"
              value={this.state.formData.pages}
              placeholder="Enter pages"
              onChange={this.handleInputChange}
              type="number"
            />
          </div>
          <div className="form_element">
            <select
              name="rating"
              value={this.state.formData.rating}
              onChange={this.handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form_element">
            <input
              name="price"
              value={this.state.formData.price}
              placeholder="Enter price"
              onChange={this.handleInputChange}
              type="number"
            />
          </div>
          <button>Send</button>
          {this.props.books.newBook
            ? this.showNewBook(this.props.books.newBook)
            : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: data => dispatch(addBook(data)),
    clearNewBook: () => dispatch(clearNewBook())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
