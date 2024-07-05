// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para codigoDoCurso, nomeDoCurso, descricaoDoCurso e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const codigoDoCurso = JSON.parse(localStorage.getItem('codigoDoCurso') || '[]');
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
const descricaoDoCurso = JSON.parse(localStorage.getItem('descricaoDoCurso') || '[]');
// cria variaveis condicaoCodigo, condicaoNome e condicaoDescricao e atribui o valor false a elas
let condicaoCodigo = false, condicaoNome = false, condicaoDescricao = false;
// Função cadastrarCurso
function cadastrarCurso() {
    // pega o valor do elemento que possui id codigoCurso e atribui a constante codigoCurso
    const codigoCurso = document.getElementById('codigoCurso').value;
    // Verifica se codigoCurso está incluso no array codigoDoCurso
    if (codigoDoCurso.includes(codigoCurso)) {
        // Se a condição for verdadeira condicaoCodigo continua false
        condicaoCodigo = false
        // "Limpa" o valor do elemento de id codigoCurso
        document.getElementById('codigoCurso').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoCodigo vira true
        condicaoCodigo = true;
        // "Limpa" o valor do elemento codigoCurso
        document.getElementById('codigoCurso').value = '';
    }

    // Fornece acesso ao elemento do codigoError
    const codigoError = document.getElementById('codigoError');
    // Verifica se o codigoCurso foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if(JSON.parse(localStorage.getItem('codigoCurso')) !== null && condicaoCodigo === false){
        codigoError.textContent = 'Código já cadastrada'
        
        setTimeout(() => {
            codigoError.textContent = '';
        },3000);
    }else{
        codigoError.textContent = '';
    }
    // pega o valor do elemento que possui id nomeCurso e atribui a constante nomeCurso
    const nomeCurso = document.getElementById('nomeCurso').value;
    // Verifica se nomeCurso está incluso no array nomeDoCurso
    if (nomeDoCurso.includes(nomeCurso)) {
        // Se a condição anterior for verdadeira condicaoNome vira true
        condicaoNome = true
        // "Limpa" o valor do elemento de id nomeCurso
        document.getElementById('nomeCurso').value = '';
    // Se a condição anterior for falsa entra aqui
    } else {
        // Se entrar aqui condicaoNome vira true
        condicaoNome = true;
        // "Limpa" o valor do elemento de id nomeCurso
        document.getElementById('nomeCurso').value = '';
    }
     // pega o valor do elemento que possui id floatingTextarea2 e atribui a constante descricaoCurso
    const descricaoCurso = document.getElementById('floatingTextarea2').value;
    // Verifica se descricaoCurso é vazia
    if(descricaoCurso === ''){
        // Se a condição anterior for verdadeira condicaoDescricao continua false
        condicaoDescricao = false;
        // "Limpa" o valor do elemento de id floatingTextarea2
        document.getElementById('floatingTextarea2').value = '';
    // Se a condição anterior for falsa entra aqui
    }else{
        // Se entrar aqui condicaoDescricao vira true
        condicaoDescricao = true;
        // "Limpa" o valor do elemento de id floatingTextarea2
        document.getElementById('floatingTextarea2').value = '';
    }
    // Verifica se condicaoCodigo, condicaoNome e condicaoDescricao são verdadeiras
    if (condicaoCodigo === true && condicaoNome === true && condicaoDescricao === true) {
        // Se a condição anterior for verdadeira adiciona codigoCurso, nomeCurso e descricaoCurso a seus respectivos arrays e dispara um alert Cadastro efetuado com sucesso
        codigoDoCurso.push(codigoCurso);
        nomeDoCurso.push(nomeCurso);
        descricaoDoCurso.push(descricaoCurso);
        alert('Cadastro efetuado com sucesso!');
    }

}
// Função salvarCodigoCurso armazena um valor chamado codigoDoCurso no armazenamento local do navegador usando o formato JSON.
function salvarCodigoCurso() {
    localStorage.setItem('codigoDoCurso', JSON.stringify(codigoDoCurso));
}
// Função salvarNomeCurso armazena um valor chamado nomeDoCurso no armazenamento local do navegador usando o formato JSON.
function salvarNomeCurso() {
    localStorage.setItem('nomeDoCurso', JSON.stringify(nomeDoCurso));
}
// Função salvarDescricaoCurso armazena um valor chamado descricaoDoCurso no armazenamento local do navegador usando o formato JSON.
function salvarDescricaoCurso() {
    localStorage.setItem('descricaoDoCurso', JSON.stringify(descricaoDoCurso));
}
// Função debug/teste para remover itens do array
// function removerItem() {
//     localStorage.removeItem('codigoDoCurso');
//     localStorage.removeItem('nomeDoCurso');
//     localStorage.removeItem('descricaoDoCurso');

//     const valorRemovido = localStorage.getItem('codigoDoCurso');
//     const valorRemovido2 = localStorage.getItem('nomeDoCurso');
//     const valorRemovido3 = localStorage.getItem('descricaoDoCurso');

//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null) {
//         console.log('Item removido com sucesso!');
//     } else {
//         console.log('Erro ao remover o item.');
//     }
// }
// Exibe no console os arrays
// console.log(`Código do Curso: ${codigoDoCurso}`);
// console.log(`Nome do Curso: ${nomeDoCurso}`);
// console.log(`Descrição do Curso: ${descricaoDoCurso}`);
// Função cadastro executa as funções cadastrarCurso, salvarCodigoCurso, salvarNomeCurso, salvarDescricaoCurso
function cadastro() {
    cadastrarCurso();
    salvarCodigoCurso();
    salvarNomeCurso();
    salvarDescricaoCurso();
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
    // Controla o fluxo dos eventos
    evento.preventDefault();
    // Chama a função cadastro
    cadastro();
})