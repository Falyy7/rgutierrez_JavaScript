//Añadimos funcionalidad al botón
document.getElementsByTagName('button')[0].onclick = function (){
                                                                   //recogemos el valor de input
                                                                   let entrada = document.getElementsByTagName('input')[0].value
                                                                   crearLista (entrada)             
                                                                            }

//Definimos la función que crea la lista en la pantalla
var objetivo = document.getElementById('resultado');

function crearLista(repeticiones){
    console.log("Genero la lista")
    //Iniciamos el elemento "Lista"
    objetivo.innerHTML = "<ol>"
    // Creamos tantos elementos en la lista como se hayan introducido
    for (var i = 0; i < repeticiones; i ++){
        //Genero un número aleatorio
        let numero = parseInt(Math.random() * 10 )
        //Creo el elemento
        objetivo.innerHTML += "<li>" + String (numero) + "</li>";
    }

    //Cierro la lista
    objetivo.innerHTML += "</ol>"

    //Selecciono todos los elementos "li", que hasta este momento no se han creado
    let elementosCreados = document.getElementsByTagName ('li');

    //Función para cambiar de color si el número generado es par
    function cambiaColorSiEsPar(elemento){
        if (parseInt(elemento.innerHTML) % 2 == 0){
            console.log ("cambia");
            //Añadimos la clase "rojo"
            elemento.classList.add ("rojo")
        }
    }

    // Recorremos todos los elementos <li> y les cambia la clase si es necesario.
	for (var i = 0; i < elementosCreados.length; i++) {
		cambiaColorSiEsPar(elementosCreados[i]);
	}

    //Con la clase cambiada, añadimos la funcionalidad al botón colorear
    document.getElementById('colorear').onclick = function(){
                                                               console.log("Ejecuta")
                                                               //Sacamos en una lista los elementos con la clase "rojo"
                                                               let listaRojos = document.getElementsByClassName('rojo');
                                                               //Recorremos y les vamos cambiando el fondo
                                                               for (var i= 0; i < listaRojos.length; i ++){
                                                                    listaRojos[i].style.backgroundColor ="red"

                                                                    }             
                                                             }

}