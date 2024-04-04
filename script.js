let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let buttonCalculate = document.querySelector("#calculate")
let buttonClose = document.querySelector("#btnclose")
let div = ""
let calcIMC = ""


buttonCalculate.addEventListener("click",calculator)
buttonClose.addEventListener("click",modalClose)

function calculator(event){
    event.preventDefault()

    weight = document.querySelector("#weight")
    height = document.querySelector("#height")
    calcIMC = ((weight.value / (height.value**2))*10000).toFixed(1)
    div = document.querySelector("#modal")
    div.querySelector("h2").innerHTML = `Seu IMC é de ${calcIMC}`
    classification()
    errorBar()
    toogle()
}


function classification(){
    div = document.querySelector("#modal")
    if(calcIMC < 18.5){
        div.querySelector("span").innerHTML = `Você está abaixo do peso, procure um médico ou nutricionista.`
    } else if(calcIMC >= 18.5 && calcIMC < 25) {
        div.querySelector("span").innerHTML = `Você está no peso ideal.`
    } else if(calcIMC >= 25 && calcIMC <= 30) {
        div.querySelector("span").innerHTML = `Você está Obeso, reduza a ingestão de calorias.`
    } else if(calcIMC > 30) {
        div.querySelector("span").innerHTML = `Você está com obesidade mórbida, procure um médico imediatamente.`
    }
}


function modalClose(){
    toogle()
    reset()
}


function toogle() {
    if (div.classList.contains("close")) {
        div.classList.remove("close")
        div.classList.add("open")
    } else {
        div.classList.remove("open")
        div.classList.add("close")
    }
}


function errorBar() {
    if (weight.value.includes(",") || weight.value.includes(".")) {
        console.log("Peso contém vírgula ou ponto.")
        div = document.querySelector("#alertError")
    }

    if (height.value.includes(",") || height.value.includes(".")) {
        console.log("Altura contém vírgula ou ponto.")
        div = document.querySelector("#alertError")
    }
}


function reset(){
    weight.value = ""
    height.value = ""
    div = document.querySelector("#alertError")
    if (div.classList.contains("open")) {
        div.classList.remove("open")
        div.classList.add("close")
    }
}


