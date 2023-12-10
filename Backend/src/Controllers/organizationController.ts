import { Request, Response } from 'express';
import { Connection } from 'mysql2/promise';
import { connect } from '../database';
import { Organizations } from '../Models/Organizations';
import { Organization } from '../Interfaces/Organization';

export async function uploadOrganizations(req: Request, res: Response) {
  try {
    const organizaciones: Organization[] = req.body;
    // Intenta conectar a la base de datos
    let conn: Connection;
    try {
      conn = await connect();
    } catch (error) {
      res.status(500).json({ mensaje: 'Error en el servidor' });
      return; // Detiene la ejecución si no se pudo conectar a la base de datos
    }
    // Procesa cada organización
    for (let i = 0; i < organizaciones.length; i++) {
      let elemento: Organizations = new Organizations(organizaciones);
      // Verifica si es posible agregar la organización
      if (elemento.isAddable(i)) {
        try {
          // Verifica si ya existe una organización con el mismo numOrg
          const [rows] = await conn.execute(
            'SELECT 1 FROM organizaciones WHERE numOrg = ? LIMIT 1',
            [organizaciones[i].numOrg]
          );
          // Verificar si se encontraron filas
          if (Array.isArray(rows) && rows.length === 0) {
            // Si no existe, entonces se puede agregar
            await conn.execute(
              `INSERT INTO organizaciones (numOrg, nombreOrg, rut, origen, comuna, region, direccion, tipo, fechaConceso, fechaRecepcion, clasificacion, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                organizaciones[i].numOrg,
                organizaciones[i].nombreOrg,
                organizaciones[i].rut,
                organizaciones[i].origen,
                organizaciones[i].comuna,
                organizaciones[i].region,
                organizaciones[i].direccion,
                organizaciones[i].tipo,
                organizaciones[i].fechaConceso,
                organizaciones[i].fechaRecepcion,
                organizaciones[i].clasificacion,
                organizaciones[i].estado,
              ]
            );
          } else {
            console.log('El numOrg:', elemento.organizaciones[i].numOrg, 'ya existe en la tabla.');
          }
        } catch (error) {
          console.error('Error al intentar agregar la organización:', error);
          res.status(500).json({ mensaje: 'Error en el servidor' });
        }
      } else {
        console.log('Hay un elemento null en la fila');
      }
    }
    res.status(200).json({ mensaje: 'Solicitud POST recibida correctamente' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ mensaje: 'Error en el servidor al hacer POST ' });
  }
}

export async function getNameOrganizations(req: Request, res: Response) {
  let conn: Connection;
  try {
    conn = await connect(); // Conéctate a la base de datos
  } catch (error) {
    console.log('No se pudo conectar a la base de datos');
    res.status(500).json({ mensaje: 'Error en el servidor al hacer GET' });
    return; // Detiene la ejecución si no se pudo conectar a la base de datos
  }
  
  // Realiza una consulta SELECT para obtener los datos
  const [rows] = await conn.execute('SELECT nombreOrg FROM organizaciones');
  return res.status(200).json({ ok: 'Success', data: rows});
}

export async function uploadOrganization(req: Request, res:Response) {
  let conn: Connection;
  try {
    conn = await connect();
  } catch (error) {
    res.status(500).json('Error al intentar conectarse con la base de datos');
    return;
  }

}