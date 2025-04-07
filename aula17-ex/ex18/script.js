// Seleciona o campo de entrada de número pelo ID 'fnum'
let num = document.querySelector('input#fnum');

// Seleciona o elemento <select> pelo ID 'flista'
let lista = document.querySelector('select#flista');

// Seleciona a <div> que exibirá os resultados, pelo ID 'res'
let res = document.querySelector('div#res');

// Declara um array vazio para armazenar os números adicionados
let valores = [];

// Função que verifica se um número está entre 1 e 100
function isNumero(n) {
    // Se o número estiver no intervalo válido, retorna true
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        // Caso contrário, retorna false
        return false;
    }
}

// Função que verifica se um número já está na lista
function inLista(n, l) {
    // Verifica se o número (convertido para Number) existe no array 'l'
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        // Caso não exista na lista, retorna false
        return false;
    }
}

// Função que adiciona o número ao array e ao <select>
function adicionar() {
    // Verifica se o número é válido e não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o número ao array 'valores'
        valores.push(Number(num.value));

        // Cria um novo elemento <option> para o <select>
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado`; // Define o texto do <option>
        lista.appendChild(item); // Adiciona o <option> ao <select>

        // Limpa os resultados anteriores exibidos
        res.innerHTML = '';
    } else {
        // Exibe um alerta caso o número seja inválido ou duplicado
        window.alert('Valor inválido ou já encontrado na lista.');
    }

    // Limpa o campo de entrada e coloca o cursor nele
    num.value = ''; 
    num.focus(); 
}

// Função que finaliza a análise e exibe os resultados
function finalizar() {
    // Verifica se o array 'valores' está vazio
    if (valores.length == 0) {
        // Exibe um alerta pedindo para adicionar valores antes de finalizar
        window.alert('Adicione valores antes de finalizar');
    } else {
        // Calcula o total de números cadastrados
        let tot = valores.length;

        // Define o maior e menor número inicialmente como o primeiro elemento do array
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0; // Variável para somar todos os números
        let media = 0; // Variável para calcular a média

        // Percorre o array 'valores' para fazer os cálculos
        for (let pos in valores) {
            soma += valores[pos]; // Soma cada número do array
            if (valores[pos] > maior) maior = valores[pos]; // Atualiza o maior valor, se necessário
            if (valores[pos] < menor) menor = valores[pos]; // Atualiza o menor valor, se necessário
        }

        // Calcula a média dos números
        media = soma / tot;

        // Exibe os resultados na <div> 'res'
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}