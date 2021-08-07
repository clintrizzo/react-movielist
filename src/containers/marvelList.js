import React, { Component } from 'react';

import Card from '../components/Card/marvelCard';

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const marvel = await fetch('src/assets/marvel.json');
    const marvelJSON = await marvel.json();

    if (marvelJSON) {
      this.setState({
        data: marvelJSON,
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
        {data.map(marvel => (
          <div key={marvel.id} className='col-sm-3'>
            <Card marvel={marvel} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
