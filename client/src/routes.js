import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import BookView from './components/Book';
import Layout from './hoc/layout';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/book/:id" exact component={Auth(BookView)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
