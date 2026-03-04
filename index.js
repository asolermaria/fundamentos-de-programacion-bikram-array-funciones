//  1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

//  2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];

//  4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

//  5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1, num2) {
  return num1 + num2;
}

//  6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(a, b) {
  return a ** b;
}

//  7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
function separarPalabras(palabra) {
  let palabraActual = "";
  let resultado = [];
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] !== " ") {
      palabraActual += palabra[i];
    } else {
      resultado.push(palabraActual);
      palabraActual = "";
    }
  }
  resultado.push(palabraActual);
  return resultado;
}

//  8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(palabra, numero) {
  return palabra.repeat(numero);
}

//  9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numero) {
  for (let i = 2; i <= numero - 1; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

//  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

function ordenarArray(arr) {
    return arr.sort((a,b) => a-b)
}

//  11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
function obtenerPares(arrNum) {
  resultado = [];

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 == 0) {
      resultado.push(arrNum[i]);
    }
  }
  return resultado;
}

//  12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
function pintarArray(array) {
  let resultado = "[";
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      resultado += array[i] + ", ";
    } else {
      resultado += array[i];
    }
  }
  return resultado + "]";
}

//  13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
function arrayMapi(arr, multiplicarPor2) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(multiplicarPor2(arr[i]));
    }
    return resultado;
}

function multiplicarPor2(n) {
    return n * 2;
}

//  14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

//  15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//  16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ["Hola", "Mundo"];

//  17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//  18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

//  19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(n1, n2) {
  return n1 * n2;
}

//  20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(num1, num2) {
  return num1 / num2;
}

//  21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(n) {
  if (n % 2 == 0) {
    return true;
  } else return false;
}

//  22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
let arrayFunciones = [suma, resta, multiplicacion];

function suma(a, b) {
  let sum = a + b;
  return sum;
}

function resta(a, b) {
  let rest= a - b;
  return rest;
}

function multiplicacion(a, b) {
  let multip = a * b;
  return multip;
}

//  23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(arr){
    return arr.sort((a,b) => a+b)
}
//  24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

//  25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

//  26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
