export class Organizacion {
  private numOrg: number;
  public nombreOrg: string;
  private rut: string;
  private origen: string;
  private comuna: string;
  private region: string;
  private direccion: string;
  private tipo: string;
  private fechaConceso: Date | null;
  private fechaRecepcion: Date | null;
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
    this.fechaConceso = this.parseFecha(fechaConceso);
    this.fechaRecepcion = this.parseFecha(fechaRecepcion);
    this.clasificacion = clasificacion;
    this.estado = estado;
  }

  private parseFecha(fechaStr: string): Date | null {
    // Expresión regular para MM/DD/YYYY
    const formatoMMDDYYYY = /^\d{2}\/\d{2}\/\d{4}$/;

    if (formatoMMDDYYYY.test(fechaStr)) {
      // Si está en formato MM/DD/YYYY, transformarlo a YYYY/MM/DD
      const [mes, dia, anio] = fechaStr.split('/');
      const nuevaFechaStr = `${anio}-${mes}-${dia}`;
      return new Date(nuevaFechaStr);
    }

    // Intentar parsear la fecha original
    const fechaOriginal = new Date(fechaStr);

    // Si el parseo fue exitoso, devolver la fecha original
    if (!isNaN(fechaOriginal.getTime())) {
      return fechaOriginal;
    }
    return null;
  }  
}