// carne - 400 gr por pessoa  +de 6 horas - 650
// cerveja - 1200ml por pessoa pessoa + 6 horas 200ml
// refrigerante/agual - 1000ml por pessoa + 6 horas 1500ml 

// crianca vale por 0,5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular(){

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdTotalCervrja = cervejaPP(duracao) * adultos 
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne}g por Carne </p>`
    resultado.innerHTML += `<p>${qtdTotalCervrja}ml por pessoa </p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml por pesso </p>`
}

function carnePP(duracao){

    if(duracao >= 6 ){

        return 650
    }else{
        return 400
    }

}

function cervejaPP(duracao){

    if(duracao >= 6 ){

        return 2600
    }else{
        return 1200
    }

}

function bebidasPP(duracao){

    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }

}