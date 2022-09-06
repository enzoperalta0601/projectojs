var divisas = [
 {
  nombre: "Dólares",
  id: "dolar",
  cotizacion: 300,
 },
 {
  nombre: "Euros",
  id: "euro",
  cotizacion: 315,
 },
 {
  nombre: "Libras",
  id: "libra",
  cotizacion: 345,
 },
];

let formulario = document.querySelector(".opciones");

for (const divisa of divisas) {
 formulario.innerHTML =
  formulario.innerHTML +
  `<div class="form_group">
        <input type="radio" name="moneda" id="${divisa.id}" value="${divisa.id}">
        <label for="${divisa.id}">${divisa.nombre}</label>
    </div>`;
}

// Boton para ejecutar funcion
document.querySelector("#aplicarPesos").addEventListener("click", conversor);

function conversor(e) {
 e.preventDefault();
 let pesos = "";
 let moneda = "";

 // Obtener divisa elegida por usuario
 for (const divisa of divisas) {
  if (document.querySelector("#" + divisa.id).checked == true) {
   montodivisa = divisa.cotizacion;
   moneda = divisa.nombre;
  }
 }

 // Obtener monto en pesos que ingresó el usuario
 pesos = document.querySelector("#pesos").value;

 // Aplicar el resultado
 document.querySelector("#resultado").value = pesos / montodivisa;
 document.querySelector(".moneda").innerHTML = moneda;
}
