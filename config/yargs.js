const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') //es un paquete  de node_module no un path
    // .command(['listar', 'crear'], 'Imprmir en consola la tabla de multiplicar', {
    //     base: {
    //         demand: true,
    //         alias: 'b'
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10
    //     }
    // })
    .command('listar', 'Imprmir en consola la tabla de multiplicar', { opts })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', { opts })
    .help()
    .argv;

module.exports = {
    argv
}