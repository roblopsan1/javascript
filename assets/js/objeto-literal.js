let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    zip:'10880, 90265',
    ubicacion: 'Malibu, California',
    "ultima-pelicula":'Infinity War'
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('No. de trajes', personaje.trajes.length);
console.log('El último traje', personaje.trajes.length-1);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última pelicula', personaje['ultima-pelicula']);

//Más detalles 
//Eliminar la palabra edad del objeto
delete personaje.edad; 
console.log(personaje);

personaje.casado= true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Object.freeze congela el objeto en este momento y ya no se pueden realizar cambios
// NO congela las derivados de los objeto Ej. coords -> eso si se puede modificar

Object.freeze(personaje);
personaje.dinero = 10000000;

console.log(personaje);

// Listado de propiedades muestra un arreglo con todas las propiedades 

const propiedades = Object.getOwnPropertyNames (personaje);

//Muestra los valores del objeto

const valores = Object.values (personaje);

console.log(propiedades,valores);
