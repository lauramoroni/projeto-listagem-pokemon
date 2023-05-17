// ao clicar no botão de troca de tema, as cores da página alternam para o modo escuro 

const botaoAlterarTema = document.getElementById("alterar-tema")

// o querySelector consuta um seletor (class, etc)
const body = document.querySelector("body");
console.log(body); 

const trocarImagem = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão");

//verificar se ta no modo escuro
if(body.classList.contains("modoEscuro")) {
    console.log("O modo escuro está ativado")
    body.classList.remove("modoEscuro");
    //trocar o sol pela lua
    trocarImagem.setAttribute("src", "./src/images/moon.png")
} else { 
    //adicionar classe modo escuro
    body.classList.add("modoEscuro");
    //trocar a lua pelo sol
    trocarImagem.setAttribute("src", "./src/images/sun.png")
}





    
})

