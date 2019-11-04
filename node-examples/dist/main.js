"use strict";
// const fatorial = require('./fatorial') // Não é preciso colocar a extensão do arquivo.
Object.defineProperty(exports, "__esModule", { value: true });
// const argv = require('yargs').demandOption('num').argv
const fatorial_1 = require("./fatorial");
const yargs = require("yargs");
console.log("n-fatorial");
// Retorna o local de onde o script está sendo executado
// console.log(`Executando o script a partir do diretório ${process.cwd()}`)
// Evento
// process.on('exit', () => {
//   console.log('O script está prestes a terminar')
// })
// const fatorial = (num) => {
//   if(num === 0) {
//     return 1
//   }
//   return num * fatorial(num - 1)
// }
// Argumentos da linha de comando para startar o script
console.log('=== n-fatorial ===');
const argv = yargs.demandOption('num').argv;
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
