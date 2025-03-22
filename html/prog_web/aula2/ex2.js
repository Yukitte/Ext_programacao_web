// define a contagem como zero
let cont = 0

const cont_bt =document.getElementById("contador")//define o contador como constante
document.getElementById("b_incrementar").addEventListener('click',()=>{
    cont++;
    cont_bt.textContent = cont;
})
document.getElementById("b_decrementar").addEventListener('click',()=>{
    //adiciona um evento para o botao decrementar e abre uma funçao
    if(cont > 0){
        cont --;//decrementa
        cont_bt.textContent = cont//mostra o decremento  
    }else{
        alert("Contador menor que zero")
    }
})

const letra_js = document.getElementById('campo_txt')
const texto_js = document.getElementById("letras")


document.getElementById("b_reset").addEventListener('click',()=>{
    cont = 0 
    cont_bt.textContent 
    
})

