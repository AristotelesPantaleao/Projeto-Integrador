formulario = document.getElementById('formulario');

const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
const senha = JSON.parse(localStorage.getItem('senha') || '[]');

let condicaoValidacao = false;

console.log(`Usuários cadastrados: ${usuarios}`);
console.log(`Senha: ${senha}`);

function validarCadastro() {
  
  const usuario = document.getElementById('usuarioValido').value;
  
  const senhaValida = document.getElementById('senhaValida').value;

  if(usuarios.includes(usuario) && senha.includes(senhaValida)){
    console.log('Usuário entrou');
    if(usuarios.indexOf(usuario) === senha.indexOf(senhaValida)){
      console.log('A senha é desse Usuário');
      condicaoValidacao = true;
    }else{
      console.log('A senha não é desse Usuário');
      condicaoValidacao = false;
    }
  }


  document.getElementById('usuarioValido').value = '';

  document.getElementById('senhaValida').value = '';
  
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  validarCadastro();

  if(condicaoValidacao === true){
    alert('Login efetuado com sucesso!')
    window.location.href = 'menu.html';
  }else{
    alert('Usuário ou Senha incorreto!');
  }
})
