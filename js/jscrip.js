const texto = document.getElementById('area-text');
const imagen = document.getElementById('imagen-principal');
const resultado = document.getElementById('texto-final');
const copiar = document.getElementById('botonC');
const error = document.getElementById('m-1');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;

const encriptacion = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
const desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let  textoFinal = '';

function verAcentos( texto ) {
    let resultado = acentos.test( texto )
    if ( resultado != false ) {
        error.classList.add( "error" ); 
    } else {
        error.classList.remove( "error" );
    }
    return  resultado;
}

function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
})







/*
mostrarHTMLR(mensajeEncriptado)

// Define la función de desencriptación
function desencriptar() {
  // Obtiene el mensaje del área de entrada
  const mensajeEncriptado = textAreaIndex.value;

  // Reemplaza las claves por sus respectivas vocales
  const mensaje = mensajeEncriptado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/obero/g, "o")
    .replace(/ufat/g, "u");

  // Muestra el mensaje desencriptado en el área de resultado
  resultado.value = mensaje;
}
function mostrarHTMLR(mensajeEncriptado){
  resultado.innerHTML=
  <div class="contenedorResultado"  id="ocultar"></div>
}

// Define la función de copia
function copiar() {
  // Obtiene el mensaje del área de resultado
  const mensaje = resultado.value;

  // Copia el mensaje al portapapeles
  navigator.clipboard.writeText(mensaje);
}

// Define la función de limpieza
function limpiar() {
  // Limpia el área de entrada y el área de resultado
  textAreaIndex.value = "";
  resultado.value = "";
}

// Asigna las funciones a los botones
botonE.onclick = encriptar;
botonD.onclick = desencriptar;
botonC.onclick = copiar;
botonBS.onclick = limpiar;

/*/funciones
const texAreaResultado = document.querySelector("#resultado");

const texAreaIndexBox = document.querySelector("#textAreaIndex");
    const EncriptarDatos = document.querySelector("#botonE");
    EncriptarDatos.onclick = encriptar1;
function encriptar1() {
        var mensaje = texAreaIndexBox.value;
        var mensajeEncriptado = mensaje
        .replace("e","enter")
        .replace("i","imes")
        .replace("o","ober")
        .replace("a","ai")
        .replace("u","ufat");

        texAreaResultado.value = mensajeEncriptado;
    }
    const DesencriptarDatos = document.querySelector("#botonD");
    DesencriptarDatos.onclick = desencriptar1;
function desencriptar1() {
        var mensajeEncriptado = texAreaIndexBox.value;
        var mensaje = mensajeEncriptado
        .replace("enter","e")
        .replace("imes","i")
        .replace("ober","o")
        .replace("ai","a")
        .replace("ufat","u");

        texAreaResultado.value = mensaje;
    }

  



/*
//funciones
//Desencriptar
function copy1 (){
var mensajeEncriptado = texAreaResultado.value;
navigator.clipboard.writeText(mensajeEncriptado);
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
//funciones
//copy
var copiaDDatos = document.querySelector(".botonC");
copiaDDatos.onclick = copyResult;

function copyResult() {
  // Seleccionar el texto del elemento de resultado
  resultado.select();

  // Ejecutar la acción de copiar
  document.execCommand("cut");
}
//funciones
//borrar

function bBorrado() {
  // Borrar el contenido del campo de entrada
  areaCapturadora.value = "";
}

//funciones
//bloqueo de mayusculas
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
*/
