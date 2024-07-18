function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //com o create Element se cria o elemento img que serve para atribuir uma imagem
        img.setAttribute('id', 'foto') //aqui foi designado com o setAttribute um id para o elemento img como 'foto' para ser usado posteriormente em css 
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute ('src', 'crianca-homem.jpg') //com o .setAttribute e 'src' se designa uma imagem para o codigo em questão, a imagem precisa estar na mesma pasta
            } else if (idade <50) {
                //adulto
                img.setAttribute ('src', 'jovem-homem.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute ('src', 'crianca-mulher.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute ('src', 'jovem-mulher.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'idoso-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // em .appendChild se cria um 'filho' para mostrar o elemento 'img' na tela
    }

}
