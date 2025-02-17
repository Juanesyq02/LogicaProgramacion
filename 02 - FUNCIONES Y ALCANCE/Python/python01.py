# Ejemplos de funciones en Python

# 1. Función sin parámetros ni retorno
def saludar():
    print("Hola, bienvenido a Python!")

saludar()

# 2. Función con un parámetro
def saludar_persona(nombre):
    print(f"Hola, {nombre}!")

saludar_persona("Juan")

# 3. Función con varios parámetros y retorno
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)
print("Suma:", resultado)

# 4. Función dentro de otra función (Nested Functions)
def funcion_externa():
    print("Esto es una función externa")
    
    def funcion_interna():
        print("Esto es una función interna")
    
    funcion_interna()

funcion_externa()

# 5. Uso de una función predefinida en Python (len)
texto = "Python"
print("Longitud de la cadena:", len(texto))

# 6. Variable LOCAL y GLOBAL
global_var = "Soy global"

def usar_variables():
    local_var = "Soy local"
    print(local_var)
    print(global_var)  # Puede acceder a la variable global

usar_variables()
# print(local_var)  # Esto daría error, porque local_var solo existe dentro de la función

# ===============================
# DIFICULTAD EXTRA
# ===============================
def fizz_buzz_personalizado(texto1, texto2):
    conteo_numeros = 0
    
    for num in range(1, 101):
        if num % 3 == 0 and num % 5 == 0:
            print(texto1 + texto2)
        elif num % 3 == 0:
            print(texto1)
        elif num % 5 == 0:
            print(texto2)
        else:
            print(num)
            conteo_numeros += 1
    
    return conteo_numeros

# Llamamos a la función con "Fizz" y "Buzz" como texto personalizado
conteo = fizz_buzz_personalizado("Fizz", "Buzz")
print("Cantidad de números impresos en lugar de texto:", conteo)