function calcularSimulacao() {

    const [valorEmprestimo, numeroParcelas] = [
        parseFloat(document.getElementById("valorBem").value),
        parseInt(document.getElementById("numeroParcelas").value)
    ];

    if (valorEmprestimo <= 0 || isNaN(valorEmprestimo)) return alert("Por favor, insira um valor válido para o empréstimo.");
    if (numeroParcelas <= 0 || isNaN(numeroParcelas)) return alert("Por favor, insira um número válido de parcelas.");


    const taxaJuros = 3 / 100;
    const valorTotal = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);
    const valorParcela = valorTotal / numeroParcelas;

    const resultadoDiv = document.getElementById("resultado");
    const resultados = {
        "Valor do Empréstimo": `R$ ${valorEmprestimo.toFixed(2)}`,
        "Taxa de Juros (3% ao mês)": `3%`,
        "Valor Total a Pagar": `R$ ${valorTotal.toFixed(2)}`,
        "Número de Parcelas": numeroParcelas,
        "Valor de Cada Parcela": `R$ ${valorParcela.toFixed(2)}`
    };

    resultadoDiv.innerHTML = Object.entries(resultados)
        .map(([key, value]) => `<p>${key}: ${value}</p>`)
        .join("");
}