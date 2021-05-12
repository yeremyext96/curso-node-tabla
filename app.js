const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l , argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'.cyan))
    .catch(err => console.log('Un error ocurrio en la ejecucion, no se creo el archivio :(', err));




