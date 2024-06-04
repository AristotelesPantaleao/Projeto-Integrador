const formulario = document.getElementById('formulario');

const matriculaInstrutor = JSON.parse(localStorage.getItem('matriculaInstrutor') || '[]');
const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]');
const emailInstrutor = JSON.parse(localStorage.getItem('emailInstrutor') || '[]');
const telefoneInstrutor = JSON.parse(localStorage.getItem('telefoneInstrutor') || '[]');

let condicaoNome = false, condicaoEmail = false, condicaoTelefone = false, condicaoMatricula = false;

function cadastroInstrutor() {
    const matricula = document.getElementById('matriculaInstrutor').value;

    if (matriculaInstrutor.includes(matricula)) {
        condicaoMatricula = false;
        document.getElementById('matriculaInstrutor').value = '';
    } else {
        condicaoMatricula = true
        document.getElementById('matriculaInstrutor').value = '';
    }

    const matriculaError = document.getElementById('matriculaError');

    if(JSON.parse(localStorage.getItem('matriculaInstrutor')) !== null){
        matriculaError.textContent = 'Matrícula já cadastrada'
        
        setTimeout(() => {
            matriculaError.textContent = '';
        },3000);
    }else{
        matriculaError.textContent = '';
    }

    const nome = document.getElementById('nomeInstrutor').value;


    if (nomeInstrutor.includes(nome)) {
        condicaoNome = true;
        document.getElementById('nomeInstrutor').value = '';
    } else {
        condicaoNome = true;
        document.getElementById('nomeInstrutor').value = '';
    }


    const email = document.getElementById('emailInstrutor').value;


    if (emailInstrutor.includes(email)) {
        condicaoEmail = false;
        document.getElementById('emailInstrutor').value = '';
    } else {
        condicaoEmail = true;
        document.getElementById('emailInstrutor').value = '';
    }

    const emailError = document.getElementById('emailError');

    if(JSON.parse(localStorage.getItem('emailInstrutor')) !== null){
        emailError.textContent = 'Email já cadastrado'

        setTimeout(() => {
            emailError.textContent = '';
        },3000);
    }else{
        emailError.textContent = '';
    }

    const telefone = document.getElementById('telefoneInstrutor').value;

    if (telefoneInstrutor.includes(telefone)) {
        condicaoTelefone = false
        document.getElementById('telefoneInstrutor').value = '';
    } else {
        condicaoTelefone = true;
        document.getElementById('telefoneInstrutor').value = '';
    }


    const telefoneError = document.getElementById('telefoneError');

    if(JSON.parse(localStorage.getItem('telefoneInstrutor')) !== null){
        telefoneError.textContent = 'Telefone já cadastrado'

        setTimeout(() => {
            telefoneError.textContent = '';
        },3000);
    }else{
        telefoneError.textContent = '';
    }

    if (condicaoMatricula === true && condicaoNome === true && condicaoEmail === true && condicaoTelefone === true) {
        matriculaInstrutor.push(matricula);
        nomeInstrutor.push(nome);
        emailInstrutor.push(email);
        telefoneInstrutor.push(telefone);
        alert('Cadastro efetuado com sucesso!');
    }

}


function salvarMatricula() {
    localStorage.setItem('matriculaInstrutor', JSON.stringify(matriculaInstrutor));
}

function salvarNome() {
    localStorage.setItem('nomeInstrutor', JSON.stringify(nomeInstrutor));
}

function salvarEmail() {
    localStorage.setItem('emailInstrutor', JSON.stringify(emailInstrutor));
}

function salvarTelefone() {
    localStorage.setItem('telefoneInstrutor', JSON.stringify(telefoneInstrutor));
}

// Debug / teste
function removerItem() {
    localStorage.removeItem('matriculaInstrutor');
    localStorage.removeItem('nomeInstrutor');
    localStorage.removeItem('emailInstrutor');
    localStorage.removeItem('telefoneInstrutor');

    const valorRemovido = localStorage.getItem('matriculaInstrutor');
    const valorRemovido2 = localStorage.getItem('nomeInstrutor');
    const valorRemovido3 = localStorage.getItem('emailInstrutor');
    const valorRemovido4 = localStorage.getItem('telefoneInstrutor');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item.');
    }
}

// Debug / teste
console.log(`Matrícula do Instrutor: ${matriculaInstrutor}`);
console.log(`Nome do Instrutor: ${nomeInstrutor}`);
console.log(`Email do Instrutor: ${emailInstrutor}`);
console.log(`Telefone do Instrutor: ${telefoneInstrutor}`);

function cadastro() {
    cadastroInstrutor();
    salvarMatricula();
    salvarNome();
    salvarEmail();
    salvarTelefone();
}

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    cadastro();
})