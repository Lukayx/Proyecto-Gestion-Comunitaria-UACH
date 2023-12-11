import { useState } from 'react';
import { FunctionComponent } from "react";
import CardsOrg from './Organizaciones_lista/CardsOrg';

const Organizaciones: FunctionComponent = () => {
  const [organizaciones, setOrganizaciones] = useState([]);

  const fetchOrganizaciones = () => {
    fetch('http://localhost:3007/api/organizaciones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok === 'Success' && Array.isArray(data.data)) {
          setOrganizaciones(data.data);
          console.log(organizaciones);
        } else {
          console.error('Los datos recibidos no tienen la estructura esperada:', data);
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  return (
    <div>
      <button
        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-emerald-600 text-white text-lg font-bold'
        type="button"
        onClick={fetchOrganizaciones}
      >
        Reload
      </button>
      <div>
        {organizaciones.map((el) => (
          <CardsOrg
            nombre={el.nombreOrg}
          />
        ))}
      </div>
    </div>
  );
};

export default Organizaciones;
