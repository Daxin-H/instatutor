import React, { Component, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import ProfileForm from './components/profile-forms/ProfileForm';
//Force user to log in, protact dashboard
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//search
import Search from './components/Search';

import './App.css';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class SearchContainer extends Component {
  state = {
    major: [],
    question: [],
    searchField: '',
    inputvalue: ''
  }
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
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


              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              <PrivateRoute path="/Search" component={Search} />

              <PrivateRoute exact path="/create-profile" component={ProfileForm} />
              <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )

};



export default App;

///<div className="App">
///  <h1>Searching part</h1>
///  <SearchBar placeholder="Enter country name ..." handleChange={this.handleChange} />
///  <Questionlist stats={filteredQuestions} />
///</div>
