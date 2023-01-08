//puentes de botones
var areaCapturadora = document.querySelector(".area-text");
var EncriptarDatos = document.querySelector(".botonE");
var DesencriptarDatos = document.querySelector(".botonD");
var copiaDDatos = document.querySelector(".botonC");
var resultado = document.querySelector(".contenedor-dos");
img.style.display = "none"

var borradoS = document.querySelector(".botonBS");

// gatillo de funcion
EncriptarDatos.onclick = encriptar;
DesencriptarDatos.onclick = keyText;
copiaDDatos.onclick = copyResult;


//opsion de borrado
borradoS.onclick = botonBS;

//funciones
function encriptar() {
  // Obtener la cadena a encriptar
  var str = areaCapturadora.value;

  var encrypted = "";

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        encrypted += "ai";
        break;
      case "e":
        encrypted += "enter";
        break;
      case "i":
        encrypted += "imes";
        break;
      case "o":
        encrypted += "ober";
        break;
      case "u":
        encrypted += "ufat";
        break;
      default:
        encrypted += str[i];
    }
  }

  // Asignar la cadena encriptada al elemento de resultado
  resultado.value = encrypted;
}
function keyText() {
  // Obtener la cadena a desencriptar
  var str = areaCapturadora.value;

  var decrypted = "";

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "ai":
        decrypted += "a";
        break;
      case "enter":
        decrypted += "e";
        break;
      case "imes":
        decrypted += "i";
        break;
      case "ober":
        decrypted += "o";
        break;
      case "ufat":
        decrypted += "u";
        break;
      default:
        decrypted += str[i];
    }
  }

  // Asignar la cadena desencriptada al elemento de resultado
  resultado.value = decrypted;
}
function copyResult() {
  // Seleccionar el texto del elemento de resultado
  resultado.select();

  // Ejecutar la acción de copiar
  document.execCommand("copy");
}
function bBorrado() {
  // Borrar el contenido del campo de entrada
  areaCapturadora.value = "";
}
function bBorradoS() {
  // Borrar el contenido del campo de entrada
  resultado.value = "";
}
//Bloqueo de mayusculas asentuaciones
areaCapturadora.addEventListener("input", function (event) {
  // Obtener el valor del campo de entrada
  var value = event.target.value;

  // Validar el contenido del campo de entrada
  var isValid = value.match(/^[a-zñáéíóú]*$/);

  // Si el contenido no es válido, eliminar las letras minúsculas y las tildes
  if (!isValid) {
    event.target.value = value.replace(/[A-ZÑÁÉÍÓÚ]/g, "");
  }
});
