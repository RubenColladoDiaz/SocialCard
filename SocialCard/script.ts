let contadorLikes = document.getElementById("likecount");
let boton = document.getElementById("likebutton");

boton.onclick = function(){

    let likes = parseInt(contadorLikes.textContent);
    likes++;
    contadorLikes.textContent = likes.toString();

}

let html = document.getElementById("presult");

let botonGuardado = document.getElementById("savebutton");

botonGuardado.onclick = function(){

    html.innerText = "Publicación guardada";
    setTimeout(function() {html.innerText = "";}, 2000);

}

let botonComentarios = document.getElementById("commentbutton");

botonComentarios.onclick = function(){

    html.innerText = "Web no conectada a la red";
    setTimeout(function() {html.innerText = "";}, 2000);

}