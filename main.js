//Ejercicio 2 Introducción

let a = 15;
let b = 10;
let c = a + b;
console.log('La suma de a y b es:',c);

//Ejercicio 3 Introducción

let nombre = prompt('¿Cuál es tu nombre?');
console.log("Hola, " + nombre + "!");




//Ejercicio 1 Operadores Lógicos y Condicionales

function mayor () {
  let a = 20;
  let b = 10;
  let c = 50;
  return Math.max(a,b,c);
}
mayor();
let resultadomayor = mayor();
console.log("El mayor de los tres números es:", resultadomayor);

//Ejercicio 2 Operadores Lógicos y Condicionales

function parimpar () {   
  let numeroIngresado = prompt("Ingresa un número ¿Es par o impar?");
  if (numeroIngresado % 2 === 0) {
    console.log('El ' +  numeroIngresado + ' , es par');
  }
  else {
    console.log('El ' + numeroIngresado + ' , es impar');
  }
}
parimpar();


//Ejercicio 1 Bucles

{ let i = 10;
while (i >= 1) {
  console.log(`Valor de i: ${i}`);
  i--;
}
}

//Ejercicio 2 Bucles
function mayor100 () {
  let numeroM100

  do {
      numeroM100 = prompt("Ingrese un numero mayor a 100:")
      numeroM100 = Number(numeroM100);
      console.log("Número ingresado: " + numeroM100);

    } while (numeroM100 <= 100);
    console.log("El numero " + numeroM100 + " es mayor a 100" )
}

mayor100();

//Ejercicio 1 Funciones  

function espar (numero) {

  let numeroIngresado = prompt("Ingresa un número y te diré si es par");

  if (numero % 2 === 0){
    return console.log("El numero " + numeroIngresado + " es par:", true);
  }else {
    return console.log("El numero " + numeroIngresado + " es par:", false);
  }
 
}
espar();

//Ejercicio 2 Funciones  

function convertirCelsiusAFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}C es equivalente a ${fahrenheit}F`);
}
let temperaturaCelsius = 25;
convertirCelsiusAFahrenheit(temperaturaCelsius);



//Ejercicio 1 Objetos

function persona() {
  let persona = {
    nombre: 'Pedro',
    edad: 21,
    ciudad: 'Bahia Blanca',
  
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
  };
 
  console.log('Propiedades iniciales:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
  
  persona.cambiarCiudad('Buenos Aires');

  console.log('Propiedades actualizadas:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
}
persona();

//Ejercicio 2 Objetos

function antiguedadlibro () {
  let libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    año: 2005,
  
    
    libroviejo: function() {
        let añoActual = new Date().getFullYear();
        return (añoActual - this.año) > 10;
    }
  }; 
    console.log('Propiedades del libro:');
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año: ${libro.año}`);

    if (libro.libroviejo()) {
      console.log(`El libro "${libro.titulo}" es antiguo:`, true);
  } else {
      console.log(`El libro "${libro.titulo}" es antiguo:`, false);
  }
}
antiguedadlibro();

//Ejercicio 1 Arrays

function arrays_1 () {

  let NumerosOriginales = [1,2,3,4,5,6,7,8,9,10];
  let factor = 2
  let NumerosMultiplicados = NumerosOriginales.map(function(numero){
    return numero * factor;
  })

  console.log("Numeros Originales: " , NumerosOriginales);
  console.log("Numeros multiplicados por 2: ", NumerosMultiplicados);
}
arrays_1();

//Ejercicio 2 Arrays

function arrays_2 () {
  let pares = [];
  for(let i = 1; pares.length < 10 ; i++) {
      if (i % 2 === 0) { 
        pares.push(i);
      }
  }
console.log("Primeros 10 números pares: ", pares);
}
arrays_2();



//Ejercicio 1 Introduccion al Dom

function botontexto () {
  document.addEventListener('DOMContentLoaded', function() {
    const botonColor = document.getElementById('colorButton');
    
    botonColor.addEventListener('click', function() {
        const parrafos = document.querySelectorAll('p');
        parrafos.forEach(parrafo => {
           
            if (parrafo.style.color === 'green') {
                parrafo.style.color = 'black';
            } else {
                parrafo.style.color = 'green';
            }
        });
    });
  });
}
botontexto();

//Ejercicio 2 Introduccion al Dom

function Ingresartexto () {
  document.addEventListener('DOMContentLoaded', function() {

    const botonAlerta = document.getElementById('alertButton');
    botonAlerta.addEventListener('click', function() {
  
        const textoIngresado = document.getElementById('texto').value;
        
     
        if (textoIngresado) {
            alert('Has ingresado: ' + textoIngresado);
        } else {
            alert('Por favor, ingresa un texto.');
        }
    });
  });
}
Ingresartexto();

//Ejercicio 1 Eventos al Dom

function clickElemento(){
  document.addEventListener('DOMContentLoaded', function() {
    var lista = document.getElementById('miLista');
    var itemslista = lista.getElementsByTagName('li');
    for (var i = 0; i < itemslista.length; i++) {
        itemslista[i].addEventListener('click', function() {
            console.log('Contenido del elemento:', this.textContent);
        });
    }
  });
}
clickElemento();

//Ejercicio 2 Eventos al Dom
function campo(){
  document.addEventListener("DOMContentLoaded", () => {

    const campoTexto = document.getElementById('campoTexto');
    const deshabilitar = document.getElementById('deshabilitar');
    const habilitar = document.getElementById('habilitar');
  
    // Deshabilitar campo de texto
    deshabilitar.addEventListener('click', () => {
        campoTexto.disabled = true;
    });
  
    // Habilitar campo de texto
    habilitar.addEventListener('click', () => {
        campoTexto.disabled = false;
    });
  });             
}
campo();

//LOCALSTORAGE 

function guardarCorreo(){
  document.addEventListener("DOMContentLoaded", () => {
    const correoGuardadoDiv = document.getElementById('correoGuardado');
  
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }
  const formCorreo = document.getElementById('formCorreo');
    formCorreo.addEventListener('submit', (event) => {
        event.preventDefault();  
        const correo = document.getElementById('correo').value;
        
    
        localStorage.setItem('correo', correo);
        
        mostrarCorreoGuardado(correo);
    });
  
   
    function mostrarCorreoGuardado(correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarCorreo">Eliminar Correo Guardado</button>
        `;
  
        
        document.getElementById('eliminarCorreo').addEventListener('click', () => {
            localStorage.removeItem('correo');
            correoGuardadoDiv.innerHTML = '';
        });
    }
  });
}
guardarCorreo();