const boton = $('#boton')
const pikachu = $('#pikachu')
const ojos = $('#ojoDer, #ojoIzq')
const manitas = $('#brazoDer, #brazoIzq')
const cola = $('#cola')

$(boton).click(function () {
    manitas.addClass('manitas')
    ojos.addClass('ojo-cerrado')
    pikachu.addClass('apapachado')
    cola.addClass('tatano3000')
    
    setInterval(function () {
        $('#brazoIzq').toggleClass('manitaizq')
        $('#brazoDer').toggleClass('manitader')
        ojos.toggleClass('ojo-cerrado')
    }, 4000)
})