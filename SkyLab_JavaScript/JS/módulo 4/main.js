// AJAX - requisição assincrona que realiza algum back-end (requisição do servidor sem atualizar a página)

// PROMISES - códigos que não vão influenciar na linha do tempo do código (funções que devolver resultados depois de um tempo)

var minhaPromise = function(){
    return new Promise(function(resolve, reject) { // a function dentro da function é um padrão
        var xhr = new XMLHttpRequest(); // dá acesso à funcionalidade do AJAX para recurar informações do servidor

        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4) { // variavel de quando a resposta volta pra gente
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    }); // resolve quando obteve um resultado de sucesso e reject quando não foi de sucesso
}

// metodos = get, post, put e delete
axios.get('https://api.github.com/users/diego3g')  // axios retorna mais facil
    .then(function(response) {
        console.log(response); // chama o resultado de sucesso 
    })
    .catch(function(error) {
        console.warn(error);
    });