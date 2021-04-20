import React, { Component, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';
import Search from './components/Search';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


import './App.css';
import formData from './components/profile-forms/ProfileForm';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      course: '',
      stats: [],
      searchField:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
  }

  handleSubmit(event) {
    alert("The course that you need help with is: "+this.state.course);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({value:event.target.value});
  };

  handleChange = event => {
    this.setState({course:event.target.value});
  }; 

  getUnique(arr,comp) {
    const unique = arr.map(e=>e[comp])
                      .map((e,i,final) => final.indexOf(e) === i && i)
                      .filter(e => arr[e])
                      .map(e=>arr[e]);
    return unique;
  }

  componentDidMount() {
    const courses = require("./courses.json");
    this.setState({courses: courses});
  }

  render() {
    const uniqueCourse = this.getUnique(this.state.courses, "tag");
    const courses = this.state.courses;
    const {stats,searchField} = this.state
    const filteredCourses = stats.filter(course => (
      course.Course.toLowerCase().include(searchField.toLowerCase())
    ))

    return (
        <div>
        <Search placeholder="Search for tutors!" handleChange={(e) => this.setState({searchField:e.target.value})}/>
        <form onSubmit={this.handleSubmit}>
            {(formData.role=='Student'||'Both') && (
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search For Tutors!"
                    value="course"
                    onChange={InputEvent} />
            </div>
            )}
        </form>
        </div>
    )
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
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
