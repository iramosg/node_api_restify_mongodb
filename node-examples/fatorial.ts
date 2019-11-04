console.log(module.id)

export const fatorial = (num) => {
  if(num === 0) {
    return 1
  }

  return num * fatorial(num - 1)
}

// Está dizendo que eu posso exportar!
// exports.fatorial = fatorial
// exports é uma referência para module.exports

// module.exports = fatorial // Aqui eu estou exportando apenas a minha função.

// module.exports = {
//   fatorial: fatorial, // ou
//   // fatorial
// }
