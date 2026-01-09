const area = document.getElementById("areaTexto");
const salida = document.getElementById("salida");
const botonComprobar = document.getElementById("botonComprobar");

function buscaCorreos(){
    salida.innerHTML = "";

    const correo = /[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,4}/g;

    let correos;

    while((correos = correo.exec(area.value)) && (correos != null)){
        salida.innerHTML += correos [0] + "<br>";
    }
}

botonComprobar.addEventListener ("click", buscaCorreos, false);