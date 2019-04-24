const config = {
  production: {
    SECRET: 'PRODUCTION_SUPER_SECRET',
    DATABASE: 'mongodb://admin:admin123@ds147096.mlab.com:47096/book_shelf'
  },
  default: {
    SECRET: 'super-password',
    DATABASE: 'mongodb://127.0.0.1:27017/books_shelf'
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
