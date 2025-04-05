function tabuada() {
    // Obtém os elementos HTML:
    let num = document.getElementById('txtn'); // Elemento onde o usuário insere o número.
    let tab = document.getElementById('seltab'); // Elemento da lista suspensa para mostrar os resultados.

    // Verifica se o campo de entrada está vazio:
    if (num.value.length == 0) { // Se o valor não foi digitado...
        window.alert('Por favor, digite um número'); // Mostra uma mensagem de alerta ao usuário.
    } else { // Se o valor foi digitado corretamente:
        let n = Number(num.value); // Converte o valor digitado para um número e o armazena na variável 'n'.
        let c = 1; // Inicializa a variável 'c', que será usada como contador.
        tab.innerHTML = ''; // Limpa o conteúdo anterior da lista suspensa para evitar resultados acumulados.

        // Laço de repetição para criar os resultados da tabuada:
        while (c <= 10) { // Enquanto o contador 'c' for menor ou igual a 10:
            let item = document.createElement('option'); // Cria um novo elemento <option> para a lista.
            item.text = `${n} x ${c} = ${n * c}`; // Define o texto do item com o cálculo da tabuada.
            item.value = `tab${c}`; // Define o atributo 'value' do item (opcional, usado para identificação).
            tab.appendChild(item); // Adiciona o item à lista suspensa.
            c++; // Incrementa o contador 'c' para avançar para o próximo número.
        }
    }
}