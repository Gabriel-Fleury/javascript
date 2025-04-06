let valores = [1, 5, 3, 6, 7, 8, 43,]
valores.sort()
/* for(let pos = 0; pos < valores.length; pos++){
    console.log(`Aposiçao ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}