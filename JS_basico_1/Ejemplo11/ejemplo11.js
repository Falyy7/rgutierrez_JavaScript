//Definimos la función que determina si un número es par o no

function esPar(valor){
    if ((valor %2) == 0){
        return true;
    }else{
        return false;
    }
}

//Definimos la función para cambiar el fondo en caso de que sea par

function cambiarFondo(){
    if (esPar(Number(this.innerHTML))){
        this.style.backgroundColor = "red";
    }
}

//Definimos la función para crear cada elemento aleatorio

function crearElemento(){
    var lista = document.getElementsByTagName("ul")[0];
    var aleatorio = Math.round(Math.random() * 10);
    lista.innerHTML += "<li>" + aleatorio + "</li>";

    var listaElementos = document.getElementsByTagName("li");

    for (var i=0; i<listaElementos.length ; i++){
        listaElementos[i].addEventListener("mouseover", cambiarFondo, false);
    }

}

//Definimos la función para borrar los elementos creados

function borrarElementos(){
    document.getElementsByTagName("ul")[0].innerHTML = "";

}

document.getElementsByTagName('button')[0].addEventListener("click", crearElemento, false);
document.getElementsByTagName('button')[0].addEventListener("keydown", borrarElementos, false);
