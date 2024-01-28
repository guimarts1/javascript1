function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if(fsex[0].checked){
            genero='Homem'
        } else if(fsex[1].checked) {
            genero='Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}