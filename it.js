
var   button1 = document.querySelector('.js1');
var   button = document.querySelector('.js');
console.log(button);
var   h1 = document.querySelector('.h1');
let licznik = 0;
h1.innerHTML = licznik;
button.onclick = function (){
  if (licznik!=50){
    licznik++;
    h1.innerHTML = licznik;
  }
}
button1.onclick = function (){
  licznik--;
  h1.innerHTML = licznik;
}
