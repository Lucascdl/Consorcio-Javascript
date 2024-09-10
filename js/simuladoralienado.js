function calcularSimulacao() {
    const [valorBem, lanceInicial, numeroParcelas] = [
        parseFloat(document.getElementById("valorBem").value),
        parseFloat(document.getElementById("lanceInicial").value),
        parseInt(document.getElementById("numeroParcelas").value)
    ];

    if (valorBem <= 0 || isNaN(valorBem)) return alert("Por favor, insira um valor válido para o bem.");
    if (lanceInicial < 0 || isNaN(lanceInicial)) return alert("Por favor, insira um valor válido para o lance inicial.");
    if (numeroParcelas <= 0 || isNaN(numeroParcelas)) return alert("Por favor, insira um número válido de parcelas.");

    const LTV = 80;
    const valorAlienado = (valorBem * LTV) / 100;

    const taxaAdministrativa = 25;
    const valorTaxa = (valorAlienado * taxaAdministrativa) / 100;

    const valorTotal = valorAlienado + valorTaxa - (lanceInicial > valorAlienado + valorTaxa ? 0 : lanceInicial);

    if (lanceInicial >= valorTotal) {
        alert("Error")}

    const valorParcela = valorTotal / numeroParcelas;

    const resultadoDiv = document.getElementById("resultado");
    const resultados = {
        "Valor do Bem (colateral)": `R$ ${valorBem.toFixed(2)}`,
        "Valor do Crédito (80% do valor do bem)": `R$ ${valorAlienado.toFixed(2)}`,
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
