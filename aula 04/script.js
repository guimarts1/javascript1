let num = [5, 8, 9, 3]
num[4] = 4
num.push(7)

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor está na posição ${pos}.`)
}
