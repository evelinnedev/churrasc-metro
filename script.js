// regras:
//carne - 400gr por pessoa       + de 6 horas - 650gr
//cerveja - 1200ml por pessoa    + de 6 horas - 2000 ml
//Refri/agua - 1000ml por pessoa + de 6 horas - 6 horas - 1500ml

//crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) /2 * criancas);

    
    resultado.innerHTML = `<p><strong>${qtdTotalCarne / 1000}kg</strong> de carne</p>`
    resultado.innerHTML += `<p><strong>${qtdTotalCerveja / 1000} litros</strong> de cerveja</p>`
    resultado.innerHTML += `<p><strong>${qtdTotalBebidas / 1000} litros</strong> de bebidas não alcoólicas</p>`

}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}