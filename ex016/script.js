function Contar () {
    var num1 = document.getElementById('numx')
    var num2 = document.getElementById('numx2')
    var num3 = document.getElementById('numx3')
    var res = document.getElementById('res')
    
    if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando : <br>'
        var i = Number(num1.value)
        var f = Number(num2.value)
        var p = Number(num3.value)
        if (p <= 0) {
            window.alert('Passo Inválido!')
            p = 1
        }
        if (i < f){
            // Contagem crescente ..
          for(var c = i; c <= f; c += p) {
             res.innerHTML += `${c}  \u{2714}`
          }
        } else {
            // Contagem regressiva ..
            for(var c = i; c >= f; c -= p)
               res.innerHTML += `${c}  \u{2714}`
        }
    }
   
}
 
