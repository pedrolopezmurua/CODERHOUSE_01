

// muestra tablas de multiplicar 
let valorMultiplicacion = prompt("ingresa una tabla de multiplicar") // ingresa valor
for (let index =1; index <= 10; index++){ // iteracion de 10
    let resultado = valorMultiplicacion * index  //calculo de resultado
    console.log('resultado; '+valorMultiplicacion+ " X " + index + ' = ' + resultado) // muestra resultado en CONSOLA.
}