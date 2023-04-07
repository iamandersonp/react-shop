import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/recovery"
            component={RecoveryPassword}
          />
          <Route path="*" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
