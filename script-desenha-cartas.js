var caminhoPastaImagens = "./cartas-vermelhas/";

function criarImgNoHtml(nomeImagem, textoAlternativo) {
    let img = document.createElement("img");
    img.src = caminhoPastaImagens + nomeImagem + ".png";
    img.alt = textoAlternativo;
    return img;
}

function desenhaTodasCartas() {
    for (let i = 0; i < 3; i++) {

        //Meu Time
        let desenhaJogador1 = document.getElementById("carta" + cartasJodador1[i]);
        desenhaJogador1.appendChild(criarImgNoHtml(cartasGeradasJogador1[i], "cartas do Parceiro" + i));

        let desenhaJogador3 = document.getElementById("carta" + cartasJodador3[i]);
        desenhaJogador3.appendChild(criarImgNoHtml(cartasGeradasJogador3[i], "Minhas Cartas" + i));


        //Time Adversário
        let desenhaJogador2 = document.getElementById("carta" + cartasJodador2[i]);
        desenhaJogador2.appendChild(criarImgNoHtml(cartasGeradasJogador2[i], "Cartas do Jogador 2: " + i));

        let desenhaJogador4 = document.getElementById("carta" + cartasJodador4[i]);
        desenhaJogador4.appendChild(criarImgNoHtml(cartasGeradasJogador4[i], "Cartas do Jogador 4: " + i));
    }
    //Manilha
    desenharCartaManilha();
}

function desenharCartaManilha() {
    let manilhaHtml = document.getElementById("manilha");
    manilhaHtml.innerHTML = "";
    manilhaHtml.appendChild(criarImgNoHtml(manilha, "Manilha do Jogo"));
}

function removerCartaJogada(idCarta) {
    let cartaJogada = document.getElementById(idCarta);
    cartaJogada.innerHTML = "";
}

function colocaCartaJogadorNaMesa(jogador, src) {
    let numCarta = src.replace("./cartas-vermelhas/", "").replace(".png", "");
    let mesaJogada = document.getElementById("mesa-" + jogador);

    mesaJogada.appendChild(criarImgNoHtml(numCarta, "Carta na mesa do " + jogador));

    if (jogador == "jogador1" || jogador == "jogador3") {
        cartasJogadasNaMesaJogador1e3.push(numCarta);
    } else {
        cartasJogadasNaMesaJogador2e4.push(numCarta);
    }
}