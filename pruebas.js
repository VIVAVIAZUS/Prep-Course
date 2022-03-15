function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    return (str1.length === str2.length);

}

console.log(tienenMismaLongitud('s', 'as'))

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num < 90)

}

console.log(menosQueNoventa(50))

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num % 2 === 0)

}

console.log(esPar(11))

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return Math.pow(num, 2)

}

console.log(elevarAlCuadrado(8))


function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
    if (letra.length > 1) { return `Dato incorrecto` }
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
        return 'Es vocal';
    }
    return `Dato incorrecto`;

}

console.log(esVocal('a'))