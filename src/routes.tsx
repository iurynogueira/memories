import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'context/auth';
import Login from 'pages/login/login';
import Layout from 'components/Layout';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Login} />
        <PrivateRoute path={'/memories'} component={Layout} />
      </Switch>
    </Router>
  );
};

export default Routes;
