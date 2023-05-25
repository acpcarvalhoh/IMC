/* Variáveis */
const form = document.querySelector('form')
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
const modal = document.querySelector('.modal-wrapper')
const closeM = document.querySelector('.close')


/* Eventos */
form.addEventListener('submit', sbtForm)
closeM.addEventListener('click', closeModal)


/* Funções */
function sbtForm(event){
    event.preventDefault()
    let result =  IMC(weight.value, height.value)
    let h2 = modal.querySelector('span')

    h2.innerHTML = `Seu IMC é de ${result}`

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

function toogleScreen(){
    modal.classList.toggle('open')
}