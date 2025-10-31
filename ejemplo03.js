var botonInsertar = document.getElementById('insertar'); //Selecciona el elemento insertar
var contenidoCampoTexto = document.getElementsByTagName('input')[0]; // Selecciona el input
var textoFijo = document.getElementsByClassName ('insertado')[0]; //Selecciona el insertado

botonInsertar.onclick = function(){
    textoFijo.innerHTML = contenidoCampoTexto.value;
};

grande.onclick = function(){ // En JS se puede llamar directamente a los elementos por su ID, sin necesidad del getElementID
    var tamano = textoFijo.style.fontSize; //Obtengo el valor del tamaño
    tamano = tamano.substring(0, tamano.length - 1);// Elimino el %
    tamano = parseInt(tamano) + 5; //Lo paso a entero y le sumo 5
    tamano = tamano + "%";  //Le vuelvo a añadir el &
    textoFijo.style.fontSize = tamano; // Guardo el valor de tamaño en la propiedad
    console.log(tamano); //Lo muestro por consola

};

pequeno.onclick = function(){ // En JS se puede llamar directamente a los elementos por su ID, sin necesidad del getElementID
    var tamano = textoFijo.style.fontSize; //Obtengo el valor del tamaño
    tamano = tamano.substring(0, tamano.length - 1);// Elimino el %
    tamano = parseInt(tamano) - 5; //Lo paso a entero y le sumo 5
    tamano = tamano + "%";  //Le vuelvo a añadir el &
    textoFijo.style.fontSize = tamano; // Guardo el valor de tamaño en la propiedad
    console.log(tamano); //Lo muestro por consola

};

