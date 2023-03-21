input.onButtonPressed(Button.A, function () {
    if (lista > 0) {
        basic.clearScreen()
        lista += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (lista < 4) {
        basic.clearScreen()
        lista += 1
    }
})
let lista = 0
lista = 2
basic.forever(function () {
    led.plot(lista, 2)
})
