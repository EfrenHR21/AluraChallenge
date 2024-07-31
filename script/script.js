function encriptar() {
  let texto = document.getElementById("texto").value;
  let titulo= document.getElementById("titulo");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");
  let cifrado = document.getElementById("cifrado")

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    titulo.textContent = " ";
    parrafo.textContent = " ";
    cifrado.textContent = textoCifrado;
    imagen.src = " ";
    document.getElementById("copiar").style.display = 'block'
    
  } 
}

function copiar(){
  let textoCifrado = document.getElementById("cifrado");
  let boton = document.getElementById("copiar");
  navigator.clipboard.writeText(textoCifrado.textContent);
  boton.textContent = "Copiado";
  
}


function desencriptar() {
  let texto = document.getElementById("texto").value;
  let titulo = document.getElementById("titulo");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      titulo.textContent = " ";
      parrafo.textContent = textoCifrado;
      cifrado.textContent = "";
      imagen.src = " assets/Muñeco.png";
      document.getElementById("copiar").style.display = 'none'
    } 
}
