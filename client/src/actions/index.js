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
