function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Se algum campo não tiver número, dá erro
        res.innerHTML = 'Impossivel Contar'
        window.alert(`[ERRO] Faltam dados!`);
        
    } else {
        res.innerHTML = 'Contando: <br>'; // Se os dados estiverem certos, ele muda para esta linha
        let i = Number(ini.value); // Converte o valor de ini para número
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
    
        if (i < f) { // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`; // Adiciona o número seguido do emoji
            }
        } else { // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`; // Adiciona o número seguido do emoji
            }
        }
        res.innerHTML += `\u{1F3C1}`; // Adiciona uma bandeira no final
    }
}