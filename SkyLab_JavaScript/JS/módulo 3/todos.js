var listElements = document.querySelector('#app ul');
var inputElements = document.querySelector('#app input');
var btnElements = document.querySelector('#app button');

//var todos = [
//    'Fazer café',
//    'Estudar JavaScript',
//    'Acessar comunidade Rocketseat'
//;  // em vez de fazer a lista com <li> no html, fazer no js

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    listElements.innerHTML = ''; // innerHTML tudo o que estiver dentro da ul vai estar vazio

    for(todo of todos) {  // for especifico para arrays

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');

        var position = todos.indexOf(todo); // mostrar a posição do todo
        linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')'); // concatenação de string

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElements.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElements.value; // valor da input
    todos.push(todoText); // função do array pra adicionar um nova linha abaixo
    inputElements.value = '';

    renderTodos();
    saveToStorage();
}

btnElements.onclick = addTodo;

function deleteTodo(position){
    todos.splice(position, 1); // splice deleta um elemento de um array baseado na sua posição
                // a partir da posição que receber como parametro, remove 
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    //JSON // TEM A estrutura parecida com a de objeto, mas é uma string - usado para web
    localStorage.setItem('list_todos', JSON.stringify(todos)); // vai setar o valor no storage
                            // não grava vetores e nem objetos, só strings
}