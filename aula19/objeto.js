let amigo = {nome: 'gabriel',
sexo: 'M',
peso: 70.0,
engordar(p){
    console.log('Engordar')
    this.peso += p
}
    
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)