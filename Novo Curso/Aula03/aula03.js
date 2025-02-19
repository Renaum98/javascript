/*Operadores de variaveis*/

//Aritmeticos
let n1 = 10
let n2 = 2
let n3 = '2'

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

console.log(n1 + n2) //adicao
console.log(n1 - n2) //subtração
console.log(n1 * n2) //multiplicação
console.log(n1 / n2) //divisao
console.log(n1 % n2) //resto ou modulo

//Relacionais
console.log(n1 > n2)  //Maior que
console.log(n1 < n2)  //Menor que
console.log(n1 <= n2) //Menor ou igual a
console.log(n1 >= n2) //Maior ou igual a 
console.log(n2 == n3) //igual a - compara somente o conteudo
console.log(n2 === n3)// identico a - compara tanto o conteudo como o tipo de dado
console.log(n2 != n3) // diferente de não=
console.log(n2 !== n3)//não é identico


//Operadores logicos
let a = true
let b = false

console.log(a && b) //E AND
console.log(a || b) //OU OR 
console.log(!a)     //NÃO NOT negação
console.log(!b)

