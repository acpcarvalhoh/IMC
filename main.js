/* Variáveis */
const form = document.querySelector('form')
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
const modal = document.querySelector('.modal-wrapper')
const closeM = document.querySelector('.close')
const erroMessage = document.querySelector('.alert-error')
const btnSubmit = form.querySelector('button')


/* Eventos */
form.addEventListener('submit', sbtForm)
closeM.addEventListener('click', closeModal)
weight.addEventListener('input', alertError)
height.addEventListener('input', alertError)



/* Funções */
function sbtForm(event){
    event.preventDefault()
    const imc =  IMC(weight.value, height.value)
    const IMCmessage = modal.querySelector('span')
    
    const disabledButton = weight.value == '' || height.value == ''
    if(disabledButton){
        console.log(disabledButton)
        return
        
    }
    
    IMCmessage.innerHTML = `Seu IMC é de ${imc}`
    toogleScreen()
}



function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function closeModal(){
   toogleScreen()
   weight.value = ''
   height.value = ''
}


function alertError(){
    if(isNaN(weight.value) || isNaN(height.value)){
        erroMessage.classList.add('error-message')
        btnSubmit.disabled = true
    }else{
        erroMessage.classList.remove('error-message')
        btnSubmit.disabled = false
    }
}

function toogleScreen(){
    modal.classList.toggle('open')
}