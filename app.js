let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


console.log(numeroSecreto)


function asignarTextoElemento(elemento, texto) {
  
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
 
}


function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos == 1)?'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
  }else {
    // El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El numero secreto es menor');
    }else {
      asignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumeroSorteado);
  // si ya sorteo todos los numeros 
  if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else {
    // Si el numero generado esta en la lista
    if (listaNumeroSorteado.includes(numeroGenerado)) {
     return generarNumeroSecreto();
    }else {
     listaNumeroSorteado.push(numeroGenerado);
     return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // limpiarCaja
  limpiarCaja();
  // indicar mensaje de intervalo de numeroSecreto
  // generar el numero aleatorio 
  // inicializar el numero de intentos
  condicionesIniciales();
  // desabilitar el boton de nuevo Juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
