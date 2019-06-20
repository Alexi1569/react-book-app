(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    47: function(e, t, a) {
      e.exports = a(82);
    },
    82: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(38),
        l = a.n(o),
        c = a(2),
        s = a(4),
        i = a(14),
        u = a(43),
        m = a.n(u),
        p = a(44),
        d = a.n(p),
        h = a(5),
        E = a(6),
        v = a(8),
        f = a(7),
        b = a(9),
        g = a(17),
        k = a(12),
        y = a.n(k),
        O = function(e) {
          return r.a.createElement(
            c.b,
            { to: '/book/'.concat(e._id), className: 'book_item' },
            r.a.createElement(
              'div',
              { className: 'book_header' },
              r.a.createElement('h2', null, e.name)
            ),
            r.a.createElement(
              'div',
              { className: 'book_items' },
              r.a.createElement('div', { className: 'book_author' }, e.author),
              r.a.createElement(
                'div',
                { className: 'book_bubble' },
                r.a.createElement('strong', null, 'Price'),
                ' $ ',
                e.price
              ),
              r.a.createElement(
                'div',
                { className: 'book_bubble' },
                r.a.createElement('strong', null, 'Pages'),
                ' $ ',
                e.pages
              ),
              r.a.createElement(
                'div',
                { className: 'book_bubble rating' },
                r.a.createElement('strong', null, 'Rating'),
                ' ',
                e.rating
              )
            )
          );
        },
        _ = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(o))
              )).renderItems = function(e) {
                return e.list
                  ? e.list.map(function(e, t) {
                      return r.a.createElement(
                        O,
                        Object.assign({}, e, { key: t })
                      );
                    })
                  : null;
              }),
              (a.loadMore = function() {
                var e = a.props.books.list.length;
                a.props.getBooks(1, e, 'asc', a.props.books.list);
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.props.getBooks(1, 0, 'asc');
                }
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    null,
                    this.renderItems(this.props.books),
                    r.a.createElement(
                      'div',
                      { onClick: this.loadMore, className: 'loadmore' },
                      'Load More'
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        w = Object(s.b)(
          function(e) {
            return { books: e.bookReducer };
          },
          function(e) {
            return {
              getBooks: function(t, a, n, r) {
                return e(
                  (function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 10,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      a =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 'asc',
                      n =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : '',
                      r = '/api/books?limit='
                        .concat(e, '&skip=')
                        .concat(t, '&order=')
                        .concat(a);
                    return {
                      type: 'GET_BOOKS',
                      payload: y.a.get(r).then(function(e) {
                        return n
                          ? [].concat(Object(g.a)(n), Object(g.a)(e.data))
                          : e.data;
                      })
                    };
                  })(t, a, n, r)
                );
              }
            };
          }
        )(_),
        j = function() {
          return r.a.createElement(
            w,
            null,
            r.a.createElement(
              'div',
              null,
              r.a.createElement('div', null, 'home')
            )
          );
        },
        N = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(o))
              )).renderBook = function(e, t) {
                return e && t
                  ? r.a.createElement(
                      'div',
                      { className: 'br_container' },
                      r.a.createElement(
                        'div',
                        { className: 'br_header' },
                        r.a.createElement('h2', null, e.name),
                        r.a.createElement('h5', null, e.author),
                        r.a.createElement(
                          'div',
                          { className: 'br_reviewer' },
                          r.a.createElement('span', null, 'Review by:'),
                          ' ',
                          t.name,
                          ' ',
                          t.lastname
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'br_review' },
                        e.review
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'br_box' },
                        r.a.createElement(
                          'div',
                          { className: 'left' },
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement('span', null, 'Pages:'),
                            ' ',
                            e.pages
                          ),
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement('span', null, 'Price:'),
                            ' ',
                            e.price
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'right' },
                          r.a.createElement('span', null, 'Rating'),
                          r.a.createElement('div', null, e.rating, '/5')
                        )
                      )
                    )
                  : null;
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.props.getBookWithReviewer(this.props.match.params.id);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.props.clearBookWithReviewer();
                }
              },
              {
                key: 'render',
                value: function() {
                  console.log(this.props);
                  var e = this.props.books,
                    t = e.book,
                    a = e.reviewer;
                  return r.a.createElement('div', null, this.renderBook(t, a));
                }
              }
            ]),
            t
          );
        })(n.Component),
        C = Object(s.b)(
          function(e) {
            return { books: e.bookReducer };
          },
          function(e) {
            return {
              clearBookWithReviewer: function() {
                return e({ type: 'CLEAR_BOOK_WITH_REVIEWER' });
              },
              getBookWithReviewer: function(t) {
                return e(
                  (function(e) {
                    var t = y.a.get('/api/book/'.concat(e));
                    return function(e) {
                      t.then(function(t) {
                        var a = t.data;
                        y.a
                          .get('/api/reviewer/'.concat(a.ownerId))
                          .then(function(t) {
                            var n = t.data;
                            e({
                              type: 'GET_BOOK_WITH_REVIEWER',
                              payload: { book: a, reviewer: n }
                            });
                          });
                      });
                    };
                  })(t)
                );
              }
            };
          }
        )(N),
        B = a(22),
        R = a.n(B),
        I = a(45),
        D = a.n(I),
        S = Object(s.b)(function(e) {
          return { user: e.userReducer };
        })(function(e) {
          var t = e.user,
            a = function(e, t) {
              return r.a.createElement(
                'div',
                { key: t, className: e.type },
                r.a.createElement(
                  c.b,
                  { to: e.link },
                  r.a.createElement(R.a, { name: e.icon }),
                  e.text
                )
              );
            },
            n = [
              {
                type: 'navItem',
                icon: 'home',
                text: 'Home',
                link: '/',
                restricted: !1
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'My Profile',
                link: '/user',
                restricted: !0
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'Add Admins',
                link: '/user/register',
                restricted: !0
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'Login',
                link: '/login',
                restricted: !1,
                exclude: !0
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'My reviews',
                link: '/user/reviews',
                restricted: !0
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'Add reviews',
                link: '/user/add',
                restricted: !0
              },
              {
                type: 'navItem',
                icon: 'file-text-o',
                text: 'Logout',
                link: '/user/logout',
                restricted: !0
              }
            ];
          return r.a.createElement(
            'div',
            null,
            t.auth
              ? n.map(function(e, n) {
                  return t.auth.isAuth
                    ? e.exclude
                      ? null
                      : a(e, n)
                    : e.restricted
                    ? null
                    : a(e, n);
                })
              : null
          );
        }),
        x = function(e) {
          return r.a.createElement(
            D.a,
            {
              showNav: e.showNav,
              onHideNav: e.onHideNav,
              navStyle: { background: '#242424', maxWidth: '220px' }
            },
            r.a.createElement(S, null)
          );
        },
        U = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = { showNav: !1 }),
              (a.onHideNav = function() {
                a.setState({ showNav: !1 });
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    'header',
                    null,
                    r.a.createElement(
                      'div',
                      { className: 'open_nav' },
                      r.a.createElement(R.a, {
                        name: 'bars',
                        style: {
                          color: '#fff',
                          padding: '10px',
                          cursor: 'pointer'
                        },
                        onClick: function() {
                          return e.setState({ showNav: !0 });
                        }
                      })
                    ),
                    r.a.createElement(x, {
                      showNav: this.state.showNav,
                      onHideNav: this.onHideNav
                    }),
                    r.a.createElement(
                      c.b,
                      { to: '/', className: 'logo' },
                      'The Book Shelf'
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        A = function(e) {
          var t = e.children;
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(U, null),
            r.a.createElement('div', null, t)
          );
        },
        T = a(15),
        W = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = { email: '', password: '', error: '', success: !1 }),
              (a.submitForm = function(e) {
                e.preventDefault();
                var t = a.state,
                  n = t.email,
                  r = t.password;
                a.props.loginUser(n, r);
              }),
              (a.handleInput = function(e) {
                a.setState(Object(T.a)({}, e.target.name, e.target.value));
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  e.user.login.isAuth && this.props.history.push('/user');
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.email,
                    a = e.password,
                    n = this.props.user;
                  return r.a.createElement(
                    'div',
                    { className: 'rl_container' },
                    r.a.createElement(
                      'form',
                      { onSubmit: this.submitForm },
                      r.a.createElement('h2', null, 'Login here'),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'email',
                          placeholder: 'Enter your email',
                          name: 'email',
                          value: t,
                          onChange: this.handleInput
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'password',
                          placeholder: 'Enter your password',
                          value: a,
                          name: 'password',
                          onChange: this.handleInput
                        })
                      ),
                      r.a.createElement('button', null, 'Login'),
                      r.a.createElement(
                        'div',
                        { className: 'error' },
                        n.login
                          ? r.a.createElement('div', null, n.login.message)
                          : null
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        P = Object(s.b)(
          function(e) {
            return { user: e.userReducer };
          },
          function(e) {
            return {
              loginUser: function(t, a) {
                return e(
                  (function(e, t) {
                    return {
                      type: 'USER_LOGIN',
                      payload: y.a
                        .post('/api/login', { email: e, password: t })
                        .then(function(e) {
                          return e.data;
                        })
                    };
                  })(t, a)
                );
              }
            };
          }
        )(W),
        K = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a = (function(a) {
              function n() {
                var e, t;
                Object(h.a)(this, n);
                for (
                  var a = arguments.length, r = new Array(a), o = 0;
                  o < a;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  ((t = Object(v.a)(
                    this,
                    (e = Object(f.a)(n)).call.apply(e, [this].concat(r))
                  )).state = { loading: !0 }),
                  t
                );
              }
              return (
                Object(b.a)(n, a),
                Object(E.a)(n, [
                  {
                    key: 'componentWillMount',
                    value: function() {
                      this.props.auth();
                    }
                  },
                  {
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                      this.setState({ loading: !1 }),
                        e.user.auth.isAuth
                          ? !1 === t && this.props.history.push('/user')
                          : t && this.props.history.push('/login');
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      return this.state.loading
                        ? r.a.createElement(
                            'div',
                            { className: 'loader' },
                            'Loading...'
                          )
                        : r.a.createElement(
                            e,
                            Object.assign({}, this.props, {
                              user: this.props.user
                            })
                          );
                    }
                  }
                ]),
                n
              );
            })(n.Component);
          return Object(s.b)(
            function(e) {
              return { user: e.userReducer };
            },
            function(e) {
              return {
                auth: function() {
                  return e({
                    type: 'USER_AUTH',
                    payload: y.a.get('/api/auth').then(function(e) {
                      return e.data;
                    })
                  });
                }
              };
            }
          )(a);
        },
        L = function(e) {
          var t = e.user.auth;
          return r.a.createElement(
            'div',
            { className: 'user_container' },
            r.a.createElement(
              'div',
              { className: 'avatar' },
              r.a.createElement('img', {
                src: '/images/avatar.png',
                alt: 'avatar'
              })
            ),
            r.a.createElement(
              'div',
              { className: 'nfo' },
              r.a.createElement(
                'div',
                null,
                r.a.createElement('span', null, 'Name:'),
                ' ',
                t.name
              ),
              r.a.createElement(
                'div',
                null,
                r.a.createElement('span', null, 'Lastname:'),
                ' ',
                t.lastname
              ),
              r.a.createElement(
                'div',
                null,
                r.a.createElement('span', null, 'Email:'),
                ' ',
                t.email
              )
            )
          );
        },
        G = a(3),
        M = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                formData: {
                  name: '',
                  author: '',
                  review: '',
                  pages: '',
                  rating: '',
                  price: ''
                }
              }),
              (a.submitForm = function(e) {
                e.preventDefault(),
                  a.props.addBook(
                    Object(G.a)({}, a.state.formData, {
                      ownerId: a.props.user.auth.id
                    })
                  );
              }),
              (a.handleInputChange = function(e) {
                var t = Object(G.a)({}, a.state.formData);
                (t[e.target.name] = e.target.value),
                  a.setState({ formData: t });
              }),
              (a.showNewBook = function(e) {
                return e.post
                  ? r.a.createElement(
                      'div',
                      { className: 'conf_link' },
                      'Book Added ',
                      r.a.createElement(
                        c.b,
                        { to: '/book/'.concat(e.bookId) },
                        e.bookId
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'Click the link to see the post'
                      )
                    )
                  : null;
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.props.clearNewBook();
                }
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'rl_container article' },
                    r.a.createElement(
                      'form',
                      { onSubmit: this.submitForm },
                      r.a.createElement('h2', null, 'Add book'),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'name',
                          value: this.state.formData.name,
                          placeholder: 'Enter name',
                          onChange: this.handleInputChange,
                          type: 'text'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'author',
                          value: this.state.formData.author,
                          placeholder: 'Enter author',
                          onChange: this.handleInputChange,
                          type: 'text'
                        })
                      ),
                      r.a.createElement('textarea', {
                        name: 'review',
                        placeholder: 'Enter review',
                        value: this.state.formData.review,
                        onChange: this.handleInputChange
                      }),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'pages',
                          value: this.state.formData.pages,
                          placeholder: 'Enter pages',
                          onChange: this.handleInputChange,
                          type: 'number'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement(
                          'select',
                          {
                            name: 'rating',
                            value: this.state.formData.rating,
                            onChange: this.handleInputChange
                          },
                          r.a.createElement('option', { value: '1' }, '1'),
                          r.a.createElement('option', { value: '2' }, '2'),
                          r.a.createElement('option', { value: '3' }, '3'),
                          r.a.createElement('option', { value: '4' }, '4'),
                          r.a.createElement('option', { value: '5' }, '5')
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'price',
                          value: this.state.formData.price,
                          placeholder: 'Enter price',
                          onChange: this.handleInputChange,
                          type: 'number'
                        })
                      ),
                      r.a.createElement('button', null, 'Send'),
                      this.props.books.newBook
                        ? this.showNewBook(this.props.books.newBook)
                        : null
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        H = Object(s.b)(
          function(e) {
            return { books: e.bookReducer };
          },
          function(e) {
            return {
              addBook: function(t) {
                return e(
                  (function(e) {
                    return {
                      type: 'ADD_BOOK',
                      payload: y.a.post('/api/book', e).then(function(e) {
                        return e.data;
                      })
                    };
                  })(t)
                );
              },
              clearNewBook: function() {
                return e({ type: 'CLEAR_NEW_BOOK' });
              }
            };
          }
        )(M),
        F = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                formData: {
                  _id: a.props.match.params.id,
                  name: '',
                  author: '',
                  review: '',
                  pages: '',
                  rating: '',
                  price: ''
                }
              }),
              (a.submitForm = function(e) {
                e.preventDefault(), a.props.updateBook(a.state.formData);
              }),
              (a.handleInputChange = function(e) {
                var t = Object(G.a)({}, a.state.formData);
                (t[e.target.name] = e.target.value),
                  a.setState({ formData: t });
              }),
              (a.deleteBook = function(e) {
                a.props.deleteBook(e);
              }),
              (a.redirectUser = function() {
                setTimeout(function() {
                  a.props.history.push('/user/reviews');
                }, 1e3);
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.props.getBook(this.props.match.params.id);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.props.clearBook();
                }
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.books.book,
                    a = {
                      _id: t._id,
                      name: t.name,
                      author: t.author,
                      review: t.review,
                      pages: t.pages,
                      rating: t.rating,
                      price: t.price
                    };
                  this.setState({ formData: a });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.books;
                  return r.a.createElement(
                    'div',
                    { className: 'rl_container article' },
                    t.isBookUpdated
                      ? r.a.createElement(
                          'div',
                          { className: 'edit_confirm' },
                          'Post Updated, ',
                          r.a.createElement('br', null),
                          r.a.createElement(
                            c.b,
                            { to: '/book/'.concat(t.book._id) },
                            'Click here to see your post'
                          )
                        )
                      : null,
                    t.isDeleted
                      ? r.a.createElement(
                          'div',
                          { className: 'red_tag' },
                          'Post Deleted ',
                          this.redirectUser()
                        )
                      : null,
                    r.a.createElement(
                      'form',
                      { onSubmit: this.submitForm },
                      r.a.createElement('h2', null, 'Edit book'),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'name',
                          value: this.state.formData.name,
                          placeholder: 'Enter name',
                          onChange: this.handleInputChange,
                          type: 'text'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'author',
                          value: this.state.formData.author,
                          placeholder: 'Enter author',
                          onChange: this.handleInputChange,
                          type: 'text'
                        })
                      ),
                      r.a.createElement('textarea', {
                        name: 'review',
                        placeholder: 'Enter review',
                        value: this.state.formData.review,
                        onChange: this.handleInputChange
                      }),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'pages',
                          value: this.state.formData.pages,
                          placeholder: 'Enter pages',
                          onChange: this.handleInputChange,
                          type: 'number'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement(
                          'select',
                          {
                            name: 'rating',
                            value: this.state.formData.rating,
                            onChange: this.handleInputChange
                          },
                          r.a.createElement('option', { value: '1' }, '1'),
                          r.a.createElement('option', { value: '2' }, '2'),
                          r.a.createElement('option', { value: '3' }, '3'),
                          r.a.createElement('option', { value: '4' }, '4'),
                          r.a.createElement('option', { value: '5' }, '5')
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          name: 'price',
                          value: this.state.formData.price,
                          placeholder: 'Enter price',
                          onChange: this.handleInputChange,
                          type: 'number'
                        })
                      ),
                      r.a.createElement('button', null, 'Send'),
                      r.a.createElement(
                        'div',
                        { className: 'delete_post' },
                        r.a.createElement(
                          'div',
                          {
                            className: 'button',
                            onClick: function() {
                              return e.deleteBook(t.book._id);
                            }
                          },
                          'Delete Book'
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.PureComponent),
        V = Object(s.b)(
          function(e) {
            return { books: e.bookReducer };
          },
          function(e) {
            return {
              getBook: function(t) {
                return e(
                  (function(e) {
                    return {
                      type: 'GET_BOOK',
                      payload: y.a
                        .get('/api/book/'.concat(e))
                        .then(function(e) {
                          return e.data;
                        })
                    };
                  })(t)
                );
              },
              updateBook: function(t) {
                return e(
                  ((a = t),
                  {
                    type: 'UPDATE_BOOK',
                    payload: y.a
                      .post('/api/book/'.concat(a._id), a)
                      .then(function(e) {
                        return e.data;
                      })
                  })
                );
                var a;
              },
              deleteBook: function(t) {
                return e(
                  (function(e) {
                    return {
                      type: 'DELETE_BOOK',
                      payload: y.a
                        .delete('/api/book/'.concat(e))
                        .then(function(e) {
                          return e.data;
                        })
                    };
                  })(t)
                );
              },
              clearBook: function() {
                return e({ type: 'CLEAR_BOOK' });
              }
            };
          }
        )(F),
        Y = a(46),
        J = a.n(Y),
        $ = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(o))
              )).showUserPosts = function(e) {
                return e.posts
                  ? e.posts.map(function(e) {
                      return r.a.createElement(
                        'tr',
                        { key: e._id },
                        r.a.createElement(
                          'td',
                          null,
                          r.a.createElement(
                            c.b,
                            { to: '/user/edit-book/'.concat(e._id) },
                            e.name
                          )
                        ),
                        r.a.createElement('td', null, e.author),
                        r.a.createElement(
                          'td',
                          null,
                          J()(e.date).format('MM/DD/YY')
                        )
                      );
                    })
                  : null;
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.props.getUserPosts(this.props.user.auth.id);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.user;
                  return r.a.createElement(
                    'div',
                    { className: 'user_posts' },
                    r.a.createElement('h4', null, 'Your reviewes:'),
                    r.a.createElement(
                      'table',
                      null,
                      r.a.createElement(
                        'thead',
                        null,
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement('th', null, 'Name'),
                          r.a.createElement('th', null, 'Author'),
                          r.a.createElement('th', null, 'Date')
                        )
                      ),
                      r.a.createElement('tbody', null, this.showUserPosts(e))
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        q = Object(s.b)(
          function(e) {
            return { user: e.userReducer };
          },
          function(e) {
            return {
              getUserPosts: function(t) {
                return e(
                  (function(e) {
                    return {
                      type: 'GET_USER_POSTS',
                      payload: y.a
                        .get('/api/reviews/'.concat(e))
                        .then(function(e) {
                          return e.data;
                        })
                    };
                  })(t)
                );
              }
            };
          }
        )($),
        z = (function(e) {
          function t() {
            var e, a;
            Object(h.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                name: '',
                lastname: '',
                email: '',
                password: '',
                error: null
              }),
              (a.handleInputChange = function(e) {
                a.setState(Object(T.a)({}, e.target.name, e.target.value));
              }),
              (a.submitForm = function(e) {
                e.preventDefault(), a.setState({ error: null });
                var t = {
                  name: a.state.name,
                  lastname: a.state.lastname,
                  email: a.state.email,
                  password: a.state.password
                };
                a.props.registerUser(t, a.props.users.list);
              }),
              (a.renderUsers = function(e) {
                return e
                  ? a.props.users.list.map(function(e) {
                      return r.a.createElement(
                        'tr',
                        { key: e._id },
                        r.a.createElement('td', null, e.name),
                        r.a.createElement('td', null, e.lastname),
                        r.a.createElement('td', null, e.email)
                      );
                    })
                  : null;
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(E.a)(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.props.getUsers();
                }
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  !1 === e.users.isRegistered
                    ? this.setState({ error: 'Try again' })
                    : !0 === e.users.isRegistered &&
                      this.setState({
                        name: '',
                        lastname: '',
                        email: '',
                        password: '',
                        error: null
                      });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.users;
                  return r.a.createElement(
                    'div',
                    { className: 'rl_container' },
                    r.a.createElement(
                      'form',
                      { onSubmit: this.submitForm },
                      r.a.createElement('h2', null, 'Add User'),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'text',
                          name: 'name',
                          onChange: this.handleInputChange,
                          value: this.state.name,
                          placeholder: 'Enter name'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'text',
                          name: 'lastname',
                          onChange: this.handleInputChange,
                          value: this.state.lastname,
                          placeholder: 'Enter lastname'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'email',
                          name: 'email',
                          onChange: this.handleInputChange,
                          value: this.state.email,
                          placeholder: 'Enter email'
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'form_element' },
                        r.a.createElement('input', {
                          type: 'password',
                          name: 'password',
                          onChange: this.handleInputChange,
                          value: this.state.password,
                          placeholder: 'Enter password'
                        })
                      ),
                      r.a.createElement('button', null, 'Add User'),
                      this.state.error
                        ? r.a.createElement(
                            'div',
                            { className: 'error' },
                            this.state.error
                          )
                        : null
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'current_users' },
                      r.a.createElement('h4', null, 'Current users:'),
                      r.a.createElement(
                        'table',
                        null,
                        r.a.createElement(
                          'thead',
                          null,
                          r.a.createElement(
                            'tr',
                            null,
                            r.a.createElement('th', null, 'Name'),
                            r.a.createElement('th', null, 'Lastname'),
                            r.a.createElement('th', null, 'Email')
                          )
                        ),
                        r.a.createElement(
                          'tbody',
                          null,
                          this.renderUsers(e.list)
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Q = Object(s.b)(
          function(e) {
            return { users: e.userReducer };
          },
          function(e) {
            return {
              getUsers: function(t) {
                return e({
                  type: 'GET_USERS',
                  payload: y.a.get('/api/users').then(function(e) {
                    return e.data;
                  })
                });
              },
              registerUser: function(t, a) {
                return e(
                  (function(e, t) {
                    var a = y.a.post('/api/register', e);
                    return function(e) {
                      a.then(function(a) {
                        var n = a.data,
                          r = n.success
                            ? [].concat(Object(g.a)(t), [n.user])
                            : Object(g.a)(t),
                          o = { success: n.success, users: r };
                        e({ type: 'REGISTER_USER', payload: o });
                      });
                    };
                  })(t, a)
                );
              }
            };
          }
        )(z),
        X = function(e) {
          y.a.get('/api/logout').then(function(t) {
            setTimeout(function() {
              e.history.push('/');
            }, 2e3);
          });
          return r.a.createElement(
            'div',
            { className: 'logout_container' },
            r.a.createElement('h1', null, 'See you soon...')
          );
        },
        Z = function() {
          return r.a.createElement(
            A,
            null,
            r.a.createElement(
              c.d,
              null,
              r.a.createElement(c.c, { path: '/', exact: !0, component: K(j) }),
              r.a.createElement(c.c, {
                path: '/book/:id',
                exact: !0,
                component: K(C)
              }),
              r.a.createElement(c.c, {
                path: '/login',
                exact: !0,
                component: K(P, !1)
              }),
              r.a.createElement(c.c, {
                path: '/user',
                exact: !0,
                component: K(L, !0)
              }),
              r.a.createElement(c.c, {
                path: '/user/add',
                exact: !0,
                component: K(H, !0)
              }),
              r.a.createElement(c.c, {
                path: '/user/edit-book/:id',
                exact: !0,
                component: K(V, !0)
              }),
              r.a.createElement(c.c, {
                path: '/user/reviews',
                exact: !0,
                component: K(q, !0)
              }),
              r.a.createElement(c.c, {
                path: '/user/register',
                exact: !0,
                component: K(Q, !0)
              }),
              r.a.createElement(c.c, {
                path: '/user/logout',
                exact: !0,
                component: K(X, !0)
              })
            )
          );
        },
        ee = Object(i.c)({
          userReducer: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'USER_LOGIN':
                return Object(G.a)({}, e, { login: t.payload });
              case 'USER_AUTH':
                return Object(G.a)({}, e, { auth: t.payload });
              case 'GET_USER_POSTS':
                return Object(G.a)({}, e, { posts: t.payload });
              case 'GET_USERS':
                return Object(G.a)({}, e, { list: t.payload });
              case 'REGISTER_USER':
                return Object(G.a)({}, e, {
                  isRegistered: t.payload.success,
                  list: t.payload.users
                });
              default:
                return e;
            }
          },
          bookReducer: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case 'GET_BOOKS':
                return Object(G.a)({}, e, { list: t.payload });
              case 'GET_BOOK':
                return Object(G.a)({}, e, { book: t.payload });
              case 'GET_BOOK_WITH_REVIEWER':
                return Object(G.a)({}, e, {
                  book: t.payload.book,
                  reviewer: t.payload.reviewer
                });
              case 'CLEAR_BOOK_WITH_REVIEWER':
                return Object(G.a)({}, e, { book: {}, reviewer: {} });
              case 'ADD_BOOK':
                return Object(G.a)({}, e, { newBook: t.payload });
              case 'CLEAR_NEW_BOOK':
                return Object(G.a)({}, e, { newBook: {} });
              case 'DELETE_BOOK':
                return Object(G.a)({}, e, { isDeleted: t.payload });
              case 'UPDATE_BOOK':
                return Object(G.a)({}, e, {
                  isBookUpdated: t.payload.success,
                  book: t.payload.book
                });
              case 'CLEAR_BOOK':
                return Object(G.a)({}, e, {
                  isBookUpdated: !1,
                  isDeleted: !1,
                  book: {}
                });
              default:
                return e;
            }
          }
        }),
        te = Object(i.a)(m.a, d.a)(i.d);
      l.a.render(
        r.a.createElement(
          s.a,
          { store: te(ee) },
          r.a.createElement(c.a, null, r.a.createElement(Z, null))
        ),
        document.getElementById('root')
      );
    }
  },
  [[47, 1, 2]]
]);
//# sourceMappingURL=main.ba38edb8.chunk.js.map
