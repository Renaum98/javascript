//Dessa forma seleciona todas as classes 'box' do documento
let testando = document.querySelectorAll('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//testando[0].textContent = 'Oloco meu', usado pra poder alterar o class na posição [0]

//Existem outros metodos tambem para se acessar
//.getElementsByTagName()
//.getElementById()
//.getElementsByClassName()
//.getElementsByName()

let testeTag = document.getElementsByTagName('div')//"Puxa" o nome da tag com nome "div" podendo ser manipulavel
document.write(testeTag[0].textContent)//mostra somente o tagname com indice 0 da lista

let testeId = document.getElementById('titulo')//"Puxa" o ID com nome "titulo" podendo ser manipulavel

document.write(testeId.textContent)

