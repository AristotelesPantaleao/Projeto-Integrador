// Recupera dados do localStorage para nome, email, usuários e senhas
const nome = JSON.parse(localStorage.getItem('nome') || '[]');
const emailUsuario = JSON.parse(localStorage.getItem('email') || '[]');
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
const senhas = JSON.parse(localStorage.getItem('senhas') || '[]');

const cadastroBtn = document.getElementById('cadastro');
const loginBtn = document.getElementById('login');
const container = document.getElementById('container');
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');

// Adiciona eventos para alternar entre os formulários de cadastro e login
cadastroBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Variáveis de controle
let condicaoNome = false, condicaoEmail = false, condicaoUsuarios = false, condicaoSenha = false;
let condicaoValidacao = false;

// Função para cadastrar um novo usuário
function cadastrarUsuario() {
    const nomeUsuario = document.getElementById('nomeCompleto').value;
    const usuario = document.getElementById('cadastroUsuario').value;
    const email = document.getElementById('email').value;
    const senhaUsuario = document.getElementById('cadastroSenha').value;

    // Verificações de duplicidade
    if (usuarios.includes(usuario)) {
        condicaoUsuarios = false;
        alert('Usuário já cadastrado');
    } else {
        condicaoUsuarios = true;
    }

    if (emailUsuario.includes(email)) {
        condicaoEmail = false;
        alert('Email já cadastrado');
    } else {
        condicaoEmail = true;
    }

    if (nomeUsuario !== '' && condicaoUsuarios && condicaoEmail) {
        nome.push(nomeUsuario);
        usuarios.push(usuario);
        emailUsuario.push(email);
        senhas.push(senhaUsuario);

        localStorage.setItem('nome', JSON.stringify(nome));
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('email', JSON.stringify(emailUsuario));
        localStorage.setItem('senhas', JSON.stringify(senhas));

        alert('Usuário cadastrado com sucesso!');
        document.getElementById('nomeCompleto').value = '';
        document.getElementById('cadastroUsuario').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cadastroSenha').value = '';
    }
}

// Função para validar o login
function validarCadastro() {
    const usuario = document.getElementById('loginUsuario').value;
    const senhaValida = document.getElementById('loginSenha').value;

    if (usuarios.includes(usuario) && senhas.includes(senhaValida)) {
        if (usuarios.indexOf(usuario) === senhas.indexOf(senhaValida)) {
            condicaoValidacao = true;
        } else {
            condicaoValidacao = false;
        }
    } else {
        condicaoValidacao = false;
    }

    document.getElementById('loginUsuario').value = '';
    document.getElementById('loginSenha').value = '';
}

// Evento de enviar o formulário de login
loginForm.addEventListener('submit', function (evento) {
    evento.preventDefault();
    validarCadastro();

    if (condicaoValidacao === true) {
        window.open('../html/menu.html');// Abrir a página de menu após o login ser efetuado.
    } else {
        alert('Usuário ou Senha incorretos!');
    }
});

// Evento de enviar o formulário de cadastro
cadastroForm.addEventListener('submit', function (evento) {
    evento.preventDefault();
    cadastrarUsuario();
});

// console.log(`Usuários Cadastrados: ${usuarios}`)
// console.log(`Senhas: ${senhas}`)

// console.log(`Nome: ${nome}`)
// console.log(`Email Cadastrado: ${emailUsuario}`)
// console.log(`Tamanho do Email: ${emailUsuario.length}`)
// console.log(`Usuarios: ${usuarios}`)
// console.log(`Senhas: ${senhas}`)

// Função debug/teste para remover itens do array
// function removerItem() {
//     localStorage.removeItem('nome');
//     localStorage.removeItem('usuarios');
//     localStorage.removeItem('email');
//     localStorage.removeItem('senhas');
//     const valorRemovido = localStorage.getItem('nome');
//     const valorRemovido2 = localStorage.getItem('usuarios');
//     const valorRemovido3 = localStorage.getItem('email');
//     const valorRemovido4 = localStorage.getItem('senhas');
//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
//       console.log('Item removido com sucesso!');
//     } else {
//       console.log('Erro ao remover o item.');
//     }
//   }