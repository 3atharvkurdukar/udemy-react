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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
