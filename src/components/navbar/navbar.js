import React from 'react';
import { Link } from 'react-router-dom';
const navbar= () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/moviesPage">Movies</Link>
            </li>
            <li>
                <Link to="/tvPage">TV Shows</Link>
            </li>
        </div>
    )
}
 export default navbar;