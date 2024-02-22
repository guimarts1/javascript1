
const aluno = "Guilherme Martins"
let pontosSomados = 0
let notasLancadas = 0
let mediaPontos = 0

while (notasLancadas < 12) {
    const nota = Number(prompt(`${notasLancadas + 1}a nota do ${aluno}:`))
    console.log(`A nota inserida foi ${nota}`)
    pontosSomados = pontosSomados + nota
    notasLancadas = notasLancadas + 1
    mediaPontos = pontosSomados / notasLancadas
    console.log(`Média até ${notasLancadas} a nota: ${mediaPontos}`)
}

console.log(`Média final do ${aluno}: ${mediaPontos}`)

if(mediaPontos >= 6) {
    console.log("Aluno Aprovado")
} else{
    console.log("Aluno Reprovado")
}