//Criando Objetos
let pessoas = {
    nome : 'Edson',
    idade: 15,
    peso: 80.2,
    altura: 1.70,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['ford','fiat','gm'],
    modelo: ['ka','uno','corsa'],
    ano: [1999,2000,2001]
}

//Para acessar a propriedade usando o .
pessoas.nome
pessoas.idade
pessoas.peso
pessoas.altura

//Acessar usando ['']
pessoas['nome']
pessoas['idade']
pessoas['peso']
pessoas['altura']

//Operação IMC = peso / (altura * altura)
let imc = pessoas.peso / (pessoas.altura * pessoas.altura)

// .toFixed(x)
//Limita o numero de casas decimais
console.log('IMC', imc.toFixed(2))

//Alterar ou atualizar valores da propriedade
pessoas.nome = 'Edson Maia'
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

//usando spreed operator
produtos.descricao = [...produtos.descricao,'Feijão','Trigo']
produtos.preco = [...produtos.preco, 9.99, 10.55]
 
//usando spreed operator em objetos
carros.marca = [...carros.marca, 'Renault']
carros.modelo = [...carros.modelo, 'Sandero']
carros.ano = [...carros.ano, 2010]
