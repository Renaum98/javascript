function carregou() {
    console.log('Pagina carregada com sucesso')
}
function rolouPagina() {
    console.log('Pagina rolou')
}
function focou() {
    console.log('Foco no titulo')
}
let letras = document.querySelector("input[type=text]")
function teclou() {
    let numLetras = 1
    console.log('Esta teclando' + (letras.value.length + numLetras))
}
let botao1 = document.querySelector('#bt01')
botao1.addEventListener('mouseover', function () {
    console.log('Focou no botão 1')
})

let botao2 = document.querySelector('#bt02')
botao2.addEventListener('mouseover', function(){
    console.log('Focou no botão 2')
})