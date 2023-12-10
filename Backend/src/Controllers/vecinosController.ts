import { Request, Response } from 'express';
import { Connection } from 'mysql2/promise';
import { connect } from '../database';
import { Vecino } from '../Models/Vecino';



let listVecinos: Vecino[] = [
    new Vecino(1, 'Juan Pepito', 30, 'Soltero', '2022-01-01', 'Ingeniero', 'Calle A', '123ABC', 'firma1', 'Observación 1', true),
    new Vecino(2, 'Marla Garza', 25, 'Casada', '2022-02-01', 'Maestra', 'Calle B', '456DEF', 'firma2', 'Observación 2', false),
  ];
  

export async function isInsideJunta(req: Request, res: Response) {
  let conn: Connection;
  try {
    conn = await connect();
  } catch (error) {
    res.status(500).json('No se pudo conectar a la base de datos');
    return;
  }
  
  const { nombre } = req.params;
    //perteneceAJuntaTerritorial
      // Buscar el vecino por nombre en la lista de vecinos
  const vecinoEncontrado = listVecinos.find((vecino) => vecino.nombre === nombre);
  const [rows] = await conn.execute('SELECT 1 FROM vecinos WHERE nombre = ?', [nombre]);
  if(Array.isArray(rows) && rows.length > 0 ){
    const [perteneceAJuntaTerritorial] = await conn.execute('SELECT perteneceAJuntaTerritorial FROM vecinos WHERE nombre = ?', [nombre]);
  }
  if (!vecinoEncontrado) {
      return res.status(404).json({ error: 'Vecino no encontrado en la base de datos' });
  }
  else{
      res.json({ nombre: vecinoEncontrado.nombre, perteneceAJuntaTerritorial: vecinoEncontrado.perteneceAJuntaTerritorial });
  }
}

export async function deleteVecino(req: Request, res: Response){ //delete

}

export async function editVecino(req: Request, res: Response) {
    
}
  
export async function createVecino(req: Request, res: Response){

}

export async function getVecino(req: Request, res: Response){

}

export async function getAllVecinos(req: Request, res: Response){
    console.log();
    let conn: Connection;
    try{
      conn = await connect();
    }catch(error){
      res.status(500).json({ mensaje: 'Error al intentar establecer conexion con el servidor' });
      return;
    }
    const [rows] = await conn.execute('SELECT * FROM vecinos');
    
  }