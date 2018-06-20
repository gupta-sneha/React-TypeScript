import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import AddToDoContainer from './container/AddToDoContainer';
import HomeContainer from './container/HomeContainer';
import TodoCountContainer from './container/ToDoCountContainer';


class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="col-4">
            <h2 className="navbar-brand">My TODO List</h2>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/add-todo">Add TODO</Link>
              </li>
            </ul>
          </div>
          <div>
            <TodoCountContainer />
          </div>
        </nav>
        <main role="main" className="container">
          <div className="starter-template">
            <Route
              exact={true}
              path="/"
              component={HomeContainer}
            />
            <Route
              path="/add-todo"
              component={AddToDoContainer}
            />
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
