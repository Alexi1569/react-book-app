import axios from 'axios';

export const getBooks = (limit = 10, start = 0, order = 'asc', list = '') => {
  const url = `/api/books?limit=${limit}&skip=${start}&order=${order}`;
  const response = axios.get(url).then(res => {
    if (list) {
      return [...list, ...res.data];
    } else {
      return res.data;
    }
  });

  return {
    type: 'GET_BOOKS',
    payload: response
  };
};

export const getBookWithReviewer = id => {
  const request = axios.get(`/api/book/${id}`);

  return dispatch => {
    request.then(({ data }) => {
      const book = data;
      axios.get(`/api/reviewer/${book.ownerId}`).then(({ data }) => {
        let res = {
          book,
          reviewer: data
        };

        dispatch({
          type: 'GET_BOOK_WITH_REVIEWER',
          payload: res
        });
      });
    });
  };
};

export const clearBookWithReviewer = () => {
  return {
    type: 'CLEAR_BOOK_WITH_REVIEWER'
  };
};

export const loginUser = (email, password) => {
  const response = axios
    .post(`/api/login`, {
      email,
      password
    })
    .then(res => res.data);

  return {
    type: 'USER_LOGIN',
    payload: response
  };
};

export const auth = () => {
  const response = axios.get(`/api/auth`).then(res => res.data);

  return {
    type: 'USER_AUTH',
    payload: response
  };
};

export const addBook = data => {
  const response = axios.post(`/api/book`, data).then(res => res.data);

  return {
    type: 'ADD_BOOK',
    payload: response
  };
};

export const clearNewBook = () => {
  return {
    type: 'CLEAR_NEW_BOOK'
  };
};

export const getUserPosts = id => {
  const response = axios.get(`/api/reviews/${id}`).then(res => res.data);

  return {
    type: 'GET_USER_POSTS',
    payload: response
  };
};

export const getBook = id => {
  const response = axios.get(`/api/book/${id}`).then(res => res.data);

  return {
    type: 'GET_BOOK',
    payload: response
  };
};

export const updateBook = book => {
  const response = axios
    .post(`/api/book/${book._id}`, book)
    .then(res => res.data);

  return {
    type: 'UPDATE_BOOK',
    payload: response
  };
};

export const deleteBook = id => {
  const response = axios.delete(`/api/book/${id}`).then(res => res.data);

  return {
    type: 'DELETE_BOOK',
    payload: response
  };
};

export const clearBook = () => {
  return {
    type: 'CLEAR_BOOK'
  };
};

export const getUsers = () => {
  const response = axios.get(`/api/users`).then(res => res.data);

  return {
    type: 'GET_USERS',
    payload: response
  };
};

export const registerUser = (user, list) => {
  const register = axios.post(`/api/register`, user);

  return dispatch => {
    register.then(({ data }) => {
      const users = data.success ? [...list, data.user] : [...list];
      const res = {
        success: data.success,
        users
      };

      dispatch({
        type: 'REGISTER_USER',
        payload: res
      });
    });
  };
};
