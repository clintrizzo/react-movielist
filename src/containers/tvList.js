import React, { Component } from 'react';

import Card from '../components/Card/tvCard';

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const tv = await fetch('src/assets/tv.json');
    const tvJSON = await tv.json();

    if (tvJSON) {
      this.setState({
        data: tvJSON,
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
        {data.map(tv => (
          <div key={tv.id} className='col-sm-3'>
            <Card tv={tv} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
