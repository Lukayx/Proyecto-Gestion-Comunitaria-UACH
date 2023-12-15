import { FunctionComponent, useState } from 'react';


interface MensajeProps {
  id: number;
  autor: string;
  contenido: string;
  respuestas?: string[];
}


const Mensaje: FunctionComponent<MensajeProps> = ({ autor, contenido, respuestas }) => {
  const [mostrarRespuestas, setMostrarRespuestas] = useState(false);

  return (
    <div className="border p-2 mb-2">
      <div onClick={() => setMostrarRespuestas(!mostrarRespuestas)} style={{ cursor: 'pointer' }}>
        <strong>{autor}:</strong> {contenido}
      </div>
      
      {mostrarRespuestas && respuestas && (
        <div className="ml-4">
          <strong>Respuestas:</strong>
          {respuestas.map((respuesta, index) => (
            <div key={index}>{respuesta}</div>
          ))}
        </div>
      )}
    </div>
  );
};


const Foro: FunctionComponent = () => {
  
  const mensajes: MensajeProps[] = [
		{ 
			id: 1, 
			autor: 'Usuario1', 
			contenido: '¿Cómo puedo unirme a la organización comunal de jardinería?', 
			respuestas: ['Puedes unirte a la organización de jardinería asistiendo a nuestras reuniones mensuales. ¡Todos son bienvenidos!']
		},
		{ 
			id: 2, 
			autor: 'Usuario2', 
			contenido: '¿Cuándo es el próximo evento comunitario?', 
			respuestas: ['Nuestro próximo evento comunitario será el sábado próximo en el parque central. ¡Esperamos verte allí!']
		},
		{ 
			id: 3, 
			autor: 'Usuario3', 
			contenido: '¿Cómo puedo contribuir a la organización de limpieza del vecindario?', 
			respuestas: ['Para contribuir, puedes unirte al equipo de voluntarios que se reúne cada domingo a las 10 a.m. en la plaza principal.']
		},
		{ 
			id: 4, 
			autor: 'Usuario4', 
			contenido: '¿Hay algún evento especial para recaudar fondos para el centro comunitario?', 
			respuestas: ['Sí, estamos organizando un evento de recaudación de fondos el próximo mes. Mantente atento a nuestras redes sociales para obtener más detalles.']
		},
		{ 
			id: 5, 
			autor: 'Usuario5', 
			contenido: '¿Cómo puedo proponer una idea para un nuevo evento en la comunidad?', 
			respuestas: ['Puedes proponer tu idea en nuestra próxima reunión comunitaria. Estamos abiertos a sugerencias y siempre buscamos formas de mejorar nuestra comunidad.']
		},
		{ 
			id: 6, 
			autor: 'Usuario6', 
			contenido: '¿Cuál es el proceso para formar una nueva organización comunal?', 
			respuestas: ['Para formar una nueva organización comunal, comunícate con nuestro equipo de coordinación. Te proporcionaremos orientación y apoyo para que puedas comenzar.']
		},
	];

  return (
    <div>
      <h1>Foro</h1>
      {mensajes.map((mensaje) => (
        <Mensaje key={mensaje.id} id={mensaje.id} autor={mensaje.autor} contenido={mensaje.contenido} respuestas={mensaje.respuestas} />
      ))}
    </div>
  );
};

export default Foro;
