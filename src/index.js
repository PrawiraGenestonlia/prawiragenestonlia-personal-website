import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
//components
import Home from './Home';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route exact path="/home" component={Home} />
//       <Redirect from="/" to="/home" />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );  





