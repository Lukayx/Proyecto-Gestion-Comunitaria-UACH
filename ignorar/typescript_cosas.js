var mensaje = 'Hola mundo';
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
var extincionDinosaurio = 76000000;
var dinoaurioFavorito = 'Velociraptor';
var extintos = true;
// extintos = 42 //Fijarse en el error
/*No es necesario definir el tipo de variable cuando ya la inicializas con un valor en especifico ya
  que typescript detecta que tipo de variable es cada una.*/
// NUNCA definir variables de esta forma: (variable de tipo any)
var variableSinInicializar;
function funcionPiola(config) {
    return config;
}
function parseFecha(fechaStr) {
    // Expresión regular para MM/DD/YYYY
    var formatoMMDDYYYY = /^\d{2}\/\d{2}\/\d{4}$/;
    if (formatoMMDDYYYY.test(fechaStr)) {
        // Si está en formato MM/DD/YYYY, transformarlo a YYYY/MM/DD
        var _a = fechaStr.split('/'), mes = _a[0], dia = _a[1], anio = _a[2];
        var nuevaFechaStr = "".concat(anio, "-").concat(mes, "-").concat(dia);
        return new Date(nuevaFechaStr);
    }
    // Intentar parsear la fecha original
    var fechaOriginal = new Date(fechaStr);
    // Si el parseo fue exitoso, devolver la fecha original
    if (!isNaN(fechaOriginal.getTime())) {
        return fechaOriginal;
    }
    return null;
}
var animales = ['perro', 'gato', 'agustin'];
var nums = [1, 3, 5];
var checks = [];
var nums2 = [];
// nums.map(x => x.) // Autocompletado sugiere metodos del tipo de dato
var tupla = [1, ['*No hace nada*', 'agustin']];
var chica = 's';
var mediana = 'm';
var grande = 'l';
var extraGrande = 'xl';
//PascalCase
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
var variable1 = Talla.Grande;
var estado = 2 /* LoadingState.Success */;
var objeto = {
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
var arr = [];
var fecha = '12/5/2023';
var fechaa = parseFecha(fecha);
if (fechaa != null) {
    var a = fechaa.toISOString().split('T')[0];
    console.log(a);
}
