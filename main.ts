input.onPinPressed(TouchPin.P0, function () {
    led.plotBarGraph(
    input.soundLevel(),
    1023
    )
    basic.pause(1000)
    basic.showNumber(input.soundLevel())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
    basic.pause(1000)
    basic.showNumber(input.acceleration(Dimension.X))
})
input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
    basic.pause(1000)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    input.compassHeading(),
    360
    )
    basic.pause(1000)
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(1000)
    basic.showNumber(input.lightLevel())
})
basic.showString("datos de la tarea")
