//Crea una lista con los valores de la tabla
var listaDeValores = document.getElementsByTagName('td');
var resultado = 0;

for(i = 0; i < listaDeValores.length; i++){

    console.log(listaDeValores[i])  //imprimimos por consola todos los valores de la lista

    resultado = resultado += parseInt(listaDeValores[i].innerHTML); //Convierte los valores a enteros y los va sumando y añadiendo a la variable "resultado"

}

document.getElementById('resultado').textContent = "El resultado final es " + resultado + " y tiene " + String(resultado).length + " caracteres."
console.log("El resultado final es " + resultado + "y tiene " + String(resultado).length + "caracteres.")