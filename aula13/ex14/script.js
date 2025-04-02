function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var horas = data.getHours() 
    
    msg.innerHTML = `Agora sao ${horas} horas`
    if(horas >= 0 && horas < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#82abbf'
    } else if (horas >= 12 && horas < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#775c31'
    } else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#322c31'
    }
}
    
