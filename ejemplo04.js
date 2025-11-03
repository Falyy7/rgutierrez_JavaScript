var tamano = document.getElementById('tamano').innerHTML; //obtenemos el número 5, que es el número que se encuentra dentro del html del id 'tamano'
for(i = 0; i < tamano; i ++){
    document.getElementsByTagName('ul')[0].innerHTML += "<li> Creo el elemento " + (i+1) + "</li>"; //ponemos (i+1) en vez de "i" para que empiece desde el 1 y acabe en el número insertado. 
}

document.getElementsByTagName('ul')[0].style.backgroundColor ="orange";