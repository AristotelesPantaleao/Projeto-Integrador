// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para matriculaInstrutor, nomeInstrutor, emailInstrutor e telefoneInstrutor e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const matriculaInstrutor = JSON.parse(localStorage.getItem('matriculaInstrutor') || '[]');
const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]');
const emailInstrutor = JSON.parse(localStorage.getItem('emailInstrutor') || '[]');
const telefoneInstrutor = JSON.parse(localStorage.getItem('telefoneInstrutor') || '[]');
// cria variaveis condicaoNome, condicaoEmail, condicaoTelefone e condicaoMatricula e atribui o valor false a elas
let condicaoNome = false, condicaoEmail = false, condicaoTelefone = false, condicaoMatricula = false;
// Função cadastroInstrutor
function cadastroInstrutor() {
    // pega o valor do elemento que possui id matriculaInstrutor e atribui a constante matricula
    const matricula = document.getElementById('matriculaInstrutor').value;
    // Verifica se matricula está incluso em matriculaInstrutor
    if (matriculaInstrutor.includes(matricula)) {
        // Se a condição anterior for verdade condicaoMatricula continua false
        condicaoMatricula = false;
        // "Limpa" o valor do elemento de id matriculaInstrutor
        document.getElementById('matriculaInstrutor').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui a condicaoMatricula vira true
        condicaoMatricula = true
        // "Limpa" o valor do elemento de id matriculaInstrutor
        document.getElementById('matriculaInstrutor').value = '';
    }
    // Fornece acesso ao elemento do matriculaError
    const matriculaError = document.getElementById('matriculaError');
    // Verifica se o matriculaInstrutor foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('matriculaInstrutor')) !== null && condicaoMatricula === false){
        matriculaError.textContent = 'Matrícula já cadastrada'
        
        setTimeout(() => {
            matriculaError.textContent = '';
        },3000);
    }else{
        matriculaError.textContent = '';
    }
    // pega o valor do elemento que possui id nomeInstrutor e atribui a constante nome
    const nome = document.getElementById('nomeInstrutor').value;
    // Verifica se nome está incluso no array nomeInstrutor
    if (nomeInstrutor.includes(nome)) {
        // Se a condição anterior for verdadeiro condicaoNome fica true
        condicaoNome = true;
        // 'Limpa' o valor do elemento com id nomeInstrutor
        document.getElementById('nomeInstrutor').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui a condicaoNome vira true
        condicaoNome = true;
        // "Limpa" o valor do elemento de id nomeInstrutor
        document.getElementById('nomeInstrutor').value = '';
    }

    // pega o valor do elemento que possui id emailinstrutor e atribui a constante email
    const email = document.getElementById('emailInstrutor').value;

    // Verifica se email está incluso no array emailInstrutor
    if (emailInstrutor.includes(email)) {
        // Se a condição anterior for verdadeiro condicaoEmail fica false
        condicaoEmail = false;
        // "Limpa" o valor do elemento de id emailInstrutor
        document.getElementById('emailInstrutor').value = '';
    //  Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui a condicaoEmail vira true
        condicaoEmail = true;
        // "Limpa" o valor do elemento de id emailInstrutor
        document.getElementById('emailInstrutor').value = '';
    }
    // Fornece acesso ao elemento do emailError
    const emailError = document.getElementById('emailError');
    // // Verifica se o emailinstrutor foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('emailInstrutor')) !== null && condicaoEmail === false){
        emailError.textContent = 'Email já cadastrado'

        setTimeout(() => {
            emailError.textContent = '';
        },3000);
    }else{
        emailError.textContent = '';
    }
    // pega o valor do elemento que possui id telefoneInstrutor e atribui a constante telefone
    const telefone = document.getElementById('telefoneInstrutor').value;
    // Verifica se telefone está incluso no array telefoneInstrutor
    if (telefoneInstrutor.includes(telefone)) {
        // Se a condição anterior for verdadeira condicaoTelefone fica false
        condicaoTelefone = false
        // "Limpa" o valor do elemento de id telefoneInstrutor
        document.getElementById('telefoneInstrutor').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui a condicaoTelefone vira true
        condicaoTelefone = true;
        // "Limpa" o valor do elemento de id telefoneInstrutor
        document.getElementById('telefoneInstrutor').value = '';
    }

    // Fornece acesso ao elemento do telefoneError
    const telefoneError = document.getElementById('telefoneError');
    // Verifica se o telefoneInstrutor foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('telefoneInstrutor')) !== null && condicaoTelefone === false){
        telefoneError.textContent = 'Telefone já cadastrado'

        setTimeout(() => {
            telefoneError.textContent = '';
        },3000);
    }else{
        telefoneError.textContent = '';
    }
    // Se condicaoMatricula, condicaoNome, condicaoEmail e condicaoTelefone forem verdades, adiciona matricula, nome, email e telefone aos seus respectivos arrays e dispara um alert Cadastro efetuado com sucesso
    if (condicaoMatricula === true && condicaoNome === true && condicaoEmail === true && condicaoTelefone === true) {
        matriculaInstrutor.push(matricula);
        nomeInstrutor.push(nome);
        emailInstrutor.push(email);
        telefoneInstrutor.push(telefone);
        alert('Cadastro efetuado com sucesso!');
    }

}

