   function contar() {
      let ini = document.getElementById("inicio")
      let final = document.getElementById("fim")
      let pas = document.getElementById("passo")
      let res = document.getElementById("res")

      res.innerHTML = 'sim '
      if (ini.value.length == 0 ||final.value.length == 0 ||pas.value.length == 0){
         window.alert('Falta dados')
         res.innerHTML = "Impossivel contar!"
      } else {
         res.innerHTML = "contando: <br> "
         let i= Number(ini.value)
         let f= Number(final.value)
         let p= Number(pas.value)
         if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1 ')
            p =1
         }

         if (i<f){
            //contagem crescente
            for(let c =i; c <= f; c+= p){
               res.innerHTML += `${c} ⏩ \u{1f449}`
            }
         
         }else {
            //contagem regressiva
            for (let c = i; c >=f; c-=p) {
               res.innerHTML += `${c} \u{1f449}`
            }
         }
         res.innerHTML +=`\u{1f3c1}`
      }
   }