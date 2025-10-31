//Mostramos la fecha actual

var fechaActual = new Date(Date.now()) // Creamos un objeto y lo inicializamos con el momento actual

document.getElementById('fecha').innerHTML = fechaActual.getDate() + " de " + //Obtiene la fecha actual mediante fechaActual.getDate y la introduce en el span "fecha"
    fechaActual.toLocaleString("es-ES", {month: "long"}) + " de " +    //Muestra la fecha en el idioma ES 
    fechaActual.getFullYear()  //Muestra el año completo


     //Mostramos el segundo actual

    var segundoActual = fechaActual.getSeconds(); 

    document.getElementById ("segundos").innerHTML = segundoActual;

    // Utilizamos Math para multiplicar el segundo actual por PI y redondear el valor.

    var resultado = Math.round (segundoActual * Math.PI);
    document.getElementById('resultado').innerHTML = resultado;

    //Variable que cambiará el color de fondo

    var color

    //Función que cambia el color de fondo dependiendo si el resultado de la multiplicación es par o impar

    function parOImpar(valor){
        if (valor % 2 == 0){
            color = "orange"
            return "par";

        }
        else{
            color = "cyan"
            return "impar";
        }
    }

    //Mostramos el texto de la paridad y modificamos el color de fondo

    document.getElementById ('paridad').innerHTML = parOImpar(resultado);
    document.getElementsByTagName('body')[0].style.backgroundColor = color

    
