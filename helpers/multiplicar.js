const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'} ${i} ${'='} ${(base * i)}\n`;
            consola += `${colors.cyan(base)} ${'x'.green} ${colors.cyan(i)} ${'='.green} ${colors.red(base * i)}\n`;
        }

        if (listar) {
            console.log('==================='.red);
            console.log(colors.red('Tabla del: ', colors.blue(base)));
            console.log('==================='.red);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla de ${base}.txt `;

    } catch (err) {
        throw (err);
    }

}

module.exports = {
    crearArchivo
}

