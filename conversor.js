// Contruir select
var page_status = "cargandopagina";
const formulario = document.querySelector("#conversor");
const selectdivisa = document.querySelector("#divisa");
const inputpesos = document.querySelector("#pesos");
const resultado = document.querySelector(".total");
const textomoneda = document.querySelector("#resultado .textomonedaresultado");
const nombremoneda = document.querySelector(".nombremoneda");

const divisaguardada = localStorage.getItem("divisa");

// Obtener divisas API y cargarlo al select
var myHeaders = new Headers();
myHeaders.append("apikey", "FbYjBvoHfRufZvFXUjTReqaq7p0TdU8S");

var requestOptions = {
 method: "GET",
 redirect: "follow",
 headers: myHeaders,
};

var divisas = [];
fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
 .then((response) => response.text())
 .then((result) => {
  let resultadofetch = JSON.parse(result);
  divisas = resultadofetch.symbols;

  for (let divisa in divisas) {
   let selected = "";
   if (divisaguardada == divisa) {
    selected = "selected";
   }
   selectdivisa.innerHTML =
    selectdivisa.innerHTML +
    `<option value="${divisa}" ${selected}>${divisas[divisa]}</option>`;
  }
  page_status = "cargado";
 })
 .catch((error) => {
  page_status = "Error: " + error;
 });

inputpesos.value = 0;

// Conversor
function conversor(event) {
 event.preventDefault();
 $(".btn").addClass("cargando");

 let current_divisa = selectdivisa.options[selectdivisa.selectedIndex].value;

 let current_pesos = parseFloat(inputpesos.value) || 0;

 if (current_divisa !== "") {
  localStorage.setItem("divisa", current_divisa);

  if (inputpesos.checkValidity() == false) {
   inputpesos.value = 0;
   Toastify({
    text: "Ingresá sólo números",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
     background: "linear-gradient(to right, #ED213A, #93291E)",
    },
   }).showToast();
  } else {
   fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=" +
     current_divisa +
     "&from=ARS&amount=" +
     current_pesos,
    requestOptions
   )
    .then((response) => response.text())
    .then((result) => {
     let resultadofetch = JSON.parse(result);
     resultado.innerHTML = resultadofetch.result;
     textomoneda.innerHTML = current_divisa;
     $(".btn").removeClass("cargando");
     $(".resultado_final").css("display", "block");
    })
    .catch((error) => {
     page_status = "Error: " + error;
    });
  }
 } else {
  Toastify({
   text: "Ingresá primero una divisa para hacer la conversión",
   duration: 3000,
   close: true,
   gravity: "top",
   position: "right",
   stopOnFocus: true,
   style: {
    background: "linear-gradient(to right, #ED213A, #93291E)",
   },
  }).showToast();
 }
}

function nopermitirnumeros(event) {
 if (inputpesos.checkValidity() == false) {
  inputpesos.value = 0;
  Toastify({
   text: "Ingresá sólo números",
   duration: 3000,
   close: true,
   gravity: "top",
   position: "right",
   stopOnFocus: true,
   style: {
    background: "linear-gradient(to right, #ED213A, #93291E)",
   },
  }).showToast();
 }
}

// Add event listener
formulario.addEventListener("submit", conversor);
inputpesos.addEventListener("keyup", nopermitirnumeros);

// Conseguir tabla de latest rates

fetch(
 "https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR,GBP,AED,BRL,CAD,JPY,CNY&base=ARS",
 requestOptions
)
 .then((response) => response.text())
 .then((result) => {
  let json = JSON.parse(result);

  $(".fecha").html(json.date);

  let rates = json.rates;

  for (let rate in rates) {
   $(".valores").append(
    `<tr><th scope="row" data-rate="${rate}">${rate}</th><td data-rate="${rate}">${rates[rate]}</td></tr>`
   );
  }
  $("#loader").fadeOut();
 })
 .catch((error) => console.log("error", error));
