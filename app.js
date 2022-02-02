const { CrearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');
const { l, b, h } = argv;
console.clear();


CrearArchivo(b, l, h)
    .then(nombreArchivo => console.log(`${nombreArchivo.rainbow} creado!`))
    .catch(err => console.log(err))