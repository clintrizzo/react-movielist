import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from '../src/pages/homePage'
import moviesPage from '../src/pages/moviePage'
import tvPage from '../src/pages/tvPage'
import marvelPage from '../src/pages/marvelPage'

function App() {
    return (
        <Router>
            <div>
                <nav style={{ margin: 10 }}>
                    <Link to='/' style={{ padding: 10 }}>
                        Home
                    </Link>

                    <Link to='/moviePage' style={{ padding: 10 }}>
                        Movie Faviorites
                    </Link>

                    <Link to='/tvPage' style={{ padding: 10 }}>
                        TV Faviorites
                    </Link>
                    <Link to='/marvelPage' style={{ padding: 10 }}>
                        Marvel Faviorites
                    </Link>
                </nav>
            <Switch>
                <Route exact path='/' exact component={Home} />
                <Route path='/moviePage' component={moviesPage} />
                <Route path='/tvPage' component={tvPage} />
                <Route path='/marvelPage' component={marvelPage} />
            </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));