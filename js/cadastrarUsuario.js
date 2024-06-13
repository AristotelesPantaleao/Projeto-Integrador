// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para nome, email, usuarios e senha e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const nome = JSON.parse(localStorage.getItem('nome') || '[]');
const emailUsuario = JSON.parse(localStorage.getItem('email') || '[]');
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
const senha = JSON.parse(localStorage.getItem('senha') || '[]');
// cria variaveis condicaoNome, condicaoEmail, condicaoUsuarios e condicaoSenha e atribui o valor false a elas
let condicaoNome = false, condicaoEmail = false, condicaoUsuarios = false, condicaoSenha = false;
// Função cadastrarNome
function cadastrarNome() {
  // pega o valor do elemento que possui id nomeCompleto e atribui a constante nomeUsuario
  const nomeUsuario = document.getElementById('nomeCompleto').value;
  // Verifica se condicaousuarios e condicaoEmail forem verdadeiros e se nomeUsuario é estritamente diferente de vazio
  if (condicaoUsuarios == true && condicaoEmail == true && nomeUsuario !== '') {
    // Se a condição anterior for verdadeira condicaoNome vira true e adiciona nomeUsuario ao array nome
    condicaoNome = true;
    nome.push(nomeUsuario);
  }
  // "Limpa" o valor do elemento de id nomeCompleto
  document.getElementById('nomeCompleto').value = '';

}

// Função para salvar os nomes no localStorage
function salvarNomeUsuario() {
  localStorage.setItem('nome', JSON.stringify(nome));
}

// Função cadastrar Usuário
function cadastrarUsuario() {
  // pega o valor do elemento que possui id usuario e atribui a constante usuario
  const usuario = document.getElementById('usuario').value;
  // Verifica se usuario está incluso no array usuarios
  if (usuarios.includes(usuario)) {
    // Se a condição anterior for verdadeira a condicaoUsuarios continua false
    condicaoUsuarios = false;
  // Se a condição anterior for false entra aqui
  } else {
    // Se entrar aqui a condicaoUsuarios vira true
    condicaoUsuarios = true;
  }
  // Fornece acesso ao elemento do usuariosError
  const usuariosError = document.getElementById('usuariosError');
  // Verifica se a usuarios foi cadastrado e retorna uma mensagem de erro durante 3 segundos
  if (JSON.parse(localStorage.getItem('usuarios')) !== null && condicaoUsuarios === false) {
    usuariosError.textContent = 'Email já cadastrado'

    setTimeout(() => {
      usuariosError.textContent = '';
    }, 3000);
  } else {
    usuariosError.textContent = '';
  }
  // Chama a função cadastrarEmail
  cadastrarEmail();
  // Verifica se condicaoEmail e condicaoUsuarios são verdadeiros e se usuario é estritamente difenrente de vazio
  if (condicaoEmail == true && condicaoUsuarios == true && usuario !== "") {
    // Se a condição anterior for verdadeiro adiciona usuario ao array usuarios
    usuarios.push(usuario);
  }
  // "Limpa" o valor do elemento de id usuario
  document.getElementById('usuario').value = '';
}

// Função salvarUsuarios armazena um valor chamado usuarios no armazenamento local do navegador usando o formato JSON.
function salvarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função cadastrar Email
function cadastrarEmail() {
  // pega o valor do elemento que possui id email e atribui a constante email
  const email = document.getElementById('email').value;
  // Verifica se email esta incluso no array emailUsuario
  if (emailUsuario.includes(email)) {
    // Se a condição anterior for verdadeiro condicaoEmail continua false
    condicaoEmail = false;
    // Se a condição anterior for falsa entra aqui
  } else {
    // Se entrar aqui condicaoEmail vira true
    condicaoEmail = true
    // Verifica se condicaoEmail e condicaoUsuarios são verdadeiros e email é estritamente diferente de vazio
    if (condicaoEmail == true && condicaoUsuarios == true && email !== '') {
      // Se a condição anterior for verdadeiro adiciona email no array emailUsuario
      emailUsuario.push(email);
    }
  }
  // Fornece acesso ao elemento do emailError
  const emailError = document.getElementById('emailError');
  // Verifica se a email foi cadastrado e retorna uma mensagem de erro durante 3 segundos
  if (JSON.parse(localStorage.getItem('email')) !== null && condicaoEmail === false) {
    emailError.textContent = 'Email já cadastrado'

    setTimeout(() => {
      emailError.textContent = '';
    }, 3000);
  } else {
    emailError.textContent = '';
  }
  // "Limpa" o valor do elemento de id email
  document.getElementById('email').value = '';
}

// Função salvarTelefoneAluno armazena um valor chamado emailUsuario no armazenamento local do navegador usando o formato JSON.
function salvarEmail() {
  localStorage.setItem('email', JSON.stringify(emailUsuario));
}

// Função cadastrarSenha
function cadastrarSenha() {
  // pega o valor do elemento que possui id senha e atribui a constante senhaUsuario
  const senhaUsuario = document.getElementById('senha').value;
  // Verifica se a senhaUsuario não está incluso no array senha
  if (!senha.includes(senhaUsuario)) {
    // Se a condicao anterior for verdadeira condicaoSenha vira true
    condicaoSenha = true;
    // Verifica se condicaoSenha, condicaoEmail, condicaoUsuarios são verdadeiros e senhaUsuario é estritamente diferente de vazio
    if (condicaoSenha == true && condicaoEmail == true && condicaoUsuarios == true && senhaUsuario !== '') {
      // Se a condição anterior for verdadeiro adiciona senhaUsuario ao array senha
      senha.push(senhaUsuario);
    }
    // Se a condição anterior for falsa entra aqui
  } else {
    // Se entrar aqui condicaoSenha vira true
    condicaoSenha = true;
    // Verifica se condicaoSenha, condicaoEmail e condicaoUsuario sao verdadeiros e senhaUsuario é estritamente diferente de vazio
    if (condicaoSenha == true && condicaoEmail == true && condicaoUsuarios == true && senhaUsuario !== '') {
      // Se a condição anterior for verdadeiro adiciona senhaUsuario ao array senha
      senha.push(senhaUsuario);
    }
  }
  // "Limpa" o valor do elemento de id senha
  document.getElementById('senha').value = '';

}
// Função salvarSenha armazena um valor chamado senha no armazenamento local do navegador usando o formato JSON.
function salvarSenha() {
  localStorage.setItem('senha', JSON.stringify(senha));
}
// Função sucesso
function sucesso() {
  // Verifica se condicaoNome, condicaoEmail, condicaoSenha e condicaoUsuarios são verdadeiras
  if (condicaoNome == true && condicaoEmail == true && condicaoSenha == true && condicaoUsuarios == true) {
    // Se a condição anterior for verdadeira dispara um alert Cadastro realizado com sucesso
    alert('Cadastro realizado com sucesso!');
  }
}
// Função debug/teste para remover itens do array
function removerItem() {
  localStorage.removeItem('nome');
  localStorage.removeItem('usuarios');
  localStorage.removeItem('email');
  localStorage.removeItem('senha');
  const valorRemovido = localStorage.getItem('nome');
  const valorRemovido2 = localStorage.getItem('usuarios');
  const valorRemovido3 = localStorage.getItem('email');
  const valorRemovido4 = localStorage.getItem('senha');
  if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
    console.log('Item removido com sucesso!');
  } else {
    console.log('Erro ao remover o item.');
  }
}
// Exibe no console os arrays
console.log(`Nome: ${nome}`)
console.log(`Email cadastrados: ${emailUsuario}`);
console.log(`Tamanho Email: ${emailUsuario.length}`);
console.log(`Usuários cadastrados: ${usuarios}`);
console.log(`Senha: ${senha}`)
// Função cadastrar executa as funções cadastrarUsuario, salvarUsuarios, salvarEmail, cadastrarNome, salvarNomeUsuario, cadastrarSenha, salvarSenha e sucesso
function cadastrar() {
  cadastrarUsuario();
  salvarUsuarios();
  salvarEmail();
  cadastrarNome();
  salvarNomeUsuario();
  cadastrarSenha();
  salvarSenha();
  sucesso();
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
  // Controla o fluxo dos eventos
  evento.preventDefault();
  // Chama a função cadastrar
  cadastrar();

})