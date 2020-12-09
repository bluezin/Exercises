import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Form = ({
  handleChange,
  handleSubmit,
  petitionPost,
  nombre,
  title,
  petitionPut,
  description,
  image,
  day,
  rightcolor,
  leftcolor,
  formulario,
}) => {
  const [booleano, setBooleano] = useState(false);

  return (
    <div>
      <h1 className="h1-add">Exercise</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          defaultValue={title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <input
          required
          defaultValue={description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <br />
        <input
          required
          defaultValue={image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <br />
        <input
          required
          name="day"
          placeholder="dias"
          onChange={handleChange}
          defaultValue={day}
        />
        <br />
        <input
          required
          name="rightcolor"
          placeholder="rightColor"
          onChange={handleChange}
          defaultValue={rightcolor}
        />
        <br />

        <input
          required
          name="leftcolor"
          placeholder="leftColor"
          onChange={handleChange}
          defaultValue={leftcolor}
        />
        <br />
        <div className="div-button">
          {formulario.length < 3 ? (
            <button
              onClick={() => setBooleano(!booleano)}
              type="button"
              className="button"
            >
              {nombre}
            </button>
          ) : (
            <Link to="/list">
              <button
                onClick={nombre === 'Submit' ? petitionPost : petitionPut}
                type="submit"
                className="button"
              >
                {nombre}
              </button>
            </Link>
          )}
        </div>
      </form>

      {booleano ? <Modal setBooleano={() => setBooleano()} /> : null}
    </div>
  );
};

export default Form;
