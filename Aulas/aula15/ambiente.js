let num = [5, 8, 2, 9, 3] // o numero do indice começa em 0

num[5] = 9 //dessa forma é possivel adicionar um valor a um indice de variavel composta que ainda não existia

num.push(8)//dessa forma é possivel adicionar um novo valor no final do indice de uma variavel composta 

num.length //dessa forma é possivel saber o tamanho do indice da variavel
console.log(`Meu vetor tem ${num.length} posiçoes de indice`)

num.sort() // dessa forma o progama coloca os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`${num[0]}`)


let pos = num.indexOf(2) // com o indexOf é possivel localizar em qual posição um valor esta na variavel

console.log(`O valor 8 esta na posição ${pos}`)

