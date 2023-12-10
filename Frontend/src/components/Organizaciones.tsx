import React, { useState, useEffect } from 'react';

const Organizaciones = () => {
  const [organizaciones, setOrganizaciones] = useState([]);

  useEffect(() => {
    // Lógica para obtener las organizaciones desde el backend
    fetchOrganizaciones();
  }, []);

  const fetchOrganizaciones = async () => {
    fetch('http://localhost:3007/api/organizaciones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: 'Necesito los nombres de las organizaciones.',
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
      <ul>
        {organizaciones.map((org) => (
          <li key={org.id}>{org.nombreOrg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Organizaciones;
