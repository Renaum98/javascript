function gerar() {
    var num = document.getElementById('idnum')
    var resp = document.getElementById('res')
    for (num=num; num<=10; num++){
        resp.innerHTML (`${num}`)
    }
}