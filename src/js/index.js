
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {

        remover_selecao_botao();
        botao.classList.add("selecionado");

        remover_selecao_personagem();
        personagens[i].classList.add("selecionado");
    });
});

function remover_selecao_botao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function remover_selecao_personagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

