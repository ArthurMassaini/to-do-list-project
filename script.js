let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let listaOrdenada = document.querySelector('#lista-tarefas');

function adicionarItemLista() {
  let itemLista = criaItemLista('item');
  listaOrdenada.appendChild(itemLista);
  itemLista.innerHTML = input.value;
  input.value = '';
}

function criaItemLista(className) {
  let itemLista = document.createElement('li');
  itemLista.className = className;
  return itemLista;
}

button.addEventListener('click', adicionarItemLista);

//-----------------------------------------------------------------//


document.addEventListener('click', function (event) {
  if (event.target.classList.contains('item')) {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
  }
});
