import { Modal } from "./modal.js"
/****Variaveis****/
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let buttonCalculate = document.querySelector("#calculate")
let buttonClose = document.querySelector("#btnClose")
export let calcIMC = ""


/*****Ouvidor de eventos*****/
buttonCalculate.addEventListener("click",calculator)
buttonClose.addEventListener("click",btnClose)


function btnClose(){
    Modal.close()
}


function calculator(event){
    event.preventDefault()

    weight = document.querySelector("#weight")
    height = document.querySelector("#height")
    calcIMC = ((weight.value / (height.value**2))*10000).toFixed(1)
    Modal.h2.innerHTML = `Seu IMC é de ${calcIMC}`
    checker()
}


function checker() {
    if (weight.value.includes(",") || weight.value.includes(".")) {
        errorBar()

    }else if (height.value.includes(",") || height.value.includes(".")) {
        errorBar()

    }else{
        Modal.open()
        Modal.classification()
        reset()
    }
}


function errorBar(){
    alertError.classList.remove("close")
    alertError.classList.add("open")
}


function reset(){
    weight.value = ""
    height.value = ""
    let alertError= document.querySelector("#alertError")
    if (alertError.classList.contains("open")) {
        alertError.classList.remove("open")
        alertError.classList.add("close")
    }
}


window.addEventListener("keydown", handleKeydown)
function handleKeydown(event){
    if( event.key ==="Enter"){
        checker()
    }
}

