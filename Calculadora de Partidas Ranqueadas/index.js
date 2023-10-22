let vitorias = 105
let derrotas = 2
let nivel = ''

function getRanking (vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

resultado = getRanking (vitorias, derrotas)

if (saldoVitorias <= 10){
    nivel = 'Ferro'
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = 'Bronze'
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = 'Prata'
} else if (saldoVitorias > 50 && saldoVitorias <= 80){
    nivel = 'Ouro'
} else if (saldoVitorias > 80 && saldoVitorias <= 90){
    nivel = 'Diamante'
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = 'Lendário'
} else if (saldoVitorias >= 100) {
    nivel = 'Imortal'
}


console.log('** CALCULADORA DE PARTIDAS RANKEADAS **')
console.log(`O Herói tem de saldo de ${vitorias} vitórias e ${derrotas} derrotas, saldo final de ${saldoVitorias} pontos e está no nível de ${nivel.toUpperCase()}!!!`)