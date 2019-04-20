const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'super-password',
    DATABASE: 'mongodb://127.0.0.1:27017/books_shelf'
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
