 

function resultado(){
 //  CORES QUENTES--------
  var vermelho = 0;
  var laranja  = 0;
  var amarelo  = 0;
  // CORES FRIAS----------
  var azul     = 0;
  var verde    = 0;
  var branco   = 0;
//CORES APAGADAS----------
  var preto    = 0;
  var marrom   = 0;
  var cinza    = 0;
 

   let q1 =   document.querySelectorAll(".q1");
   let q2 =   document.querySelectorAll(".q2");
   let q3 =   document.querySelectorAll(".q3");
   let q4 =   document.querySelectorAll(".q4");
   let q5 =   document.querySelectorAll(".q5");

// QUESTAO  1 ------------------------------------
  if(q1[0].checked || q1[1].checked == true){
    azul++;
    verde++;
    branco++;
    preto++;
    marrom++;
    cinza++;
    
  }
  
    if(q1[2].checked || q1[3].checked == true){
        vermelho=2;
        laranja=2;
        amarelo=2;
    }
// QUESTAO 2 ------------------------------------
     if(q2[0].checked || q2[1].checked == true){
         azul++;
         verde++;
         branco++;
      }
       if(q2[2].checked || q2[3].checked == true){
        preto++;
        marrom++;
        cinza++;
      }
//QUESTAO 3---------------------------------------
         if(q3[0].checked == true){
          amarelo++;
          }
          if(q3[1].checked == true){
          laranja ++;
          
          }if(q3[2].checked == true){
          vermelho ++;
          
          }if(q3[3].checked == true){
          cinza ++;
          
          }
         
//QUESTAO 4 ----------------------------------------------
               if(q4[0].checked  == true){
                verde ++;
               } if(q4[1].checked  == true){
                azul ++;
               } if(q4[2].checked  == true){
                branco ++;
               } if(q4[3].checked  == true){
                
               }
                
//QUESTAO 5 --------------------------------------------------
                if(q5[0].checked ){
                     preto ++;
          
                 }
                 if(q5[1].checked ){
                     marrom ++;
          
                 }
                
                 if(q5[3].checked ){
                     cinza++;
                      
                }

var cores = [vermelho,laranja,amarelo,azul,verde,branco,preto,marrom,cinza];
 var maiorv = Math.max.apply(Math,cores);
 

 let form = document.querySelector(".container-quest");
    let resultado = document.querySelector(".resultado");//VERMELHO
    let resultado1 = document.querySelector(".resultado1");//LARANJA
    let resultado2 = document.querySelector(".resultado2");//AMARELO
    let resultado3 = document.querySelector(".resultado3");//AZUL
    let resultado4 = document.querySelector(".resultado4");//VERDE
    let resultado5 = document.querySelector(".resultado5");//BRANCO
    let resultado6 = document.querySelector(".resultado6");//PRETO
    let resultado7 = document.querySelector(".resultado7");//MARROM
    let resultado8 = document.querySelector(".resultado8");//CINZA
    let buttonfinalizar = document.querySelector(".button-resultado");


if (maiorv != 0){  // FILTRO DE RESULTADO

if(cores.indexOf(maiorv) == 0){
  //VERMELHO
   form.style.display = "none";
    resultado.style.display = "flex";
    buttonfinalizar.style.display = "none";

}
if(cores.indexOf(maiorv) == 1){
  //LARANJA
   form.style.display = "none";
    resultado1.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 2){
  //AMARELO
   form.style.display = "none";
    resultado2.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 3){
  //AZUL
   form.style.display = "none";
    resultado3.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 4){
  //VERDE
   form.style.display = "none";
    resultado4.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 5){
  //BRANCO
   form.style.display = "none";
    resultado5.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 6){
  //PRETO
   form.style.display = "none";
    resultado6.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 7){
  //MARROM
   form.style.display = "none";
    resultado7.style.display = "flex";
    buttonfinalizar.style.display = "none";
}
if(cores.indexOf(maiorv) == 8){
  //CINZA
   form.style.display = "none";
    resultado8.style.display = "flex";
    buttonfinalizar.style.display = "none";
}

}
}


    
    

    
 
    


