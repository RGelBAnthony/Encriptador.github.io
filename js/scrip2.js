// Objetos de mapa de caracteres para encriptar y desencriptar vocales
const charMapEncrypt = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};

const charMapDecrypt = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

// Función para encriptar y desencriptar una cadena de texto
function encriptar(str, charMap) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += charMap[str[i]] || str[i];
  }
  return result;
}

// Función para manejar el clic en el botón de encriptar
function handleEncryptClick() {
  // Obtener la cadena a encriptar
  const str = document.querySelector("#area-text").value.toLowerCase();

  // Encriptar la cadena y asignar el resultado al elemento de resultado
  const result = encryptDecrypt(str, charMapEncrypt);
  document.getElementById("texto-final
