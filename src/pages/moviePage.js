import React from 'react'
import List from 'src/containers/movieList.js'

const moviesPage = () => {
    return (
        <div>
         <div className='container-fluid'>
        <h1>Movie List</h1>
        <List />
        </div>
        </div>
    )
}
export default moviesPage;
