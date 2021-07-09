


var qs = (e) => document.querySelector(e);
var qsa = (e) => document.querySelectorAll(e);




var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");




////////FUNÇAO QUE CRIA O ALFABETO CIFRADO//////////////////////////////////////////////////////////////
alfabetoarray.map((elemento,index) =>{
    let letraalfabeto = qs(".container-models .letras-descrip").cloneNode(true);
    letraalfabeto.innerHTML = elemento;
    qs(".alfabeto-1").append(letraalfabeto);
      letraalfabeto.addEventListener('click',(e)=>{
       e.preventDefault();
         qs(".alfabeto").innerHTML = "";
          chave = index;
            alfabetoarray.map((elemento,index) =>{
              if(index+chave <0){
                novaletra =  ((index - chave  )% alfabetoarray.length)
              } else{
                  novaletra = ((index + chave) % alfabetoarray.length)
                }
                  let letraalfabeto = qs(".container-models .letras-crip").cloneNode(true);
                    letraalfabeto.innerHTML = alfabetoarray[parseInt(novaletra)];
                      qs(".alfabeto").append(letraalfabeto);
            })
      })
        
});


/////////////FUNÇAO QUE CRIPTOGRAFA OU DISCRIPTOGRAFA  E EXIBE O RESULTADO/////////////////////////////////
qs("button").addEventListener("click",(e) => {
  e.preventDefault();
  let frasearray = qs("#input-cod").value.split("");
  let frasedescrip = [];
  let frasecrip = [];
  let opçao = qsa("#opçao");
      
      if(opçao[0].checked == true){
        
        frasearray.map((elemento,index) =>{
          let elementoindex =parseInt(alfabetoarray.indexOf(elemento));
            endereço = ((elementoindex - chave) % alfabetoarray.length)
              if(elementoindex == -1){
                frasedescrip += elemento
              }else{
                  if(endereço <0){
                    endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)
                  }
                  if(endereço > alfabetoarray.length){
                    endereço = alfabetoarray.length + endereço
                  }
                    frasedescrip += alfabetoarray[endereço];
                }
          })
          
                let resultadodescrip = qs(".mensagem-resultado")
                  resultadodescrip.innerHTML = frasedescrip;
                 
        };

      if(opçao[1].checked == true){  
         
        frasearray.map((elemento,index) =>{
          let elementoindex =parseInt(alfabetoarray.indexOf(elemento)); 
            endereço = ((elementoindex + chave) % alfabetoarray.length)
              if(elementoindex == -1){
                frasecrip += elemento
              } else{
                  if(endereço <0){
                    endereço = (((elementoindex + chave )% alfabetoarray.length) +alfabetoarray.length)
                  }
                  if(endereço > alfabetoarray.length){
                   endereço = alfabetoarray.length - endereço
                  }
                    frasecrip += alfabetoarray[endereço];
                }
        })
        
        var resultadocrip = qs(".mensagem-resultado")
        resultadocrip.innerHTML = frasecrip;
        
      }
      
});
////////////////////////////////////APENAS PARTE LOGICA//////////////////////////////////////////////////////////////////////

/*var chave = parseInt(prompt("chave"));
var frasearray = prompt("frase").split("")
var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");
var frasecrip = [];
var frasedescrip = [];
var alfabetocrip = [];
///////////////////////////////////////////////////////

// ENCRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento)); 
   endereço = ((elementoindex + chave) % alfabetoarray.length)
    if(elementoindex == -1){
      frasecrip += elemento
    }else{
      if(endereço <0){
      endereço = (((elementoindex + chave )% alfabetoarray.length) +alfabetoarray.length)
      }
      if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length - endereço
   }
  frasecrip += alfabetoarray[endereço];
}
})
//DECRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento));
  endereço = ((elementoindex - chave) % alfabetoarray.length)
  if(elementoindex == -1){
    frasedescrip += elemento
  }
  else{
    if(endereço <0){
    endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)
  }
    if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length + endereço
  }
  frasedescrip += alfabetoarray[endereço];
}
})
//ALFABETO CRIPTOGRAFADO
alfabetoarray.map((elemento,index) =>{
  if(index+chave <0){
    novaletra =  ((index - chave  )% alfabetoarray.length)
  }else{
    novaletra = ((index + chave) % alfabetoarray.length)
  }
  alfabetocrip.push(alfabetoarray[parseInt(novaletra)]);
});
console.log(frasecrip);
console.log(frasedescrip);
console.log(alfabetocrip);
*/