// Função salvarMatricula armazena um valor chamado matriculaInstrutor no armazenamento local do navegador usando o formato JSON.
function salvarMatricula() {
    localStorage.setItem('matriculaInstrutor', JSON.stringify(matriculaInstrutor));
}
// Função salvarNome armazena um valor chamado nomeInstrutor no armazenamento local do navegador usando o formato JSON.
function salvarNome() {
    localStorage.setItem('nomeInstrutor', JSON.stringify(nomeInstrutor));
}
// Função salvarEmail armazena um valor chamado emailInstrutor no armazenamento local do navegador usando o formato JSON.
function salvarEmail() {
    localStorage.setItem('emailInstrutor', JSON.stringify(emailInstrutor));
}
// Função salvarTelefone armazena um valor chamado telefoneInstrutor no armazenamento local do navegador usando o formato JSON.
function salvarTelefone() {
    localStorage.setItem('telefoneInstrutor', JSON.stringify(telefoneInstrutor));
}

// Função debug/teste para remover itens do array
// function removerItem() {
//     localStorage.removeItem('matriculaInstrutor');
//     localStorage.removeItem('nomeInstrutor');
//     localStorage.removeItem('emailInstrutor');
//     localStorage.removeItem('telefoneInstrutor');

//     const valorRemovido = localStorage.getItem('matriculaInstrutor');
//     const valorRemovido2 = localStorage.getItem('nomeInstrutor');
//     const valorRemovido3 = localStorage.getItem('emailInstrutor');
//     const valorRemovido4 = localStorage.getItem('telefoneInstrutor');

//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null) {
//         console.log('Item removido com sucesso!');
//     } else {
//         console.log('Erro ao remover o item.');
//     }
// }

// Exibe no console os arrays
// console.log(`Matrícula do Instrutor: ${matriculaInstrutor}`);
// console.log(`Nome do Instrutor: ${nomeInstrutor}`);
// console.log(`Email do Instrutor: ${emailInstrutor}`);
// console.log(`Telefone do Instrutor: ${telefoneInstrutor}`);
// Função cadastro executa as funções cadastroInstrutor, salvarMatricula, salvarNome, salvarEmail , salvarTelefone
function cadastro() {
    cadastroInstrutor();
    salvarMatricula();
    salvarNome();
    salvarEmail();
    salvarTelefone();
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
    // Controla o fluxo dos eventos
    evento.preventDefault();
    // Chama a função cadastro
    cadastro();
})