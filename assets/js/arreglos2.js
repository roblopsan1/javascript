let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('hola');
console.log('Largo:', juegos.length);
let primero = juegos[0];
let ultimo = juegos [juegos.length-1];
console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento,indice,arr});
});

// PUSH sirve para colocar nuevo elemento al final del arreglo
let nuevaLongitud = juegos.push('f-Zero');
console.log({ nuevaLongitud, juegos });

// unshift   Sirve para agregar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// .pop() borra el último registro del arreglo
let juegoBorrado =juegos.pop();
console.log(juegoBorrado, juegos);

// Borrar un elemento en cualquier parte del arreglo 
//  splice se usa para indicar a partir de que elemento y cuantos elementos se van a borrar
let posicionArreglo = 1;

console.log (juegos);
let juegosBorrados = juegos.splice(posicionArreglo ,2 );
console.log({juegosBorrados, juegos})

// indexOf indica en que posición del arreglo se encuentra el elemento buscado
// Cuando no encuentra el valor buscado regresa -1,-1 es valor no encontrado.
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);

