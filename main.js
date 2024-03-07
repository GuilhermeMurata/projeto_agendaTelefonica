const form = document.getElementById('form-cadastro');
const nome = [];
const numero = [];
let linha = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato').value;
    const inputNumeroContato = document.getElementById('numero-contato').value;

    if (nome.includes(inputNomeContato)) {
        alert(`Contato ${inputNomeContato} ja cadastrado`);
    } else {
        nome.push(inputNomeContato);
        numero.push(parseFloat(inputNumeroContato));
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');

    for (let i = 0; i < nome.length; i++) {
        linha += '<tr>';
        linha += '<td>${nome[i]}<td>';
        linha += '<td>${numero[i]}<td>';
        linha += '</tr>';
    }

    corpoTabela.innerHTML = linha;
}