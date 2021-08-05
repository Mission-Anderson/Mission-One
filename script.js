let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")




async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high

console.log(dolar)
console.log(euro)


    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dolar Americano") {
        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let ValorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dolar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas.src = "./img/Bandeira Estados Unidos.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Símbolo do Euro.png"
    }


    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)
