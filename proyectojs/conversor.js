// Código nuevo
var divisas = [
 {
  id: 0,
  nombre: "Dólares",
  simbolo: "USD",
  cotizacion: 300,
 },
 {
  id: 1,
  nombre: "Euros",
  simbolo: "EUR",
  cotizacion: 315,
 },
 {
  id: 2,
  nombre: "Libras",
  simbolo: "GBP",
  cotizacion: 345,
 },
];

// Contruir select
const selectdivisa = document.querySelector("#divisa");
const inputpesos = document.querySelector("#pesos");
const inputotramoneda = document.querySelector("#otramoneda");
const textomoneda = document.querySelector(
 ".otramoneda_container .textomoneda"
);
const nombremoneda = document.querySelector(".nombremoneda");

for (let divisa of divisas) {
 selectdivisa.innerHTML =
  selectdivisa.innerHTML +
  `<option value="${divisa.id}">${divisa.nombre}</option>`;
}

inputpesos.value = 0;
inputotramoneda.value = 0;

// Conversor
function conversor(event) {
 let current_divisa = selectdivisa.options[selectdivisa.selectedIndex].value;
 let current_pesos = parseFloat(inputpesos.value) || 0;
 let current_otramoneda = parseFloat(inputotramoneda.value) || 0;

 if (current_divisa !== "") {
  let current_cotizacion = divisas[current_divisa].cotizacion;
  let current_simbolo = divisas[current_divisa].simbolo;
  let current_nombre = divisas[current_divisa].nombre;

  nombremoneda.innerHTML = current_nombre;

  console.log(current_pesos);
  if (
   inputpesos.checkValidity() == false ||
   inputotramoneda.checkValidity() == false
  ) {
   Toastify({
    text: "Ingresá sólo números",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
     background: "linear-gradient(to right, #ED213A, #93291E)",
    },
   }).showToast();
  } else {
   if (event.target.id == "pesos") {
    inputotramoneda.value = current_pesos / current_cotizacion;
   } else if (event.target.id == "otramoneda") {
    inputpesos.value = current_otramoneda * current_cotizacion;
   } else if (event.target.id == "divisa" && current_pesos !== "") {
    inputotramoneda.value = current_pesos / current_cotizacion;
    textomoneda.innerHTML = current_simbolo;
   }
  }
 } else {
  Toastify({
   text: "Ingresá primero una divisa para hacer la conversión",
   duration: 3000,
   close: true,
   gravity: "top",
   position: "center",
   stopOnFocus: true,
   style: {
    background: "linear-gradient(to right, #ED213A, #93291E)",
   },
  }).showToast();
 }
}

// Add event listener
selectdivisa.addEventListener("change", conversor);
inputpesos.addEventListener("keyup", conversor);
inputotramoneda.addEventListener("keyup", conversor);
