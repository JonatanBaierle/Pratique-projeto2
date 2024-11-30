
const adicionar = document.getElementById('form');

let linhas = '';

adicionar.addEventListener ('submit', function(e){
    e.preventDefault();

    const addNome = document.getElementById('add-nome').value;
    const addNumero = document.getElementById('add-numero').value;

    let linha = `<tr><td>${addNome}</td>`;
    linha += `<td>${addNumero}</td></tr>`;
    linhas += linha;

    const tablela = document.querySelector('tbody');
    tablela.innerHTML = linhas;
})