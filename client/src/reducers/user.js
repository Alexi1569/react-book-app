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
    case 'GET_USERS':
      return {
        ...state,
        list: action.payload
      };
    case 'REGISTER_USER':
      return {
        ...state,
        isRegistered: action.payload.success,
        list: action.payload.users
      };
    default:
      return state;
  }
};
