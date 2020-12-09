import React from 'react';
import '../styles/components/Card.css';
import photo from '../image/photo.png';

const Card = ({
  title,
  description,
  image,
  day,
  leftcolor,
  rightcolor,
  card,
}) => {
  //
  return (
    <div
      className="Card"
      style={{
        background: `linear-gradient(to right, ${rightcolor ||
          'white'}, ${leftcolor || 'white'})`,
      }}
    >
      <div className="div-new-card">
        {card === undefined ? null : <h1 className="new-card">{card}</h1>}
      </div>
      <div className="div-flex-card">
        <div className="div-img-card">
          <img src={image || photo} alt="" className="card-image" />
        </div>
        <div className="information-card">
          <p className="title-card">{title || 'Title'}</p>
          <p className="descrip-card">{description || 'description'}</p>
          <p className="day-card">{day || 'dias'}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
