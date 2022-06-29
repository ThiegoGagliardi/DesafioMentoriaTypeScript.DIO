// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

if (campoSaldo != null) {
    campoSaldo.innerHTML = "0";
}

function somarAoSaldo(soma : number) {
    
    if (campoSaldo != null) {
        soma += parseFloat(campoSaldo.innerHTML);
        campoSaldo.innerHTML = `${soma}`;
    }    
}

function limparSaldo() {
    if (campoSaldo != null) {
       campoSaldo.innerHTML = '';
    }  
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(parseFloat(soma.innerHTML));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */