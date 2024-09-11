
  let juros = 0;
  let ltv = 0; 
  let prazo = 0; 
  let tipoBemValor = 0; 

  function atualizarSimulacao() {

    const tipoBem = document.getElementById("tipoBem").value;

    
    switch (tipoBem) {
      case 'veiculo':
        juros = 0.02; 
        ltv = 0.7;    
        prazo = 60;   
        tipoBemValor = 50000; 
        break;
      case 'casa':
        juros = 0.01; 
        ltv = 0.8;   
        prazo = 120;  
        tipoBemValor = 300000; 
        break;
      case 'terreno':
        juros = 0.015; 
        ltv = 0.65;    
        prazo = 72;    
        tipoBemValor = 150000; 
        break;
      case 'empresa':
        juros = 0.025; 
        ltv = 0.6;     
        prazo = 84; 
        tipoBemValor = 1000000; 
        break;
      default:
        juros = 0;
        ltv = 0;
        prazo = 0;
        tipoBemValor = 0;
    }
  }

  function calcularSimulacao() {
    const [lanceInicial, numeroParcelas] = [
        parseFloat(document.getElementById("lanceInicial").value),
        parseInt(document.getElementById("numeroParcelas").value)
    ];

    if (tipoBemValor <= 0) return alert("Por favor, selecione um tipo de bem válido.");
    if (lanceInicial < 0 || isNaN(lanceInicial)) return alert("Por favor, insira um valor válido para o lance inicial.");
    if (numeroParcelas <= 0 || isNaN(numeroParcelas)) return alert("Por favor, insira um número válido de parcelas.");

    const LTV = ltv * 100; 
    const valorAlienado = (tipoBemValor * LTV) / 100; 

    const taxaAdministrativa = 25; 
    const valorTaxa = (valorAlienado * taxaAdministrativa) / 100;

    
    let valorTotal = valorAlienado + valorTaxa;

    
    if (lanceInicial >= valorTotal) {
        valorTotal = 0;
    } else {
        valorTotal -= lanceInicial; 
    }

    
    const valorParcela = valorTotal / numeroParcelas;

    
    const resultadoDiv = document.getElementById("resultado");
    const resultados = {
        "Tipo de Bem": `${document.getElementById("tipoBem").value}`,
        "Valor do Bem (colateral)": `R$ ${tipoBemValor.toFixed(2)}`,
        "Valor do Crédito (LTV %)": `R$ ${valorAlienado.toFixed(2)}`,
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

  
  atualizarSimulacao();
