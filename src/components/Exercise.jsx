import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Form from './Form';
import '../styles/components/Exercise.css';

const Exercise = () => {
  const [form, setForm] = useState({
    formulario: {},
  });

  function handleChange(event) {
    setForm({
      formulario: {
        ...form.formulario,
        [event.target.name]: event.target.value,
      },
    });
  }

  function petitionPost() {
    return axios.post('http://localhost:3000/Exercise', form.formulario);
  }

  function handleSubmit(event) {
    event.preventDefault();
    petitionPost();
  }

  const formulario = Object.keys(form.formulario);

  return (
    <div className="Exercise">
      <div className="div-form">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          petitionPost={petitionPost}
          formulario={formulario}
          nombre="Submit"
        />
      </div>
      <div>
        <Card {...form.formulario} card="New card" />
      </div>
    </div>
  );
};

export default Exercise;
