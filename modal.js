import { calcIMC } from "./script.js"
export const Modal = {
    divmodal:document.querySelector("#modal"),
    h2: document.querySelector("#modal h2"),
    span: document.querySelector("#modal span"),


    open(){
        this.divmodal.classList.remove("close")
        this.divmodal.classList.add("open")
    },

    close(){
        this.divmodal.classList.remove("open")
        this.divmodal.classList.add("close")
    },

    
    classification(){
        this.h2.innerHTML = `Seu IMC é de ${calcIMC}`

        if(calcIMC < 18.5){
            this.span.innerHTML = `Você está abaixo do peso, procure um médico ou nutricionista.`
        } else if(calcIMC >= 18.5 && calcIMC < 25) {
            this.span.innerHTML = `Você está no peso ideal.`
        } else if(calcIMC >= 25 && calcIMC <= 30) {
            this.span.innerHTML = `Você está Obeso, reduza a ingestão de calorias.`
        } else if(calcIMC > 30) {
            this.span.innerHTML = `Você está com obesidade mórbida, procure um médico imediatamente.`
        }
    }

}

window.addEventListener("keydown", handleKeydown)
function handleKeydown(event){
    if( event.key ==="Escape"){
        Modal.close()
    }
}
    