export class Vecino {
    public id: number;
    public nombre: string;
    public edad: number;
    public estadoCivil: string;
    public fechaIngreso: Date;
    public profesion: string;
    public domicilio: string;
    public carnet: string;
    public firma: string;
    public observaciones: string;
    public perteneceAJuntaTerritorial: boolean;
  
    constructor(
      id: number,
      nombre: string,
      edad: number,
      estadoCivil: string,
      fechaIngreso: string,
      profesion: string,
      domicilio: string,
      carnet: string,
      firma: string,
      observaciones: string,
      perteneceAJuntaTerritorial: boolean
    ) {
      this.id = id;
      this.nombre = nombre;
      this.edad = edad;
      this.estadoCivil = estadoCivil;
      this.fechaIngreso = new Date(fechaIngreso);
      this.profesion = profesion;
      this.domicilio = domicilio;
      this.carnet = carnet;
      this.firma = firma;
      this.observaciones = observaciones;
      this.perteneceAJuntaTerritorial = perteneceAJuntaTerritorial;
    }
  
    public isAddable(): boolean {
      return (
        this.id !== null &&
        this.nombre !== null &&
        this.edad !== null &&
        this.estadoCivil !== null &&
        this.fechaIngreso !== null &&
        this.profesion !== null &&
        this.domicilio !== null &&
        //this.carnet !== null &&
        //this.firma !== null &&
        this.observaciones !== null &&
        this.perteneceAJuntaTerritorial !== null //Lo más importante
      );
    }
  }
  