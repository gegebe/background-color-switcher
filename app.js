// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

////////////////////////////////////////
//// Con target y parámetros
////////////////////////////////////////

// document.addEventListener("click", function(event){
//   //let backGrey = document.querySelector("#grey").id;
//   //.target devuelve el objeto en el que se ha hecho clic
//   let colour;
//   colour = event.target.id;
//   console.log(colour);
//   body.style.backgroundColor = colour; 
// }) 

////////////////////////////////////////
//// Recorriendo los buttons con forEach
////////////////////////////////////////

buttons.forEach (function(button){
  button.addEventListener("click", function(evento){
    let color;
    color = evento.target.id;
    console.log(color);
    body.style.backgroundColor = color;
  })
})
