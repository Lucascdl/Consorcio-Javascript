const formulario = document.getElementById("cadastroForm");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nomeInput = document.getElementById("nome");
  const telefoneInput = document.getElementById("telefone");
  const emailInput = document.getElementById("email");

  const nome = nomeInput.value;
  const telefone = telefoneInput.value;
  const email = emailInput.value;


  if (!/^\d+$/.test(telefone)) {
    alert("Por favor, insira apenas números no campo de telefone.");
    telefoneInput.focus();
    return;
  }


  if (!/\w+\s+\w+/.test(nome)) {
    alert("Por favor, insira um nome com duas palavras.");
    nomeInput.focus();
    return;
  }

  const cadastro = {
    nome,
    telefone,
    email,
  };


  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  alert(
    "Obrigado por se cadastrar, um dos nossos consultores irá entrar em contato!"
  );


  window.location.href = "index.html";
});
