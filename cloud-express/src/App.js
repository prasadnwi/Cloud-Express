import React from 'react';
import { Router, Route, Switch} from "react-router-dom";
import configureStore from './app/stores/store';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';

//Containers
import ProductList from './app/containers/productsList/ProductList';

const store = configureStore;
const browserHistory = createBrowserHistory();

function App() {
  return (
  <Provider store={store}>
    <Router history={browserHistory}>
        <div>
          <Switch>
              <Route exact path = "/" component={ProductList} />
          </Switch>
        </div>
    </Router>

  </Provider>
  );
}

export default App;
