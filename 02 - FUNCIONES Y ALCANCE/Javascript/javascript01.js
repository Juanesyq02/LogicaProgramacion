// Ejemplos de funciones en JavaScript

// 1. Función sin parámetros ni retorno
function saludar() {
    console.log("Hola, bienvenido a JavaScript!");
}

saludar();

// 2. Función con un parámetro
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludarPersona("Juan");

// 3. Función con varios parámetros y retorno
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("Suma:", resultado);

// 4. Función dentro de otra función (Nested Functions)
function funcionExterna() {
    console.log("Esto es una función externa");
    
    function funcionInterna() {
        console.log("Esto es una función interna");
    }
    
    funcionInterna();
}

funcionExterna();

// 5. Uso de una función predefinida en JavaScript (length)
let texto = "JavaScript";
console.log("Longitud de la cadena:", texto.length);

// 6. Variable LOCAL y GLOBAL
let globalVar = "Soy global";

function usarVariables() {
    let localVar = "Soy local";
    console.log(localVar);
    console.log(globalVar);  // Puede acceder a la variable global
}

usarVariables();
// console.log(localVar);  // Esto daría error, porque localVar solo existe dentro de la función

// ===============================
// DIFICULTAD EXTRA
// ===============================
function fizzBuzzPersonalizado(texto1, texto2) {
    let conteoNumeros = 0;
    
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(texto1 + texto2);
        } else if (num % 3 === 0) {
            console.log(texto1);
        } else if (num % 5 === 0) {
            console.log(texto2);
        } else {
            console.log(num);
            conteoNumeros++;
        }
    }
    
    return conteoNumeros;
}

// Llamamos a la función con "Fizz" y "Buzz" como texto personalizado
let conteo = fizzBuzzPersonalizado("Fizz", "Buzz");
console.log("Cantidad de números impresos en lugar de texto:", conteo);