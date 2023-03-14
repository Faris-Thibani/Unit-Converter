const inputField = document.getElementById("input-box")
const lenPara = document.getElementById("len-p")
const volPara = document.getElementById("vol-p")
const masPara = document.getElementById("m-p")
const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", convert)

function convert() {
    const inputValue = inputField.value
    const valueInFeet = (inputValue * 3.281).toFixed(3)
    const valueInMeter = (inputValue / 3.281).toFixed(3)
    const valueInLiter = (inputValue * 0.264).toFixed(3)
    const valueInGallon = (inputValue / 0.264).toFixed(3)
    const valueInKilogram = (inputValue / 2.204).toFixed(3)
    const valueInPound = (inputValue * 2.204).toFixed(3)

    lenPara.textContent = `${inputValue} meters = ${valueInFeet} | ${inputValue} feet = ${valueInMeter} `
    volPara.textContent = `${inputValue} liters = ${valueInGallon} | ${inputValue} gallons = ${valueInLiter}`
    masPara.textContent = `${inputValue} kilos = ${valueInPound} | ${inputValue} pounds = ${valueInKilogram}`
}

