# Operadores en Python

# Aritméticos
suma = 5 + 3
resta = 10 - 4
multiplicacion = 6 * 2
division = 8 / 2
modulo = 10 % 3
potencia = 2 ** 3
div_entera = 9 // 2

print("Operadores Aritméticos:")
print(f"""
    suma:{suma}
    Resta:{resta}
    multiplicacion:{multiplicacion}
    Division:{division}
    Modulo:{modulo}
    Potencia:{potencia}
    Div_entera:{div_entera}\n""")

# Comparación
es_igual = (5 == 5)
es_diferente = (3 != 4)
es_mayor = (7 > 2)
es_menor = (2 < 5)
es_mayor_igual = (6 >= 6)
es_menor_igual = (4 <= 8)

print("\nOperadores de Comparación:")
print(f"""
    es_igual (5 == 5): {es_igual}
    es_diferente (3 != 4): {es_diferente}
    es_mayor (7 > 2): {es_mayor}
    es_menor (2 < 5): {es_menor}
    es_mayor_igual  (6 >= 6): {es_mayor_igual}
    es_menor_igual (4 <= 8): {es_menor_igual}
    \n""")

# Lógicos
and_logico = True and False
or_logico = True or False
not_logico = not True

print("\nOperadores Lógicos:")
print(f"""
    and_logico (True and False): {and_logico}
    or_logico (True or False): {or_logico}
    not_logico (not True): {not_logico}
    \n""")

# Asignación
x = 10
x += 5  # x = x + 5
x -= 3  # x = x - 3
x *= 2  # x = x * 2

print("\nOperadores de Asignación:")
print(x)

# Identidad
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print("\nOperadores de Identidad:")
print(f"""
    a is b: {a is b}
    a is c: {a is c}
    a == c: { a == c}
    \n""")

# Pertenencia
print("\nOperadores de Pertenencia:")
print(f"""
    2 in a: {2 in a}
    5 not in a: {5 not in a}
    \n""")

# Bits
bit_and = 5 & 3
bit_or = 5 | 3
bit_xor = 5 ^ 3
bit_shift_left = 5 << 1
bit_shift_right = 5 >> 1

print("\nOperadores de Bits:")
print(f"""
    bit_and (5 & 3): {bit_and}
    bit_or (5 | 3): {bit_or}
    bit_xor (5 ^ 3): {bit_xor}
    bit_shift_left (5 << 1): {bit_shift_left}
    bit_shift_right (5 >> 1): {bit_shift_right}
    \n""")

# Estructuras de Control
print("\nEstructuras de Control:")

# Condicionales
numero = 10
if numero > 5:
    print("El número es mayor que 5")
elif numero == 5:
    print("El número es 5")
else:
    print("El número es menor que 5")

# Iterativas
print("\nBucle for:")
for i in range(3):
    print(i)

print("\nBucle while:")
x = 0
while x < 3:
    print(x)
    x += 1

# Manejo de excepciones
print("\nManejo de Excepciones:")
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")

# Dificultad Extra
print("\nNúmeros pares entre 10 y 55 (sin 16 y sin múltiplos de 3):")
for num in range(10, 56):
    if num % 2 == 0 and num != 16 and num % 3 != 0:
        print(num)