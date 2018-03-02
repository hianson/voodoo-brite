import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Home from './routes/Home'
import User from './routes/User'
import Login from './routes/Login'
import Logout from './routes/Logout'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/user" component={User} />
    </div>
  </Router>, document.getElementById('root')
);
