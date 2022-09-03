var cotizacionDolar = 300;
var cotizacionEuro = 315;

//
document.querySelector("#aplicarPesos").addEventListener("click", conversor);

function conversor(e) {
 e.preventDefault();
 let pesos = "";
 let moneda = "";

 // Obtener divisa elegida por usuario
 if (document.querySelector("#dolar").checked == true) {
  montodivisa = cotizacionDolar;
  moneda = "Dólares";
 } else if (document.querySelector("#euro").checked == true) {
  montodivisa = cotizacionEuro;
  moneda = "Euros";
 }

 // Obtener monto en pesos que ingresó el usuario
 pesos = document.querySelector("#pesos").value;

 // Aplicar el resultado
 document.querySelector("#resultado").value = pesos / montodivisa;
 document.querySelector(".moneda").innerHTML = moneda;
}
