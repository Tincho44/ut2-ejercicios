function reverseString(texto){
    let textoReverso = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    return textoReverso;
}

console.log(reverseString("Hola")); 