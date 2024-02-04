/*
 en un principio era asi y se metio dentro de la funcion asignar texto para hacerla generica

let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero Secreto";

en un principio era asi y lo generizamos todo mas abajo

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10 ?';

esta fue la primera funcion que cambiaba el titulo del juego pero no era generica

function asignarTextoElemento() {
    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Juego del numero Secreto";
}
*/

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  // Lamado del querySelector que nos ayudas a modificar el documento html
    elementoHTML.innerHTML = texto;              // asi modificamos el texto con el llamado de la clase
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    // console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario ===  numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario ===  numeroSecreto){
        asignarTextoElemento('p',`Acertaste numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
       if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
       } else {
            asignarTextoElemento('p','El numero es mayor');      
       }
       intentos++;
       limpiarCaja();
    }
    return;
}

/*
esto es lo mismo que abajo pero super resumido

function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';


*/

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value= '';
}

/* esto es lo mismo que abajo pero super resumido

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}
*/

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    // si ya se sortearon todos los numeros posibles hacemos
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
        // si el numero generado esta en la lista hacer:
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto ();
        } else {
             listaDeNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
    }

    }

    
}
/* 
//era asi antes de agregar la lsita d enumeros deseados

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10) + 1;
    return numeroSecreto;
}
*/
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero Secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} ?`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de invervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabiltar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();






