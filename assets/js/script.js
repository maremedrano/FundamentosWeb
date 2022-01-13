// Por tag: getElementByTagName()
// Por ID: getElementByTagName()
// Por nome: getElementsByTagName()
// Por classe: getElementsByClassName()
// Por seletor: querySelector()

let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let mensagem = window.document.getElementById('mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false


// Validação Nome

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido.'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido.'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}


// Validação Email

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido.'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}


// Validação Nome

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = 'Texto muito grande. (Máx: 100 caracteres)'
        txtMensagem.style.color = 'red'
    } else {
        txtMensagem.innerHTML = 'Texto válido'
        txtMensagem.style.color = 'green'
        mensagemOk = true
    }
}


// Enviar

function enviar(){
    if (nomeOk == true && emailOk == true && mensagemOk == true){
    alert('Formulário enviado com sucesso!')
    } else {
    alert('Preencha o formulário corretamente antes de enviar.')
    }
}