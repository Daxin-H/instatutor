import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      course: ""
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

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          
          </label>
        </form>
      </div>
    )
  }

}

