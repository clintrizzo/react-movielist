import React from 'react'
import ReactDOM from 'react-dom'
import List from './containers/movieList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
    <div className='container-fluid'>
        <h1>Movie List</h1>
    <List />
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));