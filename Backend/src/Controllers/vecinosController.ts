import { Request, Response } from 'express';
import { Connection } from 'mysql2/promise';
import { connect } from '../database';
import { Vecino } from '../Models/Vecino';

let listVecinos: Vecino[] = [
  { nombre: 'Patitos Gaming' },
  { nombre: 'Equipo Rocket' },
  { nombre: 'Colo Colo' },
  { nombre: 'Jaidefinishon' },
  { nombre: 'Guerreros Z' },
  { nombre: 'T1' },
  { nombre: 'Gestion Comunitaria' },
  { nombre: 'Murloc' },
  { nombre: 'Nemo' }
]
//quiero obtener de esta funcion todos los vecinos que est
export async function getAllVecinos(req: Request, res: Response){
  console.log();
  let conn: Connection;
  try{
    conn = await connect();
  }catch(error){
    res.status(500).json({ mensaje: 'Error al intentar establecer conexion con el servidor' });
    return;
  }
  const [rows] = await conn.execute('SELECT nombre FROM vecinos');
  
}

export async function getVecino(req: Request, res: Response){
    
}
export async function deleteVecino(req: Request, res: Response){

}
export async function editVecino(req: Request, res: Response){
    
}
export async function createVecino(req: Request, res: Response){
    
}