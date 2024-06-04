const formulario = document.getElementById('formulario');
// Dados de login válidos armazenados localmente
const nome = JSON.parse(localStorage.getItem('nome') || '[]');
const emailUsuario = JSON.parse(localStorage.getItem('email') || '[]');
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
const senha = JSON.parse(localStorage.getItem('senha') || '[]');

let condicaoNome = false, condicaoEmail = false, condicaoUsuarios = false, condicaoSenha = false;

// Função cadastrar Nome;
function cadastrarNome() {
  const nomeUsuario = document.getElementById('nomeCompleto').value;
  if(condicaoUsuarios == true && condicaoEmail == true && nomeUsuario !== ''){
    condicaoNome = true;
    nome.push(nomeUsuario);
  }

  document.getElementById('nomeCompleto').value = '';

}

// Função para salvar os nomes no localStorage
function salvarNomeUsuario() {
  localStorage.setItem('nome', JSON.stringify(nome));
}

// Função cadastrar Usuário
function cadastrarUsuario() {
  const usuario = document.getElementById('usuario').value;

  if(usuarios.includes(usuario)){
    alert('Usuário já cadastrado');
    condicaoUsuarios = false;
  }else{
    condicaoUsuarios = true;
  }

  cadastrarEmail();

  if(condicaoEmail == true && condicaoUsuarios == true && usuario !== ""){
    usuarios.push(usuario);
  }

  document.getElementById('usuario').value = '';
}

// Função para salvar os usuarios no localStorage
function salvarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função cadastrar Email
function cadastrarEmail() {
  const email = document.getElementById('email').value;

  if (emailUsuario.includes(email)) {
    alert('Email já cadastrado');
    condicaoEmail = false;
  } else {
    condicaoEmail = true
    if (condicaoEmail == true && condicaoUsuarios == true && email !== '') {
      emailUsuario.push(email);
    }
  }
  document.getElementById('email').value = '';
}

// Função para salvar os emails no localStorage
function salvarEmail() {
  localStorage.setItem('email', JSON.stringify(emailUsuario));
}

// Função cadastrar Senha;
function cadastrarSenha() {
  const senhaUsuario = document.getElementById('senha').value;

  if (!senha.includes(senhaUsuario)) {
    condicaoSenha = true;
    if (condicaoSenha == true && condicaoEmail == true && condicaoUsuarios == true && senhaUsuario !== '') {
      senha.push(senhaUsuario);
    }
  } else {
    condicaoSenha = true;
    if (condicaoSenha == true && condicaoEmail == true && condicaoUsuarios == true && senhaUsuario !== '') {
      senha.push(senhaUsuario);
    }
  }

  document.getElementById('senha').value = '';

}

// Função para salvar as senhas no localStorage
function salvarSenha() {
  localStorage.setItem('senha', JSON.stringify(senha));
}

function sucesso() {
  if (condicaoNome == true && condicaoEmail == true && condicaoSenha == true && condicaoUsuarios == true) {
    alert('Cadastro realizado com sucesso!');
  }
}


// Debug / teste
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

console.log(`Nome: ${nome}`)
console.log(`Email cadastrados: ${emailUsuario}`);
console.log(`Tamanho Email: ${emailUsuario.length}`);
console.log(`Usuários cadastrados: ${usuarios}`);
console.log(`Senha: ${senha}`)

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

formulario.addEventListener('submit', function (evento){
  evento.preventDefault();

  cadastrar();

})