function saludar(nombre){
    //argumentes solo es soportada por la funcion tradicional **function**
    console.log(arguments);
    console.log('Hola ' + nombre);
}

//Funcion anonima 
const saludar2 = function( nombre ) {
    console.log('Hola '+ nombre);
}


//Funcón flecha

const saludaFlecha = () => {
    console.log('Hola flecha');
}
// Paso de parametros
const saludaFlecha2 =  (nombre) => {
    console.log('Hola ' + nombre);
}



saludar('Roberto', 40, true, 'Costa Rica');
saludar2('Edith');
saludaFlecha();
saludaFlecha2('Melisa');

