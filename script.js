const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const caixaResultado = document.getElementById('resultado');
const listarHistorico = document.getElementById('historico');

function classificar(imc){
    if(imc < 18.5){
        return
        ['abaixo do peso', 'c0'];
    }

    if(imc < 25 ){
        return
        ['peso normal', 'c1'];
    }

    if(imc < 30){
        return
        ['sobrepeso', 'c2'];
    }

    if(imc < 35){
        return
        ['obesidade I', 'c3'];
    }

    if(imc < 40){

        return
        ['obesidade II', 'c4'];
    }

    return
    ['obesidade III', 'c4']

}

