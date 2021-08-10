import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import moviesPage from '../src/pages/moviePage'
import tvPage from '../src/pages/tvPage'
import marvelPage from '../src/pages/marvelPage'

function App() {
    return (
        <Router>
            <div>
                <nav style={{ margin: 10 }}>
                <Link to='/moviesPage' style={{ padding: 10 }}>
                        Movies
                    </Link>
                    <Link to='/tvPage' style={{ padding: 10 }}>
                        TV 
                    </Link>
                    <Link to='/marvelPage' style={{ padding: 10 }}>
                        Marvel
                    </Link>
                </nav>
            <Switch>
                <Route exact path='/' exact component={moviesPage} />
                <Route exact path='/moviesPage' exact component={moviesPage} />
                <Route path='/tvPage' exact component={tvPage} />
                <Route path='/marvelPage' exact component={marvelPage} />
            </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));