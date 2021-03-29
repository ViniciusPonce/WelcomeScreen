function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './assets/fotomanha.png'
        document.body.style.background = '#e2cd9f'
        bom.innerHTML = "BOM DIA!"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = './assets/fototarde.png'
        document.body.style.background = '#b9846f'
        bom.innerHTML = "BOA TARDE!"
    } else {
        //BOA NOITE!
        img.src = './assets/fotonoite.png'
        document.body.style.background = '#515154'
        bom.innerHTML = "BOA NOITE!"
    }
}