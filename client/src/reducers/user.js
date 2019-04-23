export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        login: action.payload
      };
    case 'USER_AUTH':
      return {
        ...state,
        auth: action.payload
      };
    case 'GET_USER_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
