import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import axios from 'axios';

import '../styles/components/List.css';
import Loader from './Loader';

const List = () => {
  const [state, setState] = useState();
  //
  const getPetition = () => {
    axios
      .get('http://localhost:3000/Exercise')
      .then(response => setState(response.data));
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:3000/Exercise/${id}`);
  };

  useEffect(() => {
    getPetition();
    const d = setInterval(getPetition, 3000);
    return () => clearInterval(d);
  }, []);

  return (
    <div className="List">
      {!state ? (
        <Loader />
      ) : (
        <div>
          {state
            .map(item => {
              return (
                <div
                  style={{
                    background: `linear-gradient(to right, ${item.rightcolor ||
                      'white'}, ${item.leftcolor || 'white'})`,
                  }}
                  className="div-list"
                  key={item.id}
                >
                  <div className="div-img-list">
                    <img src={item.image} alt="" className="img-list" />
                  </div>

                  <div className="informacion-list">
                    <p className="title-list">{item.title}</p>
                    <p>{item.description}</p>
                    <p>{`${item.day || 0} dias`}</p>

                    <div className="button-edit">
                      <Link to={`/edit/${item.id}`}>
                        <FaUserEdit className="FaUser" />
                      </Link>

                      <MdDelete
                        onClick={() => handleDelete(item.id)}
                        className="MdDelete"
                      />
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default List;
