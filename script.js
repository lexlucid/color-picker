window.onload = function () {
    initColorPicker()
}

function initColorPicker() {
    const colorBox = document.getElementById("color-box")
    const rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    }
    const colorPickers = document.getElementsByClassName("picker")
    setColorPickerEventListeners(colorBox, rgb, colorPickers)
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    const pickerLen = pickerElements.length
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            const red = colors.red.value
            const green = colors.green.value
            const blue = colors.blue.value
            setElementBGColor(element, red, green, blue)
            setDisplayValues(red, green, blue)
        })
    }
}

function setElementBGColor(colorBox, red, green, blue) {
    const rgbVal = [red, green, blue].join(',')
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")"
}

function setDisplayValues(red, green, blue) {
    const redVal = document.getElementById("redVal")
    const greenVal = document.getElementById("greenVal")
    const blueVal = document.getElementById("blueVal")

    redVal.innerText = red
    greenVal.innerText = green
    blueVal.innerText = blue
}
