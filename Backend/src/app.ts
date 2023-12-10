import express, { Application } from 'express';
import IndexRoutes from './Routes/index.routes';
import FileRoutes from './Routes/organization.routes';
const cors = require('cors');

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();  // Cambié el nombre a middlewares
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3007);
  }

  middlewares() {
    this.app.use(cors());  // CORS permite realizar solicitudes desde un dominio diferente al del servidor.
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use(FileRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
