const valorBem = parseFloat(prompt("Informe um valor:"));
const taxaAdministrativa = parseFloat(prompt("Informe a taxa administrativa (em %):"));
const numeroParcelas = parseInt(prompt("Informe o número de parcelas:"));

const valorTaxa = (valorBem * taxaAdministrativa) / 100;
const valorTotal = valorBem + valorTaxa;
const valorParcela = valorTotal / numeroParcelas;

console.log("Valor: R$" + valorBem.toFixed(2));
console.log("Taxa Administrativa: R$" + valorTaxa.toFixed(2));
console.log("Valor Total a Pagar: R$" + valorTotal.toFixed(2));
console.log("Número de Parcelas: " + numeroParcelas);
console.log("Valor de Cada Parcela: R$" + valorParcela.toFixed(2));

alert(
    "Simulação de Consórcio:\n\n" +
    "Valor: R$" + valorBem.toFixed(2) + "\n" +
    "Taxa Administrativa: R$" + valorTaxa.toFixed(2) + "\n" +
    "Valor Total a Pagar: R$" + valorTotal.toFixed(2) + "\n" +
    "Número de Parcelas: " + numeroParcelas + "\n" +
    "Valor de Cada Parcela: R$" + valorParcela.toFixed(2)
);