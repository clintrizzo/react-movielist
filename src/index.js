import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "src/components/navbar/navbar.js"
import homePage from "src/pages/homePage"
import moviesPage from "src/pages/moviePage"
import tvPage from "src/pages/tvPage"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={homePage} />
          <Route path='/moviesPage' component={moviesPage} />
          <Route path='/tvPage' component={tvPage} />
        </Switch>
      </Router>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));