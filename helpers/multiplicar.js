const fs = require('fs');
const colors = require('colors');
const CrearArchivo = async(base, listar, hasta) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base}` + `X` + `${i}` + `=` + `${base * i}\n`;
        };
        if (listar === true) {
            console.log('================='.brightBlue)
            console.log(' Tabla del:', base)
            console.log('================='.brightBlue)
            console.log(salida)
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        return `Tabla-${base}.txt`
    } catch (e) {
        throw e;
    }
}

module.exports = {
    CrearArchivo: CrearArchivo
}