let ingresarCantidad = Number(prompt("Ingrese una cantidad:"));
let ingresados = '';

while (isNaN(ingresarCantidad) === true) {
    ingresados += ingresarCantidad +"\n";
    ingresarCantidad = prompt("Ingrese una cantidad:");
}
let dolar = 292;
let euro = 310;

function conversor(ingresarCantidad, elegirMoneda) {
   

    if (elegirMoneda === "dolar") {
        return ingresarCantidad / dolar;
    } else if (elegirMoneda === "euro"){
        return ingresarCantidad / euro;
    }
    imprime(resultado)
}