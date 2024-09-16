
function CalcularSimulacao() {
  // Pegando os valores dos inputs
  const valorBem = parseFloat(document.getElementById('valorBem').value);
  const numeroParcelas = parseInt(document.getElementById('numeroParcelas').value);
  const tipoBem = document.getElementById('tipoBem').value;

  // Verificando se os campos estão preenchidos corretamente
  if (isNaN(valorBem) || isNaN(numeroParcelas) || valorBem <= 0 || numeroParcelas <= 0) {
      alert("Por favor, insira valores válidos para o empréstimo e número de parcelas.");
      return;
  }

  // Taxa de juros de 1.5% ao mês
  const taxaJuros = 0.015;

  // Fórmula de cálculo de financiamento (SAC ou Price, depende da aplicação)
  // Aqui usaremos a fórmula de juros compostos: Valor Final = Valor Inicial * (1 + taxaJuros * numeroParcelas)
  const valorFinal = valorBem * Math.pow(1 + taxaJuros, numeroParcelas);
  
  // Valor da parcela mensal
  const valorParcela = valorFinal / numeroParcelas;

  // Exibindo o resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <h3>Resultado da Simulação</h3>
      <p>Tipo de Bem Alienado: <strong>${tipoBem.charAt(0).toUpperCase() + tipoBem.slice(1)}</strong></p>
      <p>Taxa de Juros Aplicada: <strong>1.5% ao mês</strong></p>
      <p>Valor Total a Pagar: <strong>R$ ${valorFinal.toFixed(2)}</strong></p>
      <p>Valor da Parcela: <strong>R$ ${valorParcela.toFixed(2)}</strong> por ${numeroParcelas} meses</p>
  `;
}