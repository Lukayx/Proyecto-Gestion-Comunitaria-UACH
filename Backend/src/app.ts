import express, { Application } from 'express';
import IndexRoutes from './Routes/index.routes';
import FileRoutes from './Routes/file.routes';

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
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
