function adicionarPontoAosMeusPontos() {
    let meusPontosHtml = document.getElementById("minhaPontuacao");
    totalMeusPontos++;
    meusPontosHtml.innerHTML = totalMeusPontos;
}

function adicionarPontoAosPontosDeles() {
    let pontosDelesHtml = document.getElementById("pontuacaoDeles");
    totalPontosDeles++;
    pontosDelesHtml.innerHTML = totalPontosDeles;
}

function adicionarMeuPontoDeJogo() {
    let meusPontosDeJogoHtml = document.getElementById("meuJogo");
    totalPontosMeusJogos++;
    meusPontosDeJogoHtml.innerHTML = totalPontosMeusJogos;
}

function limparPontosDeles() {
    let pontosDelesHtml = document.getElementById("pontuacaoDeles");
    totalPontosDeles = 0;
    pontosDelesHtml.innerHTML = totalPontosDeles;

}

function limparMeusPontos() {
    let meusPontosHtml = document.getElementById("minhaPontuacao");
    totalMeusPontos = 0;
    meusPontosHtml.innerHTML = totalMeusPontos;
}

function adicionarPontoDeJogoDeles() {
    let pontosDelesDeJogoHtml = document.getElementById("jogoDeles");
    totalPontosJogosDeles++;
    pontosDelesDeJogoHtml.innerHTML = totalPontosJogosDeles;
}

function adicionarPontoMinhaRodada() {
    //fiz um ponto, soma nos pontos totais
    //escreve os pontos na tela
    let minhaRodadaHtml = document.getElementById("minhaRodada");
    totalPontosMinhaRodada++;
    minhaRodadaHtml.innerHTML = totalPontosMinhaRodada;
}

function adicionarPontoRodadaDeles() {
    let rodadaDelesHtml = document.getElementById("rodadaDeles");
    totalPontosRodadaDeles++;
    rodadaDelesHtml.innerHTML = totalPontosRodadaDeles;

}

function limparPontosRodadaDeles() {
    let rodadaDelesHtml = document.getElementById("rodadaDeles");
    totalPontosRodadaDeles = 0;
    rodadaDelesHtml.innerHTML = totalPontosRodadaDeles;
}

function limparPontosMinhaRodada() {
    let minhaRodadaHtml = document.getElementById("minhaRodada");
    totalPontosMinhaRodada = 0;
    minhaRodadaHtml.innerHTML = totalPontosMinhaRodada;
}