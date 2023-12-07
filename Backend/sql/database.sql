CREATE DATABASE mysql_paillaco;

CREATE TABLE organizaciones (
  numOrg INT(7) NOT NULL PRIMARY KEY,
  nombreOrg VARCHAR(100) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  origen VARCHAR(30) NOT NULL,
  comuna VARCHAR(30) NOT NULL,
  region VARCHAR(30) NOT NULL,
  direccion VARCHAR(40) NOT NULL,
  tipo VARCHAR(10) NOT NULL,  
  fechaConceso DATE,  -- Guardando como VARCHAR por ahora
  fechaRecepcion DATE, -- Guardando como VARCHAR por ahora
  clasificacion VARCHAR(30) NOT NULL,  
  estado VARCHAR(10) NOT NULL 
);