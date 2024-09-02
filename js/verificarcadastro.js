const cadastroString = localStorage.getItem("cadastro");
const cadastro = JSON.parse(cadastroString);

console.log(cadastro.nome);
console.log(cadastro.telefone);
console.log(cadastro.email);
