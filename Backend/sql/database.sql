CREATE DATABASE mysql_paillaco;

CREATE TABLE organizaciones (
  numOrg INT(8) NOT NULL PRIMARY KEY,
  nombreOrg VARCHAR(100) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  origen VARCHAR(30) NOT NULL,
  comuna VARCHAR(30) NOT NULL,
  region VARCHAR(30) NOT NULL,
  direccion VARCHAR(40) NOT NULL,
  tipo VARCHAR(25) NOT NULL,  
  fechaConceso DATE NOT NULL,  
  fechaRecepcion DATE NOT NULL, 
  clasificacion VARCHAR(30) NOT NULL,  
  estado VARCHAR(20) NOT NULL
);

CREATE TABLE vecinos (
  numero
  nombre 
  edad
  estadoCivil
  fechaIngreso
  profesion
  domicilio
  carnet
  observaciones TEXT
  vecino
);