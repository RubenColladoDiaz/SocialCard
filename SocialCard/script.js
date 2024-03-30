var contadorLikes = document.getElementById("likecount");
var boton = document.getElementById("likebutton");
boton.onclick = function () {
    var likes = parseInt(contadorLikes.textContent);
    likes++;
    contadorLikes.textContent = likes.toString();
};
var html = document.getElementById("presult");
var botonGuardado = document.getElementById("savebutton");
botonGuardado.onclick = function () {
    html.innerText = "Publicación guardada";
    setTimeout(function () { html.innerText = ""; }, 2000);
};
var botonComentarios = document.getElementById("commentbutton");
botonComentarios.onclick = function () {
    html.innerText = "Web no conectada a la red";
    setTimeout(function () { html.innerText = ""; }, 2000);
};
