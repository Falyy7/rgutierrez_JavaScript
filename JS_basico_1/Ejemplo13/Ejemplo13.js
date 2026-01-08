const entrada = document.getElementById("entrada");
const botonEnviar = document.getElementById("botonEnviar");

function compruebaQueEs(){

    const userTwitter = /^@(\w){1,15}$/g;

    if (userTwitter.test(entrada.value)){
        alert("Es un usuario válido de twitter");
    }else {
        alert("No es un usuario válido de twitter"); 
    }

}

botonEnviar.addEventListener("click", compruebaQueEs, false);