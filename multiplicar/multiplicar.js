//required
const fs = require('fs');
const colors = require('colors');

//let listarTabla = (base, limite = 10) opcional quemar el limite en la variable declarada ya que desde el yargs paso el parametro como default
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        console.log('========================'.green);
        console.log(`tabla de ${base}`.green);
        console.log('========================'.green);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

//ES6
module.exports = {
    crearArchivo,
    listarTabla
}