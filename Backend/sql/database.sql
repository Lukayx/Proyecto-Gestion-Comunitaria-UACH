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

-- CREATE TABLE vecinos (
--   numero
<<<<<<< HEAD
--   nombre 
=======
--   nombre
>>>>>>> 71b36165a3da12f994a5022fda3d9085fb79678a
--   edad
--   estadoCivil
--   fechaIngreso
--   profesion
--   domicilio
--   carnet
<<<<<<< HEAD
--   observaciones TEXT
=======
--   observaciones TEXT,
>>>>>>> 71b36165a3da12f994a5022fda3d9085fb79678a
--   vecino
-- );