export class userModel {
  private numOrg: number;
  public nombreOrg: string;
  private rut: string;
  private origen: string;
  private comuna: string;
  private region: string;
  private direccion: string;
  private tipo: string;
  private fechaConceso: string;
  private fechaRecepcion: string;
  private clasificacion: string;
  private estado: string;

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
    this.comuna = comuna;
    this.region = region;
    this.direccion = direccion;
    this.tipo = tipo;
    this.fechaConceso = fechaConceso;
    this.fechaRecepcion = fechaRecepcion;
    this.clasificacion = clasificacion;
    this.estado = estado;
  }

  

}
