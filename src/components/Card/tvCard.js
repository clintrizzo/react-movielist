import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Card = ({ tv }) => {
  return (
    <div className='card'>
      <img src={tv.img.src} className='card-img-top' alt={tv.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`#${tv.ranking} - ${tv.title} (${tv.year})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Distributor: ${tv.distributor}`}</li>
        <li className='list-group-item'>{`Amount: ${tv.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
      tv: PropTypes.shape({
      title: PropTypes.string,
      distributor: PropTypes.string,
      year: PropTypes.number,
      amount: PropTypes.string,
      img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      ranking: PropTypes.number,
    }).isRequired,
  };

export default Card;