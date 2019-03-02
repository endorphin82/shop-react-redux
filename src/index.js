import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import { Provider } from "react-redux";

import Layout from "./containers/layout";
import Phones from "./containers/phones";
import Phone from "./containers/phone";

import "./main.css";

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/phones/:id" component={Phone}/>
          <Route path='/categories/:id' component={Phones}/>
          <Route path='/' component={Phones}/>
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById("root")
);