import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
<<<<<<< HEAD
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux'; 
import store from './store'; 
=======
//Redux 
import { Provider } from 'react-redux';
import store from './store';
>>>>>>> master

import Dashboard from './components/dashboard/Dashboard';

import './App.css';


const App = () => (
<<<<<<< HEAD
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>
=======
  <Provider store={store} >
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
>>>>>>> master
  </Provider>
);

export default App;

