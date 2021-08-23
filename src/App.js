import React from "react";
import Form from './components/register'
import About from './components/about'
import Contact from './components/contact'
import Learn from './components/learning'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function BasicExample() {
  return (
    <Router>
     
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Contact</Link>
          </li>

        </ul>

        <hr />


        <Switch>
          <Route exact path="/">
            <Form/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



