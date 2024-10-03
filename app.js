let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicia() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicia();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela( 'p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicia();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}





// 1. Criar uma função que exibe "Olá, mundo!" no console.

// function consoleOlaMundo() {
//     console.log('Olá, mundo!');
// }

// consoleOlaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function consoleNome(nome) {
//     console.log(`${nome}`);
// }

// consoleNome('Victor');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function numeroDobro(numero) {
//     return numero * 2;
// }

// let resultado = numeroDobro(5);
// console.log(resultado);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function mediaDosNumeros(a, b, c) {
//     return (a + b + c) / 3;
// }

// let media = mediaDosNumeros(6, 6, 9);
// console.log(media);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function maiorNumero(num1, num2) {
//     return num1 > num2 ? num1 : num2;  
// }

// let resultado = maiorNumero(10, 20);
// console.log(resultado);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function numeroMultiplicacao(numero) {
//     return numero * numero;
// }

// let resultado = numeroMultiplicacao(5);
// console.log(resultado);

// 7. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function imcPessoa(altura, peso) {
//     let media = peso / (altura * altura);
//     return media;
// }

// media = imcPessoa(1.72, 74);
// console.log(media);

// 8. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function valorFatorial(numero) {
//      if (numero === 0 || numero === 1) {
//         return 1;
//      }

//      let fatorial = 1;
//      for (let i = 2; i <= numero; i++) {
//         fatorial *= i;
//      }

//      return fatorial;
// }

// let numero = 5;
// let resultado = valorFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);

// 9. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function converterDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);
// }

// let valorEmDolar = 50;
// let valorEmReais = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// function converterReais(valor1) {
//     let reais = valor1 / 4.80;
//     return reais;    
// }

// let conversaoReais = converterReais(10);
// console.log(conversaoReais);

// 10. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function areaDaSala(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);

//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
// }

// let altura = 3;
// let largura = 5;
// areaDaSala(altura, largura);

// 11. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function areaCircularDaSala(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;

//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados.`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros.`);
// }

// let raio = 4;
// areaCircularDaSala(raio);

// 12. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function tabuadaNumero(numero) {

//     for(let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }

// let numero = 7;
// tabuadaNumero(numero);

// 13. Crie uma lista vazia, com o nome listaGenerica.

// let listaGenerica = [];

// // 14. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// // 15. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// 16. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// let tresNomes = ['Victor', 'Vinicius', 'Ivone'];
// console.log(tresNomes[0]);

// // 17. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// let tresNomes1 = ['Dorgival', 'Caio', 'Efraim'];
// console.log(tresNomes1[1]);

// // 18. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// let tresNomes2 = ['Maria Luisa', 'Caio', 'Chichout'];
// console.log(tresNomes2[2]);
