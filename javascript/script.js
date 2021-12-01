//Carne 400 gramas por pessoa + de 6 horas 650 gramas por pessoa
//Cerveja - 1200 ml por pessoa + 6 horas 2000 ml por pessoa
//Refrigerante / agua - 1000 ml por pessoa + de 6 horas 1500ml
//Crianças valem por 0,5 (meia pessoa)

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
let reset = document.getElementById = ("reset")

function calcular(){
    console.log("Calculando")
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtcerveja = cervejaPP(duracao) * adultos;
    let qtrefrigerantePP = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtcarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtcerveja/355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtrefrigerantePP/2000)} Garrafas de Refrigerante 2l</p>`
}
function resetar(){
    reset = document.location.reload();
}   
function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else {
        return 1200;
    }
}

function refrigerantePP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}

