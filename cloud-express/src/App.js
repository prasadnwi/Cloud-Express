import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import configureStore from './app/stores/store';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
//Containers
import ProductDetailsContainer from "./app/containers/ProductDetailsContainer";
import ProductListContainer from "./app/containers/ProductListContainer";

const store = configureStore;
export const browserHistory = createBrowserHistory();

function App() {
  return (
  <Provider store={store}>
    <Router history={browserHistory}>
        <div>
          <Switch>
              <Route exact path="/product" component={ProductListContainer}/>
              <Route exact path="/product/:id" component={ProductDetailsContainer}/>
              <Route path="/" component={ProductListContainer}/>
          </Switch>
        </div>
    </Router>

  </Provider>
  );
}

export default App;
