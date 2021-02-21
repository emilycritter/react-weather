import React from 'react';
import './Card.scss';

const Card = ({ header, children }) => {
  return (
    <div className="card">
      <h1>{header}</h1>
      {children}
    </div>
  );
};

export default Card;
