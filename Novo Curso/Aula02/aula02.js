/*Criando variaveis e atribuindo valores*/
/*é recomendavel o uso de let para variaveis que eventualmente podem mudar de valor*/

let mensagem = "Minha mensagem"
let mensagem2 = "Outra mensagem"
let meuPeso = 80.0
let minhaAltura = 1.80
let minhaIdade = 20
let doador = false
let teste = null

/*Criar Constantes e atribuir valor*/
/*Use constantes quando os valores não forem mudar, por isso o nome constante*/

const PI = 3.1415
const TAXA = 0.5

teste = 'Algum conteudo'

/* ESCREVER O CONTEUDO*/
document.write("<p> Mensagem: ", mensagem, "</p>")
document.write("<p> Mensagem2:", mensagem2, "</p>")
document.write("<p> Meu Peso:", meuPeso, "</p>")
document.write("<p>Minha altura: ", minhaAltura, "</p>")
document.write(`Minha idade: ${minhaIdade}`)
document.write('<p> Doador: '+ doador +'</p>')
document.write('<p> Teste: '+ teste +'</p>')
document.write('<p> Valor de PI: '+ PI +'</p>')
document.write('<p> Valor de TAXA: '+ TAXA +'</p>')

