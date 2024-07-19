function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO - Faltam Dados')
    } else {
        res.innerHTML = 'Contando: <br>' 
        var i = Number(ini.value) //nesse passo é importate para transformar a variação ini em um numero pois ela ja vem como uma string por padrão
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Invalido! Considerando passo 1')
            p = 1
        }
        if (i < f){//contagem crescente
            for (var c = i; c <= f; c += p) {// o sinal de += é como c+c+p nesse caso
                res.innerHTML += `${c}  \u{1f449}`
            }
        } else {//contagem regressiva
            for (var c = i; c>= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1f3c1}`

        
        
    }
}