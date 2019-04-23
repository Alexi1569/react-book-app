import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from './../../actions';

class EditBook extends PureComponent {
  state = {
    formData: {
      _id: this.props.match.params.id,
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

    this.props.updateBook(this.state.formData);
  };

  componentWillMount() {
    this.props.getBook(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { book } = nextProps.books;
    const formData = {
      _id: book._id,
      name: book.name,
      author: book.author,
      review: book.review,
      pages: book.pages,
      rating: book.rating,
      price: book.price
    };

    this.setState({
      formData
    });
  }

  handleInputChange = e => {
    const newFormData = { ...this.state.formData };
    newFormData[e.target.name] = e.target.value;

    this.setState({
      formData: newFormData
    });
  };

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Edit book</h2>
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
          <div className="delete_post">
            <div className="button">Delete Book</div>
          </div>
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
    getBook: id => dispatch(getBook(id)),
    updateBook: data => dispatch(updateBook(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook);
