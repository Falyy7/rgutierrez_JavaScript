var listaTemas = ["GL_BaF283TM", "OOec5Ci3LVQ", "RbRzHhmVR64", "kfW02l5QEcw"];

function enlaceYoutube(codigo){
    return "https://www.youtube.com/watch?v=" + codigo;
}

//Clase para manejar enlaces, artistas y códigos

class enlaceCancion {
    constructor(contenido, codigo){
        this.contenido = contenido;
        this.codigo = codigo;
        this.enlace = enlaceYoutube(this.codigo);
    }

    convierteAEnlace(posicion){
        return "<a id='" + posicion + "' target= '_blank' href='" + this.enlace + "'>" + 
        this.contenido + "</a>";
    }

    get convierteAImagen(){
        return "img/" + this.contenido + ".jpg";
    }
}

function convertirAEnlaces(){
    let listaElementos = document.getElementsByTagName("li");
    for( var i=0; i < listaElementos.length; i++){
        //Creamos un objeto para poder usar sus métodos
        let elementoNuevo = new enlaceCancion(listaElementos[i].innerHTML, listaTemas[i]);
        listaElementos[i].innerHTML = elementoNuevo.convierteAEnlace(i);

        let valorImagen = elementoNuevo.convierteAImagen;
        listaElementos[i].addEventListener("mouseover", function(){
                                                                    document.getElementsByTagName("img")[0].src = valorImagen;  
                                                                        }, false);
    }

    //Eliminamos el botón PÚLSAME
    document.getElementById("pulsa").innerHTML = "";
}

// Añadimos la funcionalidad al pulsar el enlace
var botonPulsame = document.getElementsByTagName("a")[0];
botonPulsame.addEventListener("click", convertirAEnlaces, false);