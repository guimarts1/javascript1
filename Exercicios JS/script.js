function carregar(){
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // bom dia.
        img.src = 'images/manha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde.
        img.src = 'images/tarde.png'
        document.body.style.background = 'orange'
    } else {
        //boa noite.
        img.src = 'images/noite.png'
        document.body.style.background = 'grey'
    }
}