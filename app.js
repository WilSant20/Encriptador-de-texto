let cadena = document.getElementById("textoUsuario");
let botonEncriptar = document.getElementById('botonEncriptar');
let botonDesencriptar = document.getElementById('botonDesencriptar');
let botonCopiar = document.getElementById('botonCopiar');

function encriptar(cadena){
    cadena = cadena.replace(/e/g, 'enter');
    cadena = cadena.replace(/i/g, 'imes');
    cadena = cadena.replace(/a/g, 'ai');
    cadena = cadena.replace(/o/g, 'ober');
    cadena = cadena.replace(/u/g, 'ufat');
    return cadena;
}

function desencriptar(cadena){
    cadena = cadena.replace(/enter/g, 'e');
    cadena = cadena.replace(/imes/g, 'i');
    cadena = cadena.replace(/ai/g, 'a');
    cadena = cadena.replace(/ober/g, 'o');
    cadena = cadena.replace(/ufat/g, 'u');
    return cadena;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function procesado(){
    if(botonEncriptar.addEventListener('click', encriptar(cadena))){
        console.log(cadena);
        asignarTextoElemento('#textoYaOperado', cadena);
    } else if(botonDesencriptar.addEventListener('click')){
        desencriptar(cadena);
        asignarTextoElemento('#textoYaOperado', cadena);
    }
    return;
}


function copiarTexto(){
    let texto = document.querySelector('#textoYaOperado');
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado al portapapeles:', texto);
        alert('¡Texto copiado al portapapeles!');
      })
    .catch(err => {
        console.error('Error al copiar texto al portapapeles:', err);
        alert('¡Error al copiar texto al portapapeles!');
      });
return;
};

procesado();