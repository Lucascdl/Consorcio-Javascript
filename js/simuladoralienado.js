
function validarEntradas(valorBem, numeroParcelas) {
  if (isNaN(valorBem) || valorBem <= 0) {
    alert("Por favor, insira um valor válido para o empréstimo.");
    return false;
  }
  if (isNaN(numeroParcelas) || numeroParcelas <= 0) {
    alert("Por favor, insira um número válido de parcelas.");
    return false;
  }
  return true;
}


function calcularValorTotal(valorBem, taxaJuros, numeroParcelas) {
  return valorBem * Math.pow(1 + taxaJuros, numeroParcelas);
}


function calcularValorParcela(valorFinal, numeroParcelas) {
  return valorFinal / numeroParcelas;
}


function exibirResultados(valorBem, tipoBem, valorFinal, valorParcela, numeroParcelas) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <p>Valor do Empréstimo: R$ ${valorBem.toFixed(2)}</p>
      <p>Tipo de Bem Alienado: ${tipoBem.charAt(0).toUpperCase() + tipoBem.slice(1)}</p>
      <p>Taxa de Juros Aplicada: 1.5% ao mês</p>
      <p>Valor Total a Pagar: R$ ${valorFinal.toFixed(2)}</p>
      <p>Valor da Parcela: R$ ${valorParcela.toFixed(2)} por ${numeroParcelas} meses</p>
  `;
}


function calcularSimulacao() {

  const valorBem = parseFloat(document.getElementById('valorBem').value);
  const numeroParcelas = parseInt(document.getElementById('numeroParcelas').value);
  const tipoBem = document.getElementById('tipoBem').value;


  if (!validarEntradas(valorBem, numeroParcelas)) {
    return;
  }


  const taxaJuros = 0.015;


  const valorFinal = calcularValorTotal(valorBem, taxaJuros, numeroParcelas);
  const valorParcela = calcularValorParcela(valorFinal, numeroParcelas);


  exibirResultados(valorBem, tipoBem, valorFinal, valorParcela, numeroParcelas);
}


document.getElementById('calcularBtn').addEventListener('click', calcularSimulacao);