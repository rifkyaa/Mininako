import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Rating.css';

const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="star full" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} className="star half" />);
  }

  while (stars.length < 5) {
    stars.push(<FaStar key={stars.length} className="star empty" />);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
