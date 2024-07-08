let numeroSecreto = 0;
let intentos = 1;
let lista_numeros = [];
let numero_maximo = 10;

function asignar_texto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificar_intento() {
    let numero_Usuario = parseInt(document.getElementById('valor_Usuario').value);
    
    console.log("Intentos: " + intentos);

    if (numero_Usuario === numeroSecreto) {
        asignar_texto('p',`¡Felicitaciones, acertaste en ${intentos} ${(intentos === 1) ? "intento!" : "intentos!"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Si el usuario no acertó: 
        if (numero_Usuario > numeroSecreto) {
            asignar_texto('p', "El número secreto es menor");
        } else {
            asignar_texto('p', "El número secreto es mayor");
        }
        intentos++;
        limpiar_campo();
    }
    return;
}

function limpiar_campo() {
    document.querySelector("#valor_Usuario").value = "";
}

function generar_número() {
    let numero_generado = Math.floor(Math.random()*numero_maximo)+1;

    console.log("Numero generado: ", numero_generado);
    console.log(lista_numeros);

    // Si ya sorteamos todos los números:
    if (lista_numeros.length == numero_maximo) {    
        asignar_texto('p', 'Ya se sortearon todos los números posibles')
    } else {
        // Si el número generado está incluido en la lista:
        if (lista_numeros.includes(numero_generado)) {
            return generar_número();
        } else {
            lista_numeros.push(numero_generado);
            return numero_generado;
        }
    }
}

function reiniciar_juego() {
    // Limpiar campo de número
    limpiar_campo();
    // Indicar mensaje de inicio (intervalo de números)
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condiciones_iniciales();
    // Deshabilitar el botón "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condiciones_iniciales() {
    asignar_texto('h1',"Juego del número secreto!");
    asignar_texto('p',`Indica un número del 1 al ${numero_maximo}`);
    numeroSecreto = generar_número();
    intentos = 1;
}

condiciones_iniciales();
