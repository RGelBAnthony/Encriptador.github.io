  // Declara las variables
  var resultado = document.querySelector("#resultado");

//////////funcion encriptar texto
  var botonEn = document.querySelector("#botonD");
  botonEn.onclick =Desencriptar ;
  //////////
  function encriptar() {
    esconderFron ();
    var mensaje = document.getElementById("textAreaIndex").value;
    mensaje= mensaje.toLowerCase();
    var mensajeEncriptado = mensaje.replace(/e/img, "enter");
    var mensajeEncriptado = mensajeEncriptado.replace(/i/img, "imes");
    var mensajeEncriptado = mensajeEncriptado.replace(/a/img, "ai");
    var mensajeEncriptado = mensajeEncriptado.replace(/o/img, "ober");
    var mensajeEncriptado = mensajeEncriptado.replace(/u/img, "ufat");
    // Muestra el mensaje encriptado en el área de resultado
    document.querySelector("resultado").innerHTML=mensajeEncriptado;
    document.querySelector("#ocultar").style.display= "show";
    document.querySelector("#ocultar").style.display= "inherit";

  }
  //////////
  var botonEn = document.querySelector("#botonE");
    botonEn.onclick = encriptar;
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
    document.querySelector("resultado").innerHTML=mensajeEncriptado;
  }
  //////////funcion copiar
  var copiar = document.querySelector("#botonC");
  copiar.onclick = copy1;
  //////////
  function copy1() {
    // Seleccionar el texto del elemento de resultado
    resultado.select();
    // Ejecutar la acción de cortar
    document.execCommand("cut");
  }
  //////////funcion borrar
  const borradoS = document.querySelector("#botonBS");
  borradoS.onclick = bBorradoS;
  //////////
  function bBorradoS() {
  resultado.value = "";
  }
  //////////
function esconderFron (){
  var contenedorOcultar = document.querySelector(".contenedorIT")
  contenedorOcultar.classList.add("ocultar")
  
}