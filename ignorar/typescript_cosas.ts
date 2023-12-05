let mensaje: string = 'Hola mundo';
mensaje = 'perro';

console.log(mensaje);

mensaje = 'chao mundo';

/*
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * Tipos de TS
 * any -NO USARLO-
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 *
 * Tipos inferidos -Al inicializar variable typescript logra identificar que tipo de variable es-
 */

let extincionDinosaurio: number = 76_000_000;
let dinoaurioFavorito: string = 'Velociraptor';
let extintos = true;

// extintos = 42 //Fijarse en el error

/*No es necesario definir el tipo de variable cuando ya la inicializas con un valor en especifico ya
  que typescript detecta que tipo de variable es cada una.*/

// NUNCA definir variables de esta forma: (variable de tipo any)
let variableSinInicializar;

function funcionPiola(config: any) {
  return config;
}

let animales: string[] = ['perro', 'gato', 'agustin'];
let nums: number[] = [1, 3, 5];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map(x => x.) // Autocompletado sugiere metodos del tipo de dato

let tupla: [number, string[]] = [1, ['*No hace nada*', 'agustin']];

const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';

//PascalCase
enum Talla {
  Chica = 's',
  Mediana = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}

const variable1 = Talla.Grande;

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre?: string; // indica que esta propiedad es opcional (no necesaria de inicializar a diferencia de 'id')
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: 'vicente',
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: 'calle Linda',
    pais: 'Chile',
  },
};
// objeto.id = 64 // Propiedad de solo lectura, no modificable
objeto.nombre = 'hola mundo';

const arr: Persona[] = [];