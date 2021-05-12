const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, //implica que es requerido
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        
        default: 10,
        describe: 'valor hasta el cual se multiplicara la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;