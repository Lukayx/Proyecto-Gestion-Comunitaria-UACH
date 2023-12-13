import { Request, Response } from 'express';
import { Connection } from 'mysql2/promise';
import { connect } from '../database';
import { Organizations } from '../Models/Organizations';
import { Organization } from '../Interfaces/Organization';

export async function uploadOrganizations(req: Request, res: Response) {
  try {
    const organizaciones: Organization[] = req.body;
    let conn: Connection; // Intenta conectar a la base de datos
    try {
      conn = await connect();
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al intentar conectar con la base de datos.' });
      return; // Detiene la ejecución si no se pudo conectar a la base de datos
    }
    for (let i = 0; i < organizaciones.length; i++) { // Procesa cada organización
      let elemento: Organizations = new Organizations(organizaciones);
      if (elemento.isAddable(i)) { // Verifica si es posible agregar la organización
        try {
          // Verifica si ya existe una organización con el mismo numOrg
          const [rows] = await conn.execute('SELECT 1 FROM organizaciones WHERE numOrg = ? LIMIT 1',[organizaciones[i].numOrg]); 
          if (Array.isArray(rows) && rows.length === 0) {// Verificar que es un arreglo y que su largo es 0 (NO HAY NADIE CON EL MISMO numOrg)
            const values = Object.values(organizaciones[i]);
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
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

export async function getNameOrganizations(req: Request, res: Response) {
  let conn: Connection;
  try {
    conn = await connect(); // Conéctate a la base de datos
  } catch (error) {
    console.log('No se pudo conectar a la base de datos');
    res.status(500).json({ mensaje: 'Error en el servidor' });
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