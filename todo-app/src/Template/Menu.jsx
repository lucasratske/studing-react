import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <Router>
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <FontAwesomeIcon icon="calendar-check" />
            </Link>
          </div>
          <div id="nav-bar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="todo">Tarefas</Link>
              </li>
              <li>
                <Link to="about">Sobre</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Todo />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Menu;
