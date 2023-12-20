let resultado = ranking(10, 0);

function ranking(vitorias, derrotas) {
  let resultadoAux = vitorias - derrotas;
  return resultadoAux;
}

switch (true) {
  case resultado <= 10:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Ferro")
    break

  case resultado <= 20:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Bronze")
    break

  case resultado <= 50:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Prata")
    break

  case resultado <= 80:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Ouro")
    break

  case resultado <= 90:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Diamante")
    break

  case resultado <= 100:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Lendário")
    break

  default:
    console.log("O Herói tem de saldo de " + resultado + " e está no nível de Imortal")
    break
}
