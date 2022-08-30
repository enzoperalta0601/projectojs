let edad= prompt("ingresa tu edad");
let nombre= prompt("ingresa tu nombre") ;
if (edad>=18) {
  //es mayor de edad
alert(nombre+" tienes "+edad+" años, eres mayor de edad");

  if (edad <=33) {
    alert("todavia eres millenial");
      }else if (edad >=70) {
      alert("eres un anciano");
    }else {
    alert("ya no eres millenial");
    }
  //menor de edad
}else {
  alert(nombre+" tiene "+edad+" años, es menor de edad");
}10