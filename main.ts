input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters))
    basic.pause(1000)
    basic.clearScreen()
})
basic.setLedColor(0x00ff00)
basic.showString("A")
