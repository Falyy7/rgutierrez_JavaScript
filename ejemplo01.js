var listaEnlaces = document.getElementsByTagName('u') 

//recoge los elementos que tienen la etiqueta "u"

for(i=0; i<listaEnlaces.length; i++) { // Ejecuto tantas veces como elementos <u> tenga

    console.log(listaEnlaces[i].innerHTML) // Muestra por consola los elementos de la listaEnlaces pero SOLO lo que se encuentra DENTRO (innerHTML) de la etiqueta "u"
    listaEnlaces[i].onclick=function() {  // A cada elemento al que equivalga "i" cada vez que se ejecuta el for se le añade la sig funcion
        document.getElementById('eleccion').innerHTML = this.innerHTML // Al id "eleccion" se le asocia el valor innerHTML del elemento en el que estamos
        console.log("Cambio") // Dejamos constancia por consola de que se ha producido un cambio

    }

}