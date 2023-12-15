import { Request, Response } from 'express';
import { creaOrganizaciones } from '../Services/databaseFunctions'
import { Connection } from 'mysql2/promise';
import { connect } from '../database';

export async function uploadOrganizations(req: Request, res: Response) {
  try {
    const response = await creaOrganizaciones(req);
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