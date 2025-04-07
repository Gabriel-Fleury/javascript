function parimpar(n){
    if(n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

let res = parimpar(4)
console.log(res)

// ------------------------------

function soma(n1=0, n2=0){ // se o n1 ou n2 n for apssado é considerado 0
    return n1 + n2
}

console.log(soma( 5))