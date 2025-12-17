//1º Recuperamos los botones y los metemos en un array
let arr_ListaBotones = document.getElementsByTagName ("button");

//2º Implentamos la funcionalidad

function incrementar(){
    var numero = Number(document.getElementsByTagName("p")[1].innerHTML);
    numero += 1;
    document.getElementsByTagName("p")[1].innerHTML = numero;
}


for(var i = 0; i < arr_ListaBotones.length; i++){

arr_ListaBotones[i].addEventListener("click", incrementar);

}