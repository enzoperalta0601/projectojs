/*funciones
function solicitarnombre();{
    let nombre = prompt("ingrese su nombre");
    console.log(`el nombre del ususario es: ${nombre}`);
}
solicitarnombre();

*/

/*
function saludar(nombre = "desconocido", apellido =""){
    console.log(`hola ${nombre} ${apellido}`);
}
saludar("enzo", "peralta");
*/
/*
let numero1 = 0
let numero2 = 0

function calculadora(numero1, numero2, operacion){
    switch(operacion){
        case "+":
        return numero1 + numero2;
        break;
        case "-":
        return numero1 - numero2;
        break;
        case "/":
        return numero1 / numero2;
        break;
        case "*":
            return numero1 * numero2;
            break;


    }
}
alert(calculadora(20, 30, "*"))

// variable global vs variable local
let mensaje = "mensaje de prueba"
function crearmensaje(){
   
}
alert(mensaje);



iniciarapp()
function iniciarapp(){
    alert("iniciando la app....")
    segundafuncion()
}
function segundafuncion(){
    alert("desde la segunda funcion")
    usuarioautenticado()
}
function usuarioautenticado (){
    alert("autenticando usuario, espere...")
    alert("usuario autenticado exitosamente")
}
*/
// funciones flechas
/*const aprendiendo = () =>"aprendiendo....";
console.log(aprendiendo());
*/
//funciones anonimas o lambda
 /*const saludo = function (){
    return " hola"; };
    console.log(saludo());
*/
let producto = function(a,b){
    return a*b;
};
let resultado = producto(3,6);
console.log(resultado);


