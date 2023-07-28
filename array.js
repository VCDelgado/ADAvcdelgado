// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos

var numeros = [36, 25 , 95 , 16]

let numerosOrdenados = numeros.sort ()
console.log ("ejercicio 1) = " +numerosOrdenados [0])


// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. 

let sumarNumeros = numeros.reduce (function (sumatoria, indice)
{
    return sumatoria + indice;
})

console.log ("ejercicio 2) = " + sumarNumeros);