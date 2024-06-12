const boton = $('#boton')
const pikachu = $('#pikachu')
const ojos = $('#ojoDer, #ojoIzq')
const manitas = $('#brazoDer, #brazoIzq')
const cola = $('#cola')
const music = new Audio('assets/audio/pokemonintrosong.mp3')

let reproduciendo = false
let bucle

$(boton).click(function () {
    if (reproduciendo) {
        boton.toggleClass('botonoff')
        boton.toggleClass('boton')
        music.pause()
        manitas.removeClass('manitas')
        ojos.removeClass('ojo-cerrado')
        pikachu.removeClass('apapachado')
        cola.removeClass('tatano3000')
        clearInterval(bucle)
    } else {
        boton.toggleClass('botonoff')
        boton.toggleClass('boton')
        music.play()
        manitas.addClass('manitas')
        ojos.addClass('ojo-cerrado')
        pikachu.addClass('apapachado')
        cola.addClass('tatano3000')
        bucle = setInterval(function () {
            $('#brazoIzq').toggleClass('manitaizq')
            $('#brazoDer').toggleClass('manitader')
            ojos.toggleClass('ojo-cerrado')
        }, 4000)
    }
    reproduciendo = !reproduciendo
})
