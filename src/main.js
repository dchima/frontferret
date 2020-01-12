import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import {
  App,
  ErrorPage,
  Browse,
} from 'pages';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/browse' component={Browse} />
          <Route exact path='/404' component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </Provider>
    );
  }
}

export default Main;
