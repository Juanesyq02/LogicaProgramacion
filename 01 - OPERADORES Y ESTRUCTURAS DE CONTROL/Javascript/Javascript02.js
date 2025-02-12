// Operadores en JavaScript

// Aritméticos
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 2;
let division = 8 / 2;
let modulo = 10 % 3;
let potencia = 2 ** 3;
let div_entera = Math.floor(9 / 2);

console.log("Operadores Aritméticos:");
console.log(suma, resta, multiplicacion, division, modulo, potencia, div_entera);

// Comparación
let es_igual = (5 == 5);
let es_diferente = (3 != 4);
let es_mayor = (7 > 2);
let es_menor = (2 < 5);
let es_mayor_igual = (6 >= 6);
let es_menor_igual = (4 <= 8);

console.log("\nOperadores de Comparación:");
console.log(es_igual, es_diferente, es_mayor, es_menor, es_mayor_igual, es_menor_igual);

// Lógicos
let and_logico = true && false;
let or_logico = true || false;
let not_logico = !true;

console.log("\nOperadores Lógicos:");
console.log(and_logico, or_logico, not_logico);

// Asignación
let x = 10;
x += 5;
x -= 3;
x *= 2;

console.log("\nOperadores de Asignación:");
console.log(x);

// Identidad
let a = [1, 2, 3];
let b = a;
let c = [1, 2, 3];

console.log("\nOperadores de Identidad:");
console.log(a === b, a === c, a == c);

// Pertenencia
console.log("\nOperadores de Pertenencia:");
console.log(a.includes(2), !a.includes(5));

// Bits
let bit_and = 5 & 3;
let bit_or = 5 | 3;
let bit_xor = 5 ^ 3;
let bit_shift_left = 5 << 1;
let bit_shift_right = 5 >> 1;

console.log("\nOperadores de Bits:");
console.log(bit_and, bit_or, bit_xor, bit_shift_left, bit_shift_right);

// Estructuras de Control
console.log("\nEstructuras de Control:");

// Condicionales
let numero = 10;
if (numero > 5) {
    console.log("El número es mayor que 5");
} else if (numero === 5) {
    console.log("El número es 5");
} else {
    console.log("El número es menor que 5");
}

// Iterativas
console.log("\nBucle for:");
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("\nBucle while:");
let y = 0;
while (y < 3) {
    console.log(y);
    y++;
}

// Manejo de excepciones
console.log("\nManejo de Excepciones:");
try {
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    console.log("No se puede dividir por cero");
}

// Dificultad Extra
console.log("\nNúmeros pares entre 10 y 55 (sin 16 y sin múltiplos de 3):");
for (let num = 10; num <= 55; num++) {
    if (num % 2 === 0 && num !== 16 && num % 3 !== 0) {
        console.log(num);
    }
}
