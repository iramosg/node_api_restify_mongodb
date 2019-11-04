"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(module.id);
exports.fatorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * exports.fatorial(num - 1);
};
// Está dizendo que eu posso exportar!
// exports.fatorial = fatorial
// exports é uma referência para module.exports
// module.exports = fatorial // Aqui eu estou exportando apenas a minha função.
// module.exports = {
//   fatorial: fatorial, // ou
//   // fatorial
// }
