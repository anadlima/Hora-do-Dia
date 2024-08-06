function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var minute = data.getMinutes()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
if (hora >= 0 && hora < 12) {
    //bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#4da9f0'
} else if (hora >= 12 && hora < 18) {
    //boa tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#c15e12'
} else {
    //boa noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#172126'
    }
}
