const naruto = {
    nome:"Naruto",
    imagem:"img/naruto.png",
    atributos:{
        ataque: 7,
        defesas: 6,
        magia: 2
    }
};

const batman ={
    nome:"Batman",
    imagem:"img/batman.jpg",
    atributos:{
        ataque: 6,
        defesas: 8,
        magia: 0
    }
};

const cartas = [ naruto , batman]; 
let cartaJogador, cartaMaquina;

function SortearCarta(){
    const numeroDeCartas = 2;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
    
    ExibirCartaJogador();
}

function ExibirCartaJogador(){
    console.log(cartaJogador);
    let divCartaJogador = document.querySelector("#carta-jogador");
    // divCartaJogador.style.backgroundImage = 'url(' + cartaJogador.imagem + ')';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;
    // let moldura = '<img src="img/super-trunfo-transparente.png">';
    // let tagHTML = '<div id="opcoes" class="carta-status">';
    // let opcoesTexto = '';
    // for(let atributo in cartaJogador.atributos){
    //     opcoesTexto += '<input type="radio" class="atributo">';
    //     opcoesTexto += cartaJogador.atributos[atributo];
    //     opcoesTexto += "<br>";
    // }
    // let nome = cartaJogador.nome;
    // divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () =>{
    SortearCarta();
}