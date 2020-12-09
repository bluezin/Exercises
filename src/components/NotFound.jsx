import React from 'react';
import notFound from '../image/pageNot.png';
import '../styles/components/NotFound.css';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={notFound} alt="" className="NotFound" />
    </div>
  );
};

export default NotFound;
