import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Home.css';
import exericse from '../image/exercise.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="div-home">
        <h1 className="h1-home">
          Add an exercise
          <br />
          routine to your life
        </h1>
        <Link to="/app">
          <button type="button" className="button-home">
            Get started!
          </button>
        </Link>
      </div>

      <div>
        <img src={exericse} alt="" className="IMG" />
      </div>
    </div>
  );
};

export default Home;
