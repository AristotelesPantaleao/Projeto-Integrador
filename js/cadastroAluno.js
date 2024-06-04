const formulario = document.getElementById('formulario');

const matriculaDoAluno = JSON.parse(localStorage.getItem('matriculaDoAluno') || '[]');
const nomeDoAluno = JSON.parse(localStorage.getItem('nomeDoAluno') || '[]');
const emailDoAluno = JSON.parse(localStorage.getItem('emailDoAluno') || '[]');
const telefoneDoAluno = JSON.parse(localStorage.getItem('telefoneDoAluno') || '[]');

let condicaoMatriculaAluno = false, condicaoNomeDoAluno = false, condicaoEmailDoAluno = false, condicaoTelefoneDoAluno = false;

function cadastrarAluno(){
    const matriculaAluno = document.getElementById('matriculaAluno').value;

    if(matriculaDoAluno.includes(matriculaAluno)){
        condicaoMatriculaAluno = false;
        document.getElementById('matriculaAluno').value = '';
    }else{
        condicaoMatriculaAluno = true;
        document.getElementById('matriculaAluno').value = '';
    }

    const matriculaError = document.getElementById('matriculaError');

    if(JSON.parse(localStorage.getItem('matriculaDoAluno')) !== null){
        matriculaError.textContent = 'Matrícula já cadastrada';

        setTimeout(() => {
            matriculaError.textContent = '';
        },3000);
    }else{
        matriculaError.textContent = '';
    }

    const nomeAluno = document.getElementById('nomeAluno').value;

    if(nomeDoAluno.includes(nomeAluno)){
        condicaoNomeDoAluno = true;
        document.getElementById('nomeAluno').value = '';
    }else{
        condicaoNomeDoAluno = true;
        document.getElementById('nomeAluno').value = '';
    }

    const emailAluno = document.getElementById('emailAluno').value;

    if (emailDoAluno.includes(emailAluno)) {
        condicaoEmailDoAluno = false;
        document.getElementById('emailAluno').value = '';
    } else {
        condicaoEmailDoAluno = true;
        document.getElementById('emailAluno').value = '';
    }

    const emailError = document.getElementById('emailError');

    if(JSON.parse(localStorage.getItem('emailDoAluno')) !== null){
        emailError.textContent = 'Email já cadastrado'

        setTimeout(() => {
            emailError.textContent = '';
        },3000);
    }else{
        emailError.textContent = '';
    }

    const telefoneAluno = document.getElementById('telefoneAluno').value;

    if (telefoneDoAluno.includes(telefoneAluno)) {
        condicaoTelefoneDoAluno = false
        document.getElementById('telefoneAluno').value = '';
    } else {
        condicaoTelefoneDoAluno = true;
        document.getElementById('telefoneAluno').value = '';
    }

    const telefoneError = document.getElementById('telefoneError');

    if(JSON.parse(localStorage.getItem('telefoneDoAluno')) !== null){
        telefoneError.textContent = 'Telefone já cadastrado'

        setTimeout(() => {
            telefoneError.textContent = '';
        },3000);
    }else{
        telefoneError.textContent = '';
    }

    if(condicaoMatriculaAluno === true && condicaoNomeDoAluno === true && condicaoEmailDoAluno === true && condicaoTelefoneDoAluno === true){
        matriculaDoAluno.push(matriculaAluno);
        nomeDoAluno.push(nomeAluno);
        emailDoAluno.push(emailAluno);
        telefoneDoAluno.push(telefoneAluno);
        alert('Cadastro efetuado com sucesso!');
    }

}

function salvarMatriculaAluno() {
    localStorage.setItem('matriculaDoAluno', JSON.stringify(matriculaDoAluno));
}

function salvarNomeAluno() {
    localStorage.setItem('nomeDoAluno', JSON.stringify(nomeDoAluno));
}

function salvarEmailAluno() {
    localStorage.setItem('emailDoAluno', JSON.stringify(emailDoAluno));
}

function salvarTelefoneAluno(){
    localStorage.setItem('telefoneDoAluno', JSON.stringify(telefoneDoAluno));
}

function removerItem() {
    localStorage.removeItem('matriculaDoAluno');
    localStorage.removeItem('nomeDoAluno');
    localStorage.removeItem('emailDoAluno');
    localStorage.removeItem('telefoneDoAluno')

    const valorRemovido = localStorage.getItem('matriculaDoAluno');
    const valorRemovido2 = localStorage.getItem('nomeDoAluno');
    const valorRemovido3 = localStorage.getItem('emailDoAluno');
    const valorRemovido4 = localStorage.getItem('telefoneDoAluno');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item.');
    }
}

console.log(`Matrícula do Aluno: ${matriculaDoAluno}`);
console.log(`Nome do Aluno: ${nomeDoAluno}`);
console.log(`Email do Aluno: ${emailDoAluno}`);
console.log(`Telefone do Aluno: ${telefoneDoAluno}`);

function cadastro() {
    cadastrarAluno();
    salvarMatriculaAluno();
    salvarNomeAluno();
    salvarEmailAluno();
    salvarTelefoneAluno(); 
}


formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    cadastro();
})