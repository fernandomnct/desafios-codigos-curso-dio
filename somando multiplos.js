var a = parseInt(gets());
var N = parseInt(gets());

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

somaMultiplos = 0;

for (let i = a; i <= N; i++) {
  if (i % a === 0) {
    somaMultiplos += i
  }
}

print(somaMultiplos);