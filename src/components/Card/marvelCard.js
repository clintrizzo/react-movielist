import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Card = ({ marvel }) => {
  return (
    <div className='marvelCard'>
      <img src={marvel.img.src} className='card-img-top' alt={marvel.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`#${marvel.ranking} - ${marvel.title} (${marvel.year})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Distributor: ${marvel.distributor}`}</li>
        <li className='list-group-item'>{`Amount: ${marvel.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
    marvel: PropTypes.shape({
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