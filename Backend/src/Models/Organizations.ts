
import moment from 'moment';
import { Organization } from '../Interfaces/Organization';

export class Organizations{
  public organizaciones: Organization[];
  constructor(organizaciones: Organization[]) {
    this.organizaciones = organizaciones;
  }
  public isAddable(i: number): boolean {
    return (
      this.organizaciones[i].numOrg !== null &&
      this.organizaciones[i].nombreOrg !== null &&
      this.organizaciones[i].rut !== null &&
      this.organizaciones[i].origen !== null &&
      this.organizaciones[i].comuna !== null &&
      this.organizaciones[i].region !== null &&
      this.organizaciones[i].direccion !== null &&
      this.organizaciones[i].tipo !== null &&
      this.organizaciones[i].fechaConceso !== null &&
      this.organizaciones[i].fechaRecepcion !== null &&
      this.organizaciones[i].clasificacion !== null &&
      this.organizaciones[i].estado !== null
    );
  }
}