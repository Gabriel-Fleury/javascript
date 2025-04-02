var idade = 87
console.log(`Voce tem ${idade} anos`)
if(idade < 16){
    console.log('Nao vota')
} else if(idade < 18 || idade > 65){/*  se a idade for menor que 18 e maior ou igual a 16 ou acima de 65*/
        console.log('Voto opcional')
    
} else {
    console.log('Voto obrigatorio')
}