// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para usuarios e senha e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
const senha = JSON.parse(localStorage.getItem('senha') || '[]');
// Cria uma variavel condicaoValidacao e atribui a ela o valor de false
let condicaoValidacao = false;
// Exibe no console os usuários cadastrados e as senhas cadastradas
console.log(`Usuários cadastrados: ${usuarios}`);
console.log(`Senha: ${senha}`);
// Função para validar o cadastro
function validarCadastro() {
  // Esta linha de código busca o valor do elemento com id usuarioValido e o armazena em uma variável constante chamada usuario
  const usuario = document.getElementById('usuarioValido').value;
  // Esta linha de código busca o valor do elemento com id senhaValida e o armazena em uma variável constante chamada senhaValida
  const senhaValida = document.getElementById('senhaValida').value;
  // Verifica se o usuario estiver incluso no array usuarios e senhaValida estiver incluso no array de senha 
  if(usuarios.includes(usuario) && senha.includes(senhaValida)){
    // Se a condição anterior for verdadeira exibe no console que o usuário e a senha existem
    console.log('Usuário entrou');
    // Verifica se o indice do usuário no array usuarios é igual ao indice da senhaValida no array senha
    if(usuarios.indexOf(usuario) === senha.indexOf(senhaValida)){
      // Se a condição anterior for verdade exibe no console que a senha é desse usuario e muda a condicaoValidacao para verdade
      console.log('A senha é desse Usuário');
      condicaoValidacao = true;
    // Se a condição for falsa ele entra aqui
    }else{
      // Se entrar na condição anterior quer dizer que a senha não é daquele usuário e a condicação de validação continua false
      console.log('A senha não é desse Usuário');
      condicaoValidacao = false;
    }
  }

  // Aqui "limpa" o valor de usuarioValido e senhaValida
  document.getElementById('usuarioValido').value = '';

  document.getElementById('senhaValida').value = '';
  
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
  // Controla o fluxo dos eventos
  evento.preventDefault();
  // Cama a função validarCadastro para que ela seja executada
  validarCadastro();
  // Verifica se a condiçãoValidação é verdadeira
  if(condicaoValidacao === true){
    // Se a condição anterior for verdadeira ele muda de página
    window.location.href = 'menu.html';
  // Se a condição não for verdadeira ela entra aqui
  }else{
    // Se a condição não for verdadeira ele dispara um alert dizendo que o usuário ou senha estão incorretos
    alert('Usuário ou Senha incorreto!');
  }
})
