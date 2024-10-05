function calcularSimulacao() {

    const [valorBem, lanceInicial, numeroParcelas] = [
        parseFloat(document.getElementById("valorBem").value),
        parseFloat(document.getElementById("lanceInicial").value),
        parseInt(document.getElementById("numeroParcelas").value)
    ];

    if (valorBem <= 0 || isNaN(valorBem)) return alert("Por favor, insira um valor válido para o bem.");
    if (lanceInicial < 0 || isNaN(lanceInicial)) return alert("Por favor, insira um valor válido para o lance inicial.");
    if (numeroParcelas <= 0 || isNaN(numeroParcelas)) return alert("Por favor, insira um número válido de parcelas.");


    const taxaAdministrativa = 25;
    const valorTaxa = (valorBem * taxaAdministrativa) / 100;

    const valorTotal = valorBem + valorTaxa - (lanceInicial > valorBem + valorTaxa ? 0 : lanceInicial);

    const valorParcela = valorTotal / numeroParcelas;

    const resultadoDiv = document.getElementById("resultado");
    const resultados = {
        "Valor do Crédito": `R$ ${valorBem.toFixed(2)}`,
        "Lance Inicial": `R$ ${lanceInicial.toFixed(2)}`,
        "Taxa Administrativa (25%)": `R$ ${valorTaxa.toFixed(2)}`,
        "Valor Total a Pagar": `R$ ${valorTotal.toFixed(2)}`,
        "Número de Parcelas": numeroParcelas,
        "Valor de Cada Parcela": `R$ ${valorParcela.toFixed(2)}`
    };



    resultadoDiv.innerHTML = Object.entries(resultados)
        .map(([key, value]) => `<p>${key}: ${value}</p>`)
        .join("");
}

function limparCampos() {
    document.getElementById("valorBem").value = "";
    document.getElementById("lanceInicial").value = "";
    document.getElementById("numeroParcelas").value = "";
    document.getElementById("resultado").innerHTML = "";
}