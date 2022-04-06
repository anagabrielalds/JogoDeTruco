let vezDaJogada = 1;
var jogador;
var cartaClicada;
var totalJogadas = 0;
var mesa = document.getElementById("mesa");
var cartasPaus = [1, 10];
var cartasCopas = [11, 20];
var cartasEspada = [21, 30];
var cartasOuro = [31, 40];
var manilha = 0;
var cartasGeradasJogador1 = [];
var cartasGeradasJogador2 = [];
var cartasGeradasJogador3 = [];
var cartasGeradasJogador4 = [];
var todasCartasGeradas = [];
var cartasJodador1 = [1, 2, 3];
var cartasJodador2 = [7, 8, 9];
var cartasJodador3 = [10, 11, 12];
var cartasJodador4 = [4, 5, 6];
var totalDaRodada = 0;
var totalPontosRodadaDeles = 0;
var totalMeusPontos = 0;
var totalPontosDeles = 0;
var totalPontosMinhaRodada = 0;
var totalPontosRodadaDeles = 0;
var totalPontosMeusJogos = 0;
var totalPontosJogosDeles = 0;
var cartasJogadasNaMesaJogador2e4 = [];
var cartasJogadasNaMesaJogador1e3 = [];



document.addEventListener('click', function (e) {
    if (e.path[0].attributes.src != undefined && e.path[1].attributes.id != undefined && e.path[2]
        .attributes.id != undefined) {
        let srcImagemClicada = e.path[0].attributes.src.value;
        cartaClicada = e.path[1].attributes.id.value;
        jogador = e.path[2].attributes.id.value;

        if (verificaVezDaJogada(jogador)) {
            colocaCartaJogadorNaMesa(jogador, srcImagemClicada);
            removerCartaJogada(cartaClicada);
            totalJogadas++;

            if (vezDaJogada - 1 == 4) {
                fimRodada();
            }
        }
    }
});

function verificaVezDaJogada(jogador) {
    let numeroJogador = jogador.substring(7);
    if (numeroJogador == vezDaJogada) {
        vezDaJogada++;
        return true;
    }
    return false;
}

function fimRodada() {
    setTimeout(function () {
        totalDaRodada++;
        contabilizaPontos();
        preparaNovaRodada();
    }, 1500);
}

function contabilizaPontos() {
    //alert("Hora de Contabilizar os pontos");
    //debugger
    //obtendo qual foi as cartas jogadas na mesa
    var vencedorRodada = verificandoMaiorCarta();
    console.log("Vencedor da rodada é: " + vencedorRodada);

    if (vencedorRodada == "jogador1e3") {
        adicionarPontoMinhaRodada();
    } else if (vencedorRodada == "empate") {
        alert("Rodada Empatada!! Niguém Pontua");
    } else {
        adicionarPontoRodadaDeles();
    }

    cartasJogadasNaMesaJogador1e3 = [];
    cartasJogadasNaMesaJogador2e4 = [];

    if (totalDaRodada == 3) {
        if (totalPontosMinhaRodada > totalPontosRodadaDeles) {
            //verificar se houve truco;
            adicionarPontoAosMeusPontos();
        } else {
            adicionarPontoAosPontosDeles();
        }
        limparPontosRodadaDeles();
        limparPontosMinhaRodada();
        totalDaRodada = 0;
    }
    if (totalMeusPontos == 12 || totalPontosDeles == 12) {
        if (totalMeusPontos == 12) {
            alert("Você ganhou o jogo!!");
            adicionarMeuPontoDeJogo();
        }
        if ((totalPontosDeles == 12)) {
            alert("Eles ganharam o jogo!!");
            adicionarPontoDeJogoDeles();
        }
        limparPontosDeles();
        limparMeusPontos();
    }
}

function verificandoMaiorCarta() {

    //Adicionando valores iguais para as cartas desconsiderando o naipe = Acopas vai ter o mesmo valor que Aouro
    var obtendoIndiceCartasJogadores1e3 = obtendoValorPeloIndiceDasCartas(cartasJogadasNaMesaJogador1e3);
    var obtendoIndiceCartasJogadores2e4 = obtendoValorPeloIndiceDasCartas(cartasJogadasNaMesaJogador2e4);

    console.log("Indices das Cartas dos Jogadores 1 e 3");
    console.log(obtendoIndiceCartasJogadores1e3);
    console.log("Indices das Cartas dos Jogadores 2 e 4");
    console.log(obtendoIndiceCartasJogadores2e4);

    var indiceManilha = obtendoValorPeloIndiceDasCartas([manilha]);

    console.log("Indice da manilha" + indiceManilha);

    var meuTimeTemManilha = temManilha(obtendoIndiceCartasJogadores1e3, indiceManilha[0]);
    var timeAdversarioTemManilha = temManilha(obtendoIndiceCartasJogadores2e4, indiceManilha[0]);

    console.log("meuTimeTemManilha: " + meuTimeTemManilha);
    console.log("timeAdversarioTemManilha: " + timeAdversarioTemManilha);

    if (meuTimeTemManilha || timeAdversarioTemManilha) {

        if (meuTimeTemManilha && timeAdversarioTemManilha) {
            //significa que precisamos verificar o naipe para definir a maior carta
            alert("Os dois times tem manilha");
            return "empate"; //isso por enquanto
        }
        if (meuTimeTemManilha) {
            return "jogador1e3";
        } else {
            return "jogador2e4"
        }

        //verificar se os dois times tem manilha, caso seja sim, verificar qual é a maior
        //se só um time tiver manilha essa já é a maior carta da partida

    } else {
        //como nenhum time tem manilha preciso pegar a maior carta de cada um
        //somado mais um porque o indice começa em 0

        var maiorValorMeuTime = Math.max(...obtendoIndiceCartasJogadores1e3);
        var maiorValorAdversario = Math.max(...obtendoIndiceCartasJogadores2e4);
        console.log("Maior valor do meu time: " + maiorValorMeuTime);
        console.log("Maior valor do adversário: " + maiorValorAdversario);
        if (maiorValorMeuTime > maiorValorAdversario) {
            return "jogador1e3";
        } else if (maiorValorMeuTime == maiorValorAdversario) {
            return "empate";
        } else {
            return "jogador2e4"
        }
    }


    //preciso verificar dessa lista de indices qual é o maior valor, se o maior meu igual ao maior valor do adversario
    //verificar

}

function obtendoValorPeloIndiceDasCartas(cartas) {
    let ordenandoCartasPaus = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
    let ordenandoCartasCopas = [14, 15, 16, 17, 18, 19, 20, 11, 12, 13];
    let ordenandoCartasEspada = [24, 25, 26, 27, 28, 29, 30, 21, 22, 23];
    let ordenandoCartasOuro = [34, 35, 36, 37, 38, 39, 40, 31, 32, 33];
    let lista = [];
    for (let i = 0; i < 2; i++) {
        var carta = cartas[i];
        var aux;
        //verificandoCartasPaus
        // ordenandoCartasPaus.indexOf(carta);  ==> seria legal ver depois porque essa linha não funcionou e a debaixo sim
        var index = ordenandoCartasPaus.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
        }
        index = ordenandoCartasCopas.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        index = ordenandoCartasEspada.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        index = ordenandoCartasOuro.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        lista.push(aux + 1);
    }
    return lista;
}

function temManilha(lista, indice) {
    var manilhaNova = indice;
    if (indice == 10) {
        manilhaNova = 1;
    } else {
        manilhaNova += 1;
    }
    return lista.findIndex(i => i == manilhaNova) != -1;
}

function preparaNovaRodada() {
    let quantidadeJogadores = 4;
    for (let i = 1; i <= 4; i++) {
        var mesaJogador = document.getElementById("mesa-jogador" + i);
        mesaJogador.innerHTML = "";
    }
    vezDaJogada = 1;
    //quando não estiver mais cartas gerar novas
    if (totalJogadas == 12) {
        geradorTodasCartas();
        desenhaTodasCartas();
    }
}

geradorTodasCartas();
desenhaTodasCartas();