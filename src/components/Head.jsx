import React from 'react';
import { Link } from 'react-router-dom';
import exer from '../image/web.png';
import '../styles/components/Head.css';

const Head = () => {
  return (
    <div className="Head">
      <Link to="/" className="Link">
        <img src={exer} alt="" className="img-head" />
        <h1 className="h1-head">Healthy life</h1>
      </Link>
    </div>
  );
};

export default Head;
