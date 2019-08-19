import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import configureStore from './app/stores/store';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
//Containers
import ProductDetails from "./app/containers/ProductDetails";

const store = configureStore;
const browserHistory = createBrowserHistory();

function App() {
  return (
  <Provider store={store}>
    <Router history={browserHistory}>
        <div>
          <Switch>
              <Route exact path="/" component={ProductDetails}/>
          </Switch>
        </div>
    </Router>

  </Provider>
  );
}

export default App;
