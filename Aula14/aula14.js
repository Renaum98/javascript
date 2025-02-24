//Selecionar todos os elementos que vao ser alterados
let formulario = document.querySelector('form')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelector('.pessoa')
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

//adicionar o escutador para o btnEnviar
//uma função anonima para pegar os valores
//calcular o imc
btnEnviar.addEventListener('click', function(e){
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    //let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    let pessoa = {
        nome :   nome,
        idade :  idade,
        peso :   peso,
        altura : altura,
        imc :    imc,
        sit :    sit
    }
    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + 'anos'
    dados[3].textContent = pessoa.peso + 'kg'
    dados[4].textContent = pessoa.altura + 'm'
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit

    e.preventDefault()
})


