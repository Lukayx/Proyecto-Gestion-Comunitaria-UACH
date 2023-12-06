import { Request, Response } from 'express';
import readExcelFile from 'read-excel-file/node';
import multer from 'multer';
import { connect } from '../database';
import { FileData } from '../Models/fileModel';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export async function createOrganization(req: Request, res: Response) {
  console.log("PERRRRO");
  const conn = await connect();
  const nombreOrganizacion = await conn.query('SELECT * FROM organizaciones');
  res.json(nombreOrganizacion);
}
