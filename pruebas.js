// function incrementarPorUno(array) {
//     // "array" debe ser una matriz de enteros (int/integers)
//     // Aumenta cada entero por 1
//     // y devuelve el array
//     // Tu código:
//     let array2 = []
//     array.forEach(element => {
//         element = element + 1;
//         console.log(element);
//         array2.push(element);
//     });
//     return array2;
// }

// console.log(incrementarPorUno([11, 12, 13, 14, 15]));

// function dePalabrasAFrase(palabras) {
//     // "palabras" es un array de strings/cadenas
//     // Devuelve un string donde todas las palabras estén concatenadas
//     // con espacios entre cada palabra
//     // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//     // Tu código:
//     return palabras.join(' ');
// }
// let palabras = ['hello', 'world', 'carro', 'mesa', 'mariposa']
// console.log(dePalabrasAFrase(palabras))

// function arrayContiene(array, elemento) {
//     // Comprueba si el elemento existe dentro de "array"
//     // Devuelve "true" si está, o "false" si no está
//     // Tu código:
//     let final = false;
//     array.forEach(element => {
//         if (elemento === element) { final = true }
//     });
//     return final;
// }
// console.log(arrayContiene(palabras, 'mariposa'))

// function agregarNumeros(numeros) {
//     // "numeros" debe ser un arreglo de enteros (int/integers)
//     // Suma todos los enteros y devuelve el valor
//     // Tu código:
//     let suma = 0;
//     numeros.forEach(element => {
//         suma = suma + element;
//     });
//     return suma;
// }

// console.log(agregarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))

// function promedioResultadosTest(resultadosTest) {
//     // "resultadosTest" debe ser una matriz de enteros (int/integers)
//     // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
//     // Tu código:
//     let promedio = 0;
//     resultadosTest.forEach(element => {
//         promedio = promedio + element;
//     });
//     return promedio / resultadosTest.length;
// }
// console.log(promedioResultadosTest([3, 3, 3, 3, 1.5, 4.5]))

// function numeroMasGrande(numeros) {
//     // "numeros" debe ser una matriz de enteros (int/integers)
//     // Devuelve el número más grande
//     // Tu código:
//     let masGrande = numeros[0];
//     numeros.forEach(element => {
//         if (element > masGrande) { masGrande = element; }
//     });
//     return masGrande;
// }
// console.log(numeroMasGrande([1, 0, 3, 4, 200, 6, 201, 1000, 50, 6, 8, 19, 20, 12]))

// function multiplicarArgumentos(a = 0, b = 1, ...c) {
//     // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
//        // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
//     // Escribe tu código aquí:

//     let resultado = a * b;
//     c.forEach(element => {
//         resultado = resultado * element;
//     });
//     return resultado
// }

// console.log(multiplicarArgumentos(10, 0, 10))


// function cuentoElementos(arreglo) {
//     //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
//     //Escribe tu código aquí
//     let conteo = 0;
//     arreglo.forEach(element => {
//         if (element > 18) { conteo = conteo + 1; }
//     });
//     return conteo;
// }
// console.log(cuentoElementos([10, 10, 18, 21]));
// console.log(cuentoElementos([97, 100, 190, 5, 7, 9]));
// console.log(cuentoElementos([97, 20, 90, 50, 7, 709]));

// function diaDeLaSemana(numeroDeDia) {
//     //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
//     //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//     //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
//     //Escribe tu código aquí   
//     let dia = "Es dia Laboral";
//     if(numeroDeDia>7){return 'dia no existe'};
//     if(numeroDeDia===1||numeroDeDia===7){
//       dia = "Es fin de semana";
//     };
//     return dia;
// }
// console.log(diaDeLaSemana(3));
// console.log(diaDeLaSemana(2));
// console.log(diaDeLaSemana(1));
// console.log(diaDeLaSemana(7));
// console.log(diaDeLaSemana(8));

// function empiezaConNueve(n) {
//     //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//     //inicia con 9 y false en otro caso.
//     //Escribe tu código aquí
//     let a= n.toString();
//     if(a[0]==='-'&& a[1]==='9'){return true}
//     if (a[0]==='9'){
//       return true;
//     }
//     return false;
// }

// console.log(empiezaConNueve(98));
// console.log(empiezaConNueve(9));
// console.log(empiezaConNueve(2));
// console.log(empiezaConNueve(7));
// console.log(empiezaConNueve(-5));
// console.log(empiezaConNueve(09));
// console.log(empiezaConNueve(-9));


// function todosIguales(arreglo) {
//     //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//     //retornar true, caso contrario retornar false.
//     //Escribe tu código aquí  
//     let comparador = arreglo[0];
//     let retorno = true;
//     arreglo.forEach(element => {
//         if (element !== comparador) { retorno = false; }
//     });
//     return retorno;
// }
// console.log(todosIguales([20, 20, 20, 20]))
// console.log(todosIguales([97, 100, 190, 9]))
// console.log(todosIguales([230, 230, 230, 230]))
// console.log(todosIguales([230, 230, 230, '230']))

// function mesesDelAño(array) {
//     //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
//     // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//     //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
//     // Tu código:
//     let inv = [];
//     array.forEach(element => {
//         if (element === "Enero" || element === "Marzo" || element === "Noviembre") {
//             inv.push(element);
//         }
//     });
//     if (inv.length === 3) { return inv; }
//     return "No se encontraron los meses pedidos";
// }

// var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
// var wrong = ["Marzo", "Marzo", ,"Diciembre", "Julio", "Noviembre"];

// console.log(mesesDelAño(ok));
// console.log(mesesDelAño(wrong));

// function mayorACien(array) {
//     //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
//     //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
//     // Tu código:
//     let mayorCien=[];
//     array.forEach(element => {
//       if(element>100){mayorCien.push(element);}
//     });
//     return mayorCien;
// }
// var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
// console.log(mayorACien(integers));

function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let incremento = [numero];

    for (let i = 0; i < 10; i++) {
        numero = numero + 2;
        if (i === numero) { "Se interrumpió la ejecución" }
        incremento.push(numero);
    }
    return incremento;
}

console.log(breakStatement(50));
console.log(breakStatement(-4));

function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let incrementoMenosCinco = [numero];
    for (let i = 0; i < 10; i++) {
        if (i !== 5) {
            numero = numero + 2;
            incrementoMenosCinco.push(numero);
        }
    }
    return incrementoMenosCinco;
}

console.log(continueStatement(50));
console.log(continueStatement(-4));