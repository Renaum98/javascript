let produtos = ['arroz','feijão','leite']
var codigos = Array(10, 10, 30)
let meses = ['Jan','Fev','Mar','Abr']

//ADICIONAR no final push = empurre
produtos.push('açúcar')
codigos.push(40, 50, 60, 70)
meses.push('Mai','Jun','Jul','Ago','Set')

//REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

//ADICIONAR no inicio unshift
produtos.unshift('Uva','Maçã')

//REMOVER do inicio shift()
produtos.shift()

//REMOVER de uma posição especifica splice
//splice: Emendar
//sintaxe: .splice(Posição inicial,Quantos remover)
codigos.splice(1,3)

//COPIAR array splice = fatiar porção
let meses1 = meses.splice(1, 2)

//VER TAMANHO DO ARRAY lenth comprimento
meses.lenth()

//spreed operator ...
let teste = [...produtos, 'Ovo', 'Pera']
