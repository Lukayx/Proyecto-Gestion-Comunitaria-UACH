import { Request, Response } from 'express';
import readExcelFile, { Row } from 'read-excel-file/node';
import multer from 'multer';
import { connect } from '../database';
import { Organizacion } from '../Models/Organizacion';
import fs from 'fs';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export async function createOrganization(req: Request, res: Response) {
  // try {
  try {
    let perrito: Organizacion;
    const organizaciones = req.body;
    

    console.log(organizaciones);
    res.status(200).json({ mensaje: 'Solicitud POST recibida correctamente'});
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }

  //   upload.single('file')(req, res, async function (err: any) {
  //     if (err) {
  //       console.log('No se pudo cargar el archivo.', err);
  //       return res.status(500).send('Error al cargar el archivo.');
  //     }

  //     // Corrige la obtención del buffer del archivo
  //     // const excelBuffer = req.file.buffer;
  //     const excelBuffer = fs.readFileSync(
  //       '../Backend/src/local/base de datos.xlsx'
  //     );

  //     if (!excelBuffer) {
  //       console.error('El archivo no se ha recibido correctamente.');
  //       return res
  //         .status(400)
  //         .send('El archivo no se ha recibido correctamente.');
  //     }
  //     readExcelFile(excelBuffer).then(async (rows) => {
  //       // Procesar las filas del archivo Excel, por ejemplo, insertar en la base de datos
  //       await procesarFilas(rows);

  //       // Responder al cliente
  //       res.send('Archivo Excel recibido y procesado.');
  //     });
  //   });
  // } catch (error) {
  //   // Manejar cualquier error que pueda ocurrir
  //   console.error('Error en el servidor:', error);
  //   res.status(500).send('Error en el servidor.');
  // }
}

export async function verOrganization(req: Request, res: Response) {
  
}

async function procesarFilas(rows: Row[]) {
  try {
    let texto = '';
    let valor: string | number | boolean | Object;
    // const conn = await connect();
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (
          typeof cell === 'string' ||
          typeof cell === 'number' ||
          typeof cell === 'boolean'
        ) {
          valor = cell.valueOf();
        } else if (cell instanceof Date) {
          valor = cell.toLocaleDateString(); // Formatear la fecha
        } else {
          texto = '';
          break;
        }
        texto += valor + '    ';
      }
      console.log(texto + '\n');
      texto = '';
    }
  } catch (error) {
    console.log('No se pudo contectar a la base de datos');
  }
}
