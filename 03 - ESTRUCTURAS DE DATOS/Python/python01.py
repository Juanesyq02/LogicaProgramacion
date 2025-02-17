# Ejemplos de estructuras en Python

# Listas
mi_lista = [3, 1, 4, 1, 5]
mi_lista.append(9)  # Inserción
mi_lista.remove(1)  # Borrado
mi_lista[2] = 8  # Actualización
mi_lista.sort()  # Ordenación
print("Lista:", mi_lista)

# Tuplas (No modificables)
mi_tupla = (10, 20, 30)
print("Tupla:", mi_tupla)

# Conjuntos
mi_conjunto = {4, 2, 9, 1}
mi_conjunto.add(7)  # Inserción
mi_conjunto.discard(2)  # Borrado
print("Conjunto:", mi_conjunto)

# Diccionarios
mi_diccionario = {"nombre": "Juan", "edad": 25}
mi_diccionario["edad"] = 26  # Actualización
mi_diccionario["ciudad"] = "Madrid"  # Inserción
print("Diccionario:", mi_diccionario)

# ===============================
# DIFICULTAD EXTRA - Agenda de Contactos
# ===============================

def validar_numero(telefono):
    return telefono.isdigit() and len(telefono) <= 11

agenda = {}

while True:
    print("\n--- AGENDA DE CONTACTOS ---")
    print("1. Agregar contacto")
    print("2. Buscar contacto")
    print("3. Actualizar contacto")
    print("4. Eliminar contacto")
    print("5. Mostrar todos los contactos")
    print("6. Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        nombre = input("Ingrese el nombre: ")
        telefono = input("Ingrese el número de teléfono: ")
        if validar_numero(telefono):
            agenda[nombre] = telefono
            print("Contacto agregado.")
        else:
            print("Número inválido.")

    elif opcion == "2":
        nombre = input("Ingrese el nombre a buscar: ")
        print(f"Teléfono: {agenda.get(nombre, 'No encontrado')}")

    elif opcion == "3":
        nombre = input("Ingrese el nombre a actualizar: ")
        if nombre in agenda:
            telefono = input("Ingrese el nuevo número: ")
            if validar_numero(telefono):
                agenda[nombre] = telefono
                print("Contacto actualizado.")
            else:
                print("Número inválido.")
        else:
            print("Contacto no encontrado.")

    elif opcion == "4":
        nombre = input("Ingrese el nombre a eliminar: ")
        if nombre in agenda:
            del agenda[nombre]
            print("Contacto eliminado.")
        else:
            print("Contacto no encontrado.")

    elif opcion == "5":
        if agenda:
            for nombre, telefono in agenda.items():
                print(f"{nombre}: {telefono}")
        else:
            print("La agenda está vacía.")

    elif opcion == "6":
        print("Saliendo...")
        break

    else:
        print("Opción inválida, intenta de nuevo.")