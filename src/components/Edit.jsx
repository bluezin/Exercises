import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Card from './Card';

const Edit = ({ match }) => {
  const [datos, setDatos] = useState();
  const [form, setForm] = useState({
    formulario: {},
  });

  function petitionGet() {
    axios.get(`http://localhost:3000/Exercise/${match.params.id}`).then(res => {
      setDatos(res.data);
      setForm({ formulario: res.data });
    });
  }

  useEffect(() => {
    petitionGet();
  }, []);

  function petitionPut() {
    axios.put(
      `http://localhost:3000/Exercise/${match.params.id}`,
      form.formulario
    );
  }

  function handleChange(event) {
    setForm({
      formulario: {
        ...form.formulario,
        [event.target.name]: event.target.value,
      },
    });
  }
  const formulario = Object.keys(form.formulario);

  return (
    <div className="Exercise">
      <div className="div-form">
        <Form
          nombre="Edit"
          {...datos}
          petitionPut={petitionPut}
          handleChange={handleChange}
          formulario={formulario}
        />
      </div>
      <Card {...form.formulario} />
    </div>
  );
};

export default Edit;
