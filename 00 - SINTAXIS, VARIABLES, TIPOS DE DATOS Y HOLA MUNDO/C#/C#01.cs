// Documentación oficial: https://learn.microsoft.com/es-es/dotnet/csharp/

/* Este es en comentario de múltiples líneas 
    Prueba de comentarios
*/

// Este es un comentario de una linea

//EJERCICIO :
/*
-Crea un comentario en el código y coloca la URL del sitio web oficial del
-lenguaje de programación que has seleccionado.
-Representa las diferentes sintaxis que existen de crear comentarios
-en el lenguaje (en una línea, varias...).
-Crea una variable (y una constante si el lenguaje lo soporta).
-Crea variables representando todos los tipos de datos primitivos
-del lenguaje (cadenas de texto, enteros, booleanos...).
-Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
-¿fácil? No te preocupes, recuerda que esta es una ruta de estudio y
debemos comenzar por el principio.
*/

//Definimos Variables y Constantes
var variable = 30; //Variable en C#
const int constante = 10; //Constante en C#

//Tipos de Datos
int entero = 20; //Entero
float flotante32Bits = 5.14f; //Numero de punto flotante de 32 bits
double doble = 3.14; //Numero de punto flotante de 64 bits
long largo = 3.2342; //Numero de punto flotante de 64 bits
decimal decimalNumber = 10.3; //Decimal
string cadena = "Esto es un String"; //Cadena de texto
char caracter = 'C'; //Caracter
bool booleano = true; //Booleano

//Imprimimos en consola
Console.WriteLine("Variable: " + variable);
Console.WriteLine("Constante: " + constante);
Console.WriteLine("Entero: " + entero);
Console.WriteLine("Flotante 32 bits: " + flotante32Bits);
Console.WriteLine("Doble: " + doble);
Console.WriteLine("Largo: " + largo);
Console.WriteLine("Decimal: " + decimalNumber);
Console.WriteLine("Cadena: " + cadena);
Console.WriteLine("Caracter: " + caracter);
Console.WriteLine("Booleano Verdadero: " + booleano);
Console.WriteLine("Booleano Falso: " + !booleano);
Console.WriteLine("Hola Mundo!");