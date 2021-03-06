import React, { Component } from 'react';

import Card from '../components/Card/movieCard';

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch('src/assets/movie.json');
    const moviesJSON = await movies.json();

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='row'>
        {data.map(movie => (
          <div key={movie.id} className='col-sm-3'>
            <Card movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
