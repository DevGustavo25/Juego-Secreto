// DESAFIOS - CLASE 2: 
// Número 1:
function mensaje() {
    console.log("¡Hola Mundo!");
}

mensaje();

// Número 2:
function dato(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

dato("Gustavo");

// Número 3: 
function valor_doble(number) {
    let resultado = number * 2;
    console.log("El doble es: " + resultado);
}

valor_doble(30);

// Número 4: 
function valores(a,b,c) {
    let promedio = (a + b + c)/3;
    console.log("El promedio es: " + promedio); 
}

valores(10,40,70);

// Número 5:
function mayor(a,b) {
    a = parseInt(prompt("Introduce un número"));
    b = parseInt(prompt("Introduce otro número"));

    if (a > b) {
        alert("El número mayor es: " + a);
        console.log("El número mayor es: " + a);
    } else {
        alert("El número mayor es: " + b);
        console.log("El número mayor es: " + b);
    }
}

mayor()

// Número 6:
function cuadrado(number) {
    return number * number;
}

let multiplicar = cuadrado(10);
console.log(multiplicar);

// Calculadora de promedio y situación del alumno: 

// PARTE 1 - Calcular promedio:
function calcular_promedio(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4)/4; 
}

let promedio = calcular_promedio(7,6,3,5);

// PARTE 2 - Verificar aprobación:

function verificar_aprobación(promedio) {
    return promedio >= 5 ? "Aprobado" : "Desaprobado";
}

verificar_aprobación();

// DESAFIOS - CLASE 3:
// Número 1:
function indice_masa(peso, altura) {
    peso = prompt("Coloque su peso en KG:");
    altura = prompt("Coloque su altura en metros:");
    let IMC = Math.floor((peso / (altura * altura))); 
    alert(`Tú Indice de Masa Corporal (IMC) es: ${IMC}`);
}

indice_masa();

// Número 2:
function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
}

let numero = parseInt(prompt("Ingrese un numero:"));
let resultado = factorial(numero);
alert(`El factorial de ${numero} es ${resultado}`);

factorial();

// Número 3: 
function conversion(dolares) {
    dolares = prompt("Ingrese el monto en dolares:");
    let TC = 3.80;
    let soles = dolares * TC;
    alert(`${dolares} dólares equivale a ${soles} soles (TC = ${TC})`);
}

conversion();

// DESAFÍOS - CLASE 4: 
// Número 1:
let lista_generica = [];
console.log(lista_generica);

// Número 2:
let lenguajes_prog = ["Javascript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajes_prog);

// Número 3:
lenguajes_prog.push("Java", "Rubi", "GoLang");
console.log(lenguajes_prog);

// Número 4:
function mostrar_lenguajes() {
    for (let i = 0; i < lenguajes_prog.length; i++) {
        console.log(lenguajes_prog[i]);
    }
}

mostrar_lenguajes();

// Numero 5: 
function lenguajes_inverso() {
    for (let i = lenguajes_prog.length-1; i >= 0; i--) {
        console.log(lenguajes_prog[i]);
    }
}

lenguajes_inverso();

// Número 6:
function calcular_promedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50]
let promedio = calcular_promedio(numeros);
console.log(numeros);
console.log(promedio);

// Número 7: 
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      else if (lista[i] < menor) {
        menor = lista[i];   
      }
    }
    console.log(lista);
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

let numeros_2 = [1, 7, 10, 3, 5];
encontrarMayorMenor(numeros_2);

// Número 8: 
function suma_elementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    console.log(lista);
    console.log("Suma:", suma);
    return suma;
}

let numeros_3 = [10, 40, 30, 25];
suma_elementos(numeros_3);  

// Número 9:
function posición_lista(lista, elemento) {
    elemento = parseInt(prompt("Ingrese un número:")); 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            console.log(lista);
            console.log("Número elegido:", elemento);
            console.log("Posición:", i);
            return i;
        }
    }
    console.log(lista);
    console.log("Número elegido:", elemento);
    console.log("Elemento no encontrado en la lista");
    return -1;
}

let numeros_4 = [10, 40, 67, 89];
console.log(posición_lista(numeros_4));

// Número 10: 
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        alert("Las listas deben tener el mismo tamaño");
    }

    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}

let lista1 = [1, 2, 3, 4];
let lista2 = [5, 6, 7, 8];
let resultado = sumarListas(lista1, lista2);
console.log(resultado);
