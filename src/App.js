import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink to="/courses"><button>Courses</button></NavLink>
            &nbsp;
            <NavLink to="/users"><button>Users</button></NavLink>
          </header>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route exact path="/" component={Courses} />
            <Route render={() => (
              <h2 style={{ textAlign: 'center' }}>
                Page Not Found
              </h2>
            )} />
          </Switch>
          <ol style={{textAlign: 'left'}}>
            <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
