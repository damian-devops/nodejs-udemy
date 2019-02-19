//sin destructuracion
// const multiplicar = require('./multiplicar/multiplicar');

//destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //es un path se no un paquete de node_module
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('commando no reconocido');
        break;
}

// console.log(argv);

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
//para probar la app poner en consola  node app --base=<numero aleatorio> sin yargs
// crearArchivo(base)
// .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e => console.log(e));