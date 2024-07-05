// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para matriculaDoAluno, nomeDoAluno, emailDoAluno e telefoneDoAluno e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const matriculaDoAluno = JSON.parse(localStorage.getItem('matriculaDoAluno') || '[]');
const nomeDoAluno = JSON.parse(localStorage.getItem('nomeDoAluno') || '[]');
const emailDoAluno = JSON.parse(localStorage.getItem('emailDoAluno') || '[]');
const telefoneDoAluno = JSON.parse(localStorage.getItem('telefoneDoAluno') || '[]');
// cria variaveis condicaoMatriculaAluno, condicaoNomeDoAluno, condicaoEmailDoAluno e condicaoTelefoneDoAluno e atribui o valor false a elas
let condicaoMatriculaAluno = false, condicaoNomeDoAluno = false, condicaoEmailDoAluno = false, condicaoTelefoneDoAluno = false;
// Função cadastrarAluno
function cadastrarAluno(){
    // pega o valor do elemento que possui id matriculaAluno e atribui a constante matriculaAluno
    const matriculaAluno = document.getElementById('matriculaAluno').value;
    // Verifica se matriculaAluno está incluso no array matriculaDoAluno
    if(matriculaDoAluno.includes(matriculaAluno)){
        // Se a condição anterior for verdadeira condicaoMatriculaAluno continua false
        condicaoMatriculaAluno = false;
        // "limpa" o valor do elemento de id matriculaAluno
        document.getElementById('matriculaAluno').value = '';
    // Se a condição anterior for falsa entra aqui
    }else{
        // Se entrar aqui condicaoMatriculaAluno vira true
        condicaoMatriculaAluno = true;
        // "Limpa" o valor do elemento de id matriculaAluno
        document.getElementById('matriculaAluno').value = '';
    }
    // Fornece acesso ao elemento do matriculaError
    const matriculaError = document.getElementById('matriculaError');
    // Verifica se a matriculaDoAluno foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('matriculaDoAluno')) !== null && condicaoMatriculaAluno === false){
        matriculaError.textContent = 'Matrícula já cadastrada';

        setTimeout(() => {
            matriculaError.textContent = '';
        },3000);
    }else{
        matriculaError.textContent = '';
    }
    // pega o valor do elemento que possui id nomeAluno e atribui a constante nomeAluno
    const nomeAluno = document.getElementById('nomeAluno').value;
    // Verifica se nomeAluno está incluso no array nomeDoAluno
    if(nomeDoAluno.includes(nomeAluno)){
        // Se a condição anterior for verdadeira condicaoNomeDoAluno vira true
        condicaoNomeDoAluno = true;
        // "Limpa" o valor do elemento de id nomeAluno
        document.getElementById('nomeAluno').value = '';
    // Se a condição anterior for falsa entra aqui
    }else{
        // Se entrar aqui a condicaoNomeDoAluno vira true
        condicaoNomeDoAluno = true;
        // "Limpa" o valor do elemento de id nomeAluno
        document.getElementById('nomeAluno').value = '';
    }
    // pega o valor do elemento que possui id emailAluno e atribui a constante emailAluno
    const emailAluno = document.getElementById('emailAluno').value;
    // Verifica se emailAluno está incluso no array emailDoAluno
    if (emailDoAluno.includes(emailAluno)) {
        // Se a condição anterior for verdadeira condicaoEmailDoAluno continua false
        condicaoEmailDoAluno = false;
        // "Limpa" o valor do elemento de id emailAluno
        document.getElementById('emailAluno').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoEmailDoAluno vira true
        condicaoEmailDoAluno = true;
        // "Limpa" o valor do elemento de id emailAluno
        document.getElementById('emailAluno').value = '';
    }
    // Fornece acesso ao elemento do emailError
    const emailError = document.getElementById('emailError');
    // Verifica se o emailDoALuno foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('emailDoAluno')) !== null && condicaoEmailDoAluno === false){
        emailError.textContent = 'Email já cadastrado'

        setTimeout(() => {
            emailError.textContent = '';
        },3000);
    }else{
        emailError.textContent = '';
    }
    // pega o valor do elemento que possui id telefoneAluno e atribui a constante telefoneAluno
    const telefoneAluno = document.getElementById('telefoneAluno').value;
    // Verifica se telefoneAluno está incluso no array telefoneDoAluno
    if (telefoneDoAluno.includes(telefoneAluno)) {
        // Se a condição anterior for verdadeira condicaoTelefoneDoAluno continua false
        condicaoTelefoneDoAluno = false
        // "Limpa" o valor do elemento de id telefoneAluno
        document.getElementById('telefoneAluno').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoTelefoneDoAluno vira true
        condicaoTelefoneDoAluno = true;
        // "Limpa" o valor do elemento de id telefoneAluno
        document.getElementById('telefoneAluno').value = '';
    }
    // Fornece acesso ao elemento do telefoneError
    const telefoneError = document.getElementById('telefoneError');
    // Verifica se o telefoneDoAluno foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('telefoneDoAluno')) !== null && condicaoTelefoneDoAluno === false){
        telefoneError.textContent = 'Telefone já cadastrado'

        setTimeout(() => {
            telefoneError.textContent = '';
        },3000);
    }else{
        telefoneError.textContent = '';
    }
    // Verifica se condicaoMatriculaAluno, condicaoNomeDoALuno/ condicaoEmailDoALuno e condicaoTelefoneDoAluno são verdadeiras
    if(condicaoMatriculaAluno === true && condicaoNomeDoAluno === true && condicaoEmailDoAluno === true && condicaoTelefoneDoAluno === true){
        // Se a condição anterior for verdadeira, adiciona matriculaAluno, nomeAluno, emailAluno e telefoneAluno aos seus respectivos arrays e dispara um alert Cadastro efetuado com sucesso
        matriculaDoAluno.push(matriculaAluno);
        nomeDoAluno.push(nomeAluno);
        emailDoAluno.push(emailAluno);
        telefoneDoAluno.push(telefoneAluno);
        alert('Cadastro efetuado com sucesso!');
    }

}
// Função salvarMatriculaAluno armazena um valor chamado matriculaDoALuno no armazenamento local do navegador usando o formato JSON.
function salvarMatriculaAluno() {
    localStorage.setItem('matriculaDoAluno', JSON.stringify(matriculaDoAluno));
}
// Função salvarNomeAluno armazena um valor chamado nomeDoAluno no armazenamento local do navegador usando o formato JSON.
function salvarNomeAluno() {
    localStorage.setItem('nomeDoAluno', JSON.stringify(nomeDoAluno));
}
// Função salvarEmailAluno armazena um valor chamado emailDoAluno no armazenamento local do navegador usando o formato JSON.
function salvarEmailAluno() {
    localStorage.setItem('emailDoAluno', JSON.stringify(emailDoAluno));
}
// Função salvarTelefoneAluno armazena um valor chamado telefoneDoAluno no armazenamento local do navegador usando o formato JSON.
function salvarTelefoneAluno(){
    localStorage.setItem('telefoneDoAluno', JSON.stringify(telefoneDoAluno));
}
// Função debug/teste para remover itens do array
// function removerItem() {
//     localStorage.removeItem('matriculaDoAluno');
//     localStorage.removeItem('nomeDoAluno');
//     localStorage.removeItem('emailDoAluno');
//     localStorage.removeItem('telefoneDoAluno')

//     const valorRemovido = localStorage.getItem('matriculaDoAluno');
//     const valorRemovido2 = localStorage.getItem('nomeDoAluno');
//     const valorRemovido3 = localStorage.getItem('emailDoAluno');
//     const valorRemovido4 = localStorage.getItem('telefoneDoAluno');

//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
//         console.log('Item removido com sucesso!');
//     } else {
//         console.log('Erro ao remover o item.');
//     }
// }
// Exibe no console os arrays
// console.log(`Matrícula do Aluno: ${matriculaDoAluno}`);
// console.log(`Nome do Aluno: ${nomeDoAluno}`);
// console.log(`Email do Aluno: ${emailDoAluno}`);
// console.log(`Telefone do Aluno: ${telefoneDoAluno}`);
// Função cadastro executa as funções cadastrarAluno, salvarMatriculaAluno, salvarNomeAluno, salvarEmailAluno e salvarTelefoneAluno
function cadastro() {
    cadastrarAluno();
    salvarMatriculaAluno();
    salvarNomeAluno();
    salvarEmailAluno();
    salvarTelefoneAluno(); 
}

// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento){
    // Controla o fluxo dos eventos
    evento.preventDefault();
    // Chama a função cadastro
    cadastro();
})