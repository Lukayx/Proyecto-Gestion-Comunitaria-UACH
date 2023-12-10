import moment from 'moment';

export class Organizacion {
  public numOrg: number;
  public nombreOrg: string;
  public rut: string;
  public origen: string;
  public comuna: string;
  public region: string;
  public direccion: string;
  public tipo: string;
  public fechaConceso: Date | null;
  public fechaRecepcion: Date | null;
  public clasificacion: string;
  public estado: string;

  constructor(
    numOrg: number,
    nombreOrg: string,
    rut: string,
    origen: string,
    comuna: string,
    region: string,
    direccion: string,
    tipo: string,
    fechaConceso: string,
    fechaRecepcion: string,
    clasificacion: string,
    estado: string
  ) {
    this.numOrg = numOrg;
    this.nombreOrg = nombreOrg;
    this.rut = rut;
    this.origen = origen;
    this.comuna =comuna;
    this.region = region;
    this.direccion = direccion;
    this.tipo = tipo;
    this.fechaConceso = new Date(fechaConceso);
    this.fechaRecepcion = new Date(fechaRecepcion);
    this.clasificacion = clasificacion;
    this.estado = estado;
  }

  public isAddable(): boolean {
    return (
      this.numOrg !== null &&
      this.nombreOrg !== null &&
      this.rut !== null &&
      this.origen !== null &&
      this.comuna !== null &&
      this.region !== null &&
      this.direccion !== null &&
      this.tipo !== null &&
      this.fechaConceso !== null &&
      this.fechaRecepcion !== null &&
      this.clasificacion !== null &&
      this.estado !== null
    );
  }
}