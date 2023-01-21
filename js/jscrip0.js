
function encriptar() {
  esconderFron()
    var mensaje = document.getElementById(".textAreaIndex").value;
    mensaje= mensaje.toLowerCase();

    var mensajeEncriptado = mensaje.replace(/e/img, "enter").
    mensajeEncriptado = mensajeEncriptado.replace(/i/img, "imes").
    mensajeEncriptado = mensajeEncriptado.replace(/a/img, "ai").
    mensajeEncriptado = mensajeEncriptado.replace(/o/img, "ober").
    mensajeEncriptado = mensajeEncriptado.replace(/u/img, "ufat");

    // Muestra el mensaje encriptado en el área de resultado
    document.querySelector("#resultado").innerHTML=mensajeEncriptado;

    //document.querySelector("#ocultar").style.display= "show";
    //document.querySelector("#ocultar").style.display= "inherit";
    alert(encriptar)

  }
   //////////
   function recuperar(){
    var mensaje = document.querySelector(".textAreaIndex");
    return textAreaIndex.value;

   }

  //////////
  function Desencriptar() {

    var mensaje = document.getElementById("textAreaIndex").value;
    mensaje= mensaje.toLowerCase();
    var mensajeEncriptado = mensaje.replace(/enter/img, "e");
    var mensajeEncriptado = mensajeEncriptado.replace(/imes/img, "i");
    var mensajeEncriptado = mensajeEncriptado.replace(/ai/img, "a");
    var mensajeEncriptado = mensajeEncriptado.replace(/ober/img, "o");
    var mensajeEncriptado = mensajeEncriptado.replace(/ufat/img, "u");
    // Muestra el mensaje encriptado en el área de resultado
    document.querySelector("#resultado").innerHTML=mensajeEncriptado;
  }
  
  //////////
function esconderFron (){
  var contenedorOcultar = document.querySelector(".contenedorIT")
  contenedorOcultar.classList.add("ocultar")
}

function cortar() {
  resultado.select();
  document.execCommand("cut");
}