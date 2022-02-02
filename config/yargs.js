const argv = require('yargs')
    .options(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
    .options(
        'l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
    .options(
        'h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Numero hasta el que llegara la tabla'
        })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base debe ser un número')
        } else {
            return true
        }
    })
    .argv;

module.exports = argv;