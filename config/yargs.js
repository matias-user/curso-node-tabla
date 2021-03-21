const argv = require('yargs')
        .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Opcion base, en este argumento se elige el numero base que se multiplicara.'
    })                  
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        // demandOption: true,
        describe: 'Muestra o no la tabla en consola.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        // demandOption: true,
        describe: 'Hasta que numero multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un numero.'
        }else {
            return true;
        }
    })
    .argv;

    module.exports = argv;