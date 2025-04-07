function fatorial(n){
    let fat = 10
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(10))