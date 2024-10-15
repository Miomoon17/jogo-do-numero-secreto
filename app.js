let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTituloNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2} );
}
function mensagemInicial(){
    exibirTituloNaTela('h1','Jogo do número secreto' );
    exibirTituloNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTituloNaTela('h1', 'Acertou!');
        let mensagemtentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTituloNaTela('p', mensagemtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTituloNaTela('h1', 'Errou!');
            exibirTituloNaTela('p', 'O número secreto é menor');
        }else{
            exibirTituloNaTela('h1', 'Errou!');
            exibirTituloNaTela('p', ' O número secreto é maior');
        }
        tentativas++
        limparinput()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparinput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparinput();
    tentativas =1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

    
