
//Regras do JS

//- CaseSentitive (nome / Nome)
//- Não usa tipagem de dados
//- Compilado pelo navegador


//Decalação das variáveis

//var nome = 'Mariana' -> modelo antigo
//let nome = "Mariana" -> variáveis que podem ser modificadas
//const nome = "Mariana" -> variáveis que não sofrem alterações


//Uso da DOM

let nome = document.getElementById('nome')
//document.queryselector()

function validarNome() {
    if (nome.value.length > 3) {
        alert('Nome tá legal já')
    } else {
console.log('digite mais')
    }
}

if (nome.value.lenght > 3) {
    texto.innerHTML = 'Tamanho já ta bom'
    texto.style.color = 'green'
} else {
    texto.innerHTML = 'Nome precisa ser maior'
    texto.style.color = 'red'
}
}



dentro da tag nome onkeyup
<input type"text" id="nome" onkeyup='validarnome()'