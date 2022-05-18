const inputTexto = document.querySelector(".txt");
const resultado = document.querySelector(".txt2");
var copiar = document.querySelector(".btnCopy");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    resultado.value = textoEncriptado
    resultado.style.backgroundImage="none"
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    resultado.value = textoDesencriptado
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    var copiado = document.getElementById("resultado");
    copiado.select();
    execCommand('copy');
};

