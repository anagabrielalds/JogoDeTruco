function desenharCartasDoAdversário() {
    //jogador 2 tem as cartas 
    for (let i = 0; i < 3; i++) {

        let desenhaJogador2 = document.getElementById("carta" + cartasJodador2[i]);
        desenhaJogador2.innerHTML = '<img src="./cartas-vermelhas/' + cartasGeradasJogador2[i] +
            '.png" alt="Cartas do Jogador 2"' + i + '>';

        let desenhaJogador4 = document.getElementById("carta" + cartasJodador4[i]);
        desenhaJogador4.innerHTML = '<img src="./cartas-vermelhas/' + cartasGeradasJogador4[i] +
            '.png" alt="Cartas do Jogador 4"' + i + '>';

    }
    //Jogador 2 e 4
}

function desenharCartaParceiro() {
    //Jodador 1
    for (let i = 0; i < 3; i++) {
        let desenhaJogador1 = document.getElementById("carta" + cartasJodador1[i]);
        desenhaJogador1.innerHTML = '<img src="./cartas-vermelhas/' + cartasGeradasJogador1[i] + '.png" alt="Parceiro"' +
            i + '>';
    }
}

function desenharMinhasCartas() {
    //jogador 3
    for (let i = 0; i < 3; i++) {
        let desenhaJogador3 = document.getElementById("carta" + cartasJodador3[i]);
        desenhaJogador3.innerHTML = '<img src="./cartas-vermelhas/' + cartasGeradasJogador3[i] +
            '.png" alt="Minhas Cartas"' + i + '>';
    }
}

function desenharCartaManilha() {
    let manilhaHtml = document.getElementById("manilha");
    manilhaHtml.innerHTML = '<img src="./cartas-vermelhas/' + manilha +
        '.png" alt="Manilha do Jogo">';
}

function removerCartaJogada(idCarta) {
    let cartaJogada = document.getElementById(idCarta);
    cartaJogada.innerHTML = "";

}

function colocaCartaJogadorNaMesa(jogador, src) {
    let numCartaNaMesa = src.replace("./cartas/", "").replace(".png", "");
    var mesaJogada = document.getElementById("mesa-" + jogador)
    mesaJogada.innerHTML = mesaJogada.innerHTML + '<img src="' + src + '" alt="Carta na mesa do "' + jogador +
        '>';
    if (jogador == "jogador1" || jogador == "jogador3") {
        cartasJogadasNaMesaJogador1e3.push(numCartaNaMesa);
    } else {
        cartasJogadasNaMesaJogador2e4.push(numCartaNaMesa);
    }
}