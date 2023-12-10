import React, { FunctionComponent } from 'react';

const Novedades: FunctionComponent<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
    </div>
  );
};

const NovedadesContainer: FunctionComponent = () => {
  const novedadesData = [
    {
      title: 'Nombre de la Organización 1',
      content: 'Información general sobre la organización 1.',
    },
    {
      title: 'Nombre de la Organización 2',
      content: 'Información general sobre la organización 2.',
    },
    {
      title: 'Nombre de la Organización 3',
      content: 'Información general sobre la organización 3.',
    },
    {
      title: 'Nombre de la Organización 4',
      content: 'Información general sobre la organización 4.',
    },
    {
      title: 'Nombre de la Organización 5',
      content: 'Información general sobre la organización 5.',
    },
    {
      title: 'Nombre de la Organización 6',
      content: 'Información general sobre la organización 6.',
    },
    {
      title: 'Nombre de la Organización 7',
      content: 'Información general sobre la organización 7.',
    },
    {
      title: 'Nombre de la Organización 8',
      content: 'Información general sobre la organización 8.',
    },
    
  ];

  return (
    <div>
      {novedadesData.map((data, index) => (
        <Novedades key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

export default NovedadesContainer;
