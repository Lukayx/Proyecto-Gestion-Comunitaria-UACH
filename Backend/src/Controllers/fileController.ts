import { Request, Response } from 'express';
import { connect } from '../database';
import { Organizacion } from '../Models/Organizacion';

export async function createOrganization(req: Request, res: Response) {
  try {
    const organizaciones = req.body;
    // Intenta conectar a la base de datos
    let conn;
    try {
      conn = await connect();
    } catch (error) {
      console.log('No se pudo conectar a la base de datos');
      res.status(500).json({ mensaje: 'Error en el servidor' });
      return; // Detiene la ejecución si no se pudo conectar a la base de datos
    }
    // Procesa cada organización
    for (const organizacion of organizaciones) {
      let elemento: Organizacion = new Organizacion(
        organizacion.numeroOrg,
        organizacion.nombreOrg,
        organizacion.rut,
        organizacion.origen,
        organizacion.comuna,
        organizacion.region,
        organizacion.direccion,
        organizacion.tipo,
        organizacion.fechaConceso,
        organizacion.fechaRecepcion,
        organizacion.clasificacion,
        organizacion.estado
      );
      // Verifica si es posible agregar la organización
      if (elemento.isAddable()) {
        try {
          // Verifica si ya existe una organización con el mismo numOrg
          const [rows] = await conn.execute(
            'SELECT 1 FROM organizaciones WHERE numOrg = ? LIMIT 1',
            [elemento.numOrg]
          );
          // Verificar si se encontraron filas
          if (Array.isArray(rows) && rows.length === 0) {
            // No existe, entonces se puede agregar
            await conn.execute(
              `INSERT INTO organizaciones (numOrg, nombreOrg, rut, origen, comuna, region, direccion, tipo, fechaConceso, fechaRecepcion, clasificacion, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                elemento.numOrg,
                elemento.nombreOrg,
                elemento.rut,
                elemento.origen,
                elemento.comuna,
                elemento.region,
                elemento.direccion,
                elemento.tipo,
                elemento.fechaConceso,
                elemento.fechaRecepcion,
                elemento.clasificacion,
                elemento.estado,
              ]
            );
          } else {
            console.log(
              'El numOrg:',
              elemento.numOrg,
              'ya existe en la tabla.'
            );
          }
        } catch (error) {
          console.error('Error al intentar agregar la organización:', error);
          res.status(500).json({ mensaje: 'Error en el servidor' });
        }
      }
    }
    // Cierra la conexión a la base de datos
    await conn.end();
    res.status(200).json({ mensaje: 'Solicitud POST recibida correctamente' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

export async function verOrganization(req: Request, res: Response) {
  let conn;
  try {
    conn = await connect(); // Conéctate a la base de datos
  } catch (error) {
    console.log('No se pudo conectar a la base de datos');
    res.status(500).json({ mensaje: 'Error en el servidor' });
    return; // Detiene la ejecución si no se pudo conectar a la base de datos
  }
  // Realiza una consulta SELECT para obtener los datos
  const [rows] = await conn.execute('SELECT * FROM organizaciones');

  // Imprime los resultados
  console.log('Contenido de la base de datos:');
  res.json(rows);
  await conn.end();
}
