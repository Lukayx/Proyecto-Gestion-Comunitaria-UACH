import express, { Application } from 'express';
import IndexRoutes from './Routes/index.routes';
import FileRoutes from './Routes/organization.routes';
import {vecinosRoutes} from './Routes/vecinos.routes';
const cors = require('cors');

export class App {
  private app: Application;

  constructor(private port?: number | string, private ip?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();  // Cambié el nombre a middlewares
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3008);
    this.app.set('ip', this.ip || process.env.IP || 'localhost');
  }

  middlewares() {
    this.app.use(cors());  // CORS permite realizar solicitudes desde un dominio diferente al del servidor.
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use(FileRoutes);
    this.app.use(vecinosRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'), this.app.get('ip'));
    console.log('Server on port', this.app.get('port'));
  }
}
