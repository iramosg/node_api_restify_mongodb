// Importa o módulo File System
// const fs = require('fs')
import * as fs from 'fs' // ES2015
import * as yargs from 'yargs'

const argv = yargs
  .alias('f', 'filename')
  .alias('c', 'content')
  .demandOption('filename')
  .demandOption('content')
  .argv

fs.writeFile(argv.filename, argv.content, (error) => {
  if(error) throw error
  console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`)
})