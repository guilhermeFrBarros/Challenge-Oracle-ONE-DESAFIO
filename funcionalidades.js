const form = document.getElementById("form");
const textarea = form.elements["textarea-insercao"];
const divResultado =  document.querySelector("#info-resultadoId");
const spanResultado = document.querySelector("#info-resultadoId span");

const divImagem = document.querySelector(".info-default");
const buttonCopiar = document.querySelector(".resultado button");




const criptografar = () => {
    if (textarea.value == "") {
        textarea.placeholder = "Preencha este Campo!";
        divResultado.classList.add("display-none");
        buttonCopiar.classList.add("display-none");
        divImagem.classList.remove("display-none");
        
        return;
    }
    textarea.placeholder = "Digite seu texto";

    let frase = textarea.value;
    let fraseCriptografada = "";

// Criptografia    ----------
    for (let letra of frase) {
        if (letra === "a") {
            fraseCriptografada = "" + fraseCriptografada + "ai";
        } 
        else if (letra === "e") {
            fraseCriptografada = "" + fraseCriptografada + "enter";
        } 
        else if (letra === "i") {
            fraseCriptografada = "" + fraseCriptografada + "imes";
        } 
        else if (letra === "o") {
            fraseCriptografada = "" + fraseCriptografada + "ober";
        } 
        else if (letra === "u") {
            fraseCriptografada = "" + fraseCriptografada + "ufat";
        } 
        else {
            fraseCriptografada = fraseCriptografada + letra;
        }
    }



    spanResultado.textContent = fraseCriptografada;
    divImagem.classList.add("display-none")
    divResultado.classList.remove("display-none");
    buttonCopiar.classList.remove("display-none");


    form.reset();
};
