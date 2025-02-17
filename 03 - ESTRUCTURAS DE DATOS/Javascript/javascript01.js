// Estructuras de datos en JavaScript

// Array
console.log("--- Array ---");
let frutas = ['manzana', 'plátano', 'naranja'];
console.log("Array original:", frutas);

// Inserción
frutas.push('uva');
console.log("Después de insertar:", frutas);

// Borrado
frutas.pop();
console.log("Después de borrar:", frutas);

// Actualización
frutas[1] = 'kiwi';
console.log("Después de actualizar:", frutas);

// Ordenación
frutas.sort();
console.log("Después de ordenar:", frutas);

// Objeto
console.log("\n--- Objeto ---");
let persona = { nombre: 'Juan', edad: 30 };
console.log("Objeto original:", persona);

// Inserción
persona.trabajo = 'Desarrollador';
console.log("Después de insertar:", persona);

// Borrado
delete persona.edad;
console.log("Después de borrar:", persona);

// Actualización
persona.nombre = 'Ana';
console.log("Después de actualizar:", persona);

// Set
console.log("\n--- Set ---");
let numerosUnicos = new Set([1, 2, 3, 3, 4]);
console.log("Set original:", [...numerosUnicos]);

// Inserción
numerosUnicos.add(5);
console.log("Después de insertar:", [...numerosUnicos]);

// Borrado
numerosUnicos.delete(2);
console.log("Después de borrar:", [...numerosUnicos]);

// Map
console.log("\n--- Map ---");
let puntuaciones = new Map();
puntuaciones.set('Alicia', 95);
puntuaciones.set('Bob', 80);
console.log("Map original:", [...puntuaciones]);

// Inserción
puntuaciones.set('Carlos', 85);
console.log("Después de insertar:", [...puntuaciones]);

// Borrado
puntuaciones.delete('Bob');
console.log("Después de borrar:", [...puntuaciones]);

// Actualización
puntuaciones.set('Alicia', 97);
console.log("Después de actualizar:", [...puntuaciones]);

// DIFICULTAD EXTRA: Agenda de contactos

class AgendaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(nombre, telefono) {
        if (this.validarTelefono(telefono)) {
            this.contactos.push({nombre, telefono});
            console.log(`Contacto agregado: ${nombre} - ${telefono}`);
        } else {
            console.log("Número de teléfono no válido");
        }
    }

    buscarContacto(termino) {
        const resultados = this.contactos.filter(c => 
            c.nombre.toLowerCase().includes(termino.toLowerCase()) || 
            c.telefono.includes(termino)
        );
        if (resultados.length > 0) {
            console.log("Contactos encontrados:");
            resultados.forEach(c => console.log(`${c.nombre} - ${c.telefono}`));
        } else {
            console.log("No se encontraron contactos");
        }
    }

    actualizarContacto(nombre, nuevoTelefono) {
        const indice = this.contactos.findIndex(c => c.nombre === nombre);
        if (indice !== -1 && this.validarTelefono(nuevoTelefono)) {
            this.contactos[indice].telefono = nuevoTelefono;
            console.log(`Contacto actualizado: ${nombre} - ${nuevoTelefono}`);
        } else {
            console.log("Contacto no encontrado o número de teléfono no válido");
        }
    }

    eliminarContacto(nombre) {
        const longitud = this.contactos.length;
        this.contactos = this.contactos.filter(c => c.nombre !== nombre);
        if (this.contactos.length < longitud) {
            console.log(`Contacto eliminado: ${nombre}`);
        } else {
            console.log("Contacto no encontrado");
        }
    }

    validarTelefono(telefono) {
        return /^\d{1,11}$/.test(telefono);
    }
}

// Ejemplo de uso de la agenda
console.log("\n--- Agenda de Contactos ---");
const agenda = new AgendaContactos();

agenda.agregarContacto("María", "12345678901");
agenda.agregarContacto("Pedro", "98765432");
agenda.agregarContacto("Ana", "1234567890");

agenda.buscarContacto("Mar");
agenda.buscarContacto("9876");

agenda.actualizarContacto("Pedro", "98765432100");
agenda.eliminarContacto("Ana");

agenda.buscarContacto("");