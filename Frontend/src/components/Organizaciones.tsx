import React, { useState, useEffect } from 'react';
import { FunctionComponent } from "react";

const Organizaciones: FunctionComponent = () => {
  const [organizaciones, setOrganizaciones] = useState([]);

  useEffect(() => {
    fetchOrganizaciones();
  }, []);

  const fetchOrganizaciones = () => {
    fetch('http://localhost:3007/api/organizaciones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setOrganizaciones(data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  return (
    <div>
      <h1>Organizaciones</h1>
      <h1>{organizaciones}</h1>
    </div>
  );
};

export default Organizaciones;
