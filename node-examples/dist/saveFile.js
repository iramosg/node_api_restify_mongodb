"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo File System
// const fs = require('fs')
const fs = require("fs"); // ES2015
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`);
});
