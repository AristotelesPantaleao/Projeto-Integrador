// Fornece acesso ao elemento do formulario.
const formulario = document.getElementById('formulario');
// Recuperam dados do localStorage para codigoDaTurma, nomeDoCurso e nomeDoAluno, opcaoCursoSelecionada e opcaoAlunosSelecionados e convertem em objetos javascript, se os dados não existirem no localStorage, arrays vazios serão usados como valores padrão.
const codigoDaTurma = JSON.parse(localStorage.getItem('codigoDaTurma') || '[]');
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
const nomeDoAluno = JSON.parse(localStorage.getItem('nomeDoAluno') || '[]');
const opcaoCursoSelecionada = JSON.parse(localStorage.getItem('opcaoCursoSelecionada') || '[]');
const opcaoAlunosSelecionados = JSON.parse(localStorage.getItem('opcaoAlunosSelecionados') || '[]');
// cria variaveis condicaoCodigo, condicaoCurso e condicaoAluno e selectCriado e atribui o valor false a elas
let condicaoCodigo = false, condicaoCurso = false, condicaoAluno = false, selectCriado = false;

const botao2 = document.getElementById('botao2');
// função criarSelect
function criarSelect() {
    //Verifica se selectCriado não é false
    if (!selectCriado) {
        // Seleciona o elemento moda-body e atribui a uma constante
        const selectModalBody = document.querySelector('.modal-body');
        // Cria o elemento select
        const select = document.createElement('select');
        // Adiciona uma classe ao select
        select.className = 'form-select';
        // Adiciona um id ao select
        select.id = 'nomeCurso';
        // Adiciona o required ao select
        select.required = true;
        // Adiciona um estilo ao select
        select.style.marginBottom = '10px';
        // Adiciona atributo ao select
        select.setAttribute('aria-label', 'Default select example');
        // Adiciona selece ao selectModalBody
        selectModalBody.appendChild(select);
        // Cria o elemento option
        const opcao = document.createElement('option');
        // Define essa opção como padrão
        opcao.selected = true;
        // Texto da opção
        opcao.textContent = 'Selecione o Curso:';
        // ADiciona opcao ao select
        select.appendChild(opcao);
        // Cria no select todas as opções de nomeCurso
        for (let indice = 0; indice < nomeDoCurso.length; indice++) {
            const opcao = document.createElement('option');
            opcao.value = nomeDoCurso[indice];
            opcao.textContent = nomeDoCurso[indice];
            select.appendChild(opcao);
        }
        // Cria outro select
        const select2 = document.createElement('select');
        // Adiciona uma classe a esse select
        select2.className = 'form-select';
        // Adiciona um id a esse select
        select2.id = 'nomeDosAlunos';
        // Adiciona o required a esse select
        select2.required = true;
        // Adiciona um estilo a esse select
        select2.style.marginBottom = '10px';
        // Adiciona que multiplas opções podem ser selecionadas a esse select
        select2.multiple = true;
        // Adiciona atributo a esse select
        select2.setAttribute('aria-label', 'Multiple select example');
        // Adiciona select2 ao selectModalBody
        selectModalBody.appendChild(select2);
        // Cria o elemento option
        const opcao2 = document.createElement('option');
        // Não define opção padrão selecionada
        opcao2.selected = false;
        // Texto da opção
        opcao2.textContent = 'Selecione os Alunos:';
        // Adiciona opcao2 ao select2
        select2.appendChild(opcao2);
        // Cria no select todas as opções de nomeAluno
        for (let indice = 0; indice < nomeDoAluno.length; indice++) {
            const opcao = document.createElement('option');
            opcao.value = nomeDoAluno[indice];
            opcao.textContent = nomeDoAluno[indice]
            select2.appendChild(opcao);
        }
        // Atribui true a selectCriado
        selectCriado = true;
    }
}
// Função de adicionar a Opção do Curso
function adicionarOpcaoCurso() {
    // pega o valor do elemento que possui id nomeCurso e atribui a constante opcaoCurso
    const opcaoCurso = document.getElementById('nomeCurso').value;
    // Verifica se a opcaoCurso é estritamente diferente de Selecione o curso
    if (opcaoCurso !== 'Selecione o Curso') {
        // Se a condição anterior for verdadeira condicaoCurso vira true
        condicaoCurso = true;
        // Verifica se condicaoCurso, condicaoCodigo e condicaoAluno são true
        if (condicaoCurso === true && condicaoCodigo === true && condicaoAluno === true) {
            // Se a condição anterior for verdadeira adiciona opcaoCurso ao array.
            opcaoCursoSelecionada.push(opcaoCurso);
            // Faz com que nomeCruso volte ao valor padrão.
            document.getElementById('nomeCurso').value = 'Selecione o Curso:';
        }
        // Verifica se a opcaoCurso é estritamente igual a Selecione o Curso
    } else if (opcaoCurso === 'Selecione o Curso') {
        // Se a condição anterior for verdadeira condicaoCurso fica false
        condicaoCurso = false
        // Verifica se a condicaoCurso é false
        if (condicaoCurso === false) {
            // Se a condição anterior for verdadeira dispara um alert.
            alert('Por favor selecione um Curso')
        }
    }
}
// Função adicionar opcaoAlunos
function adicionarOpcaoAlunos() {
    // Fornece acesso ao elemento nomeDosAlunos.
    const nomeDosAlunos = document.getElementById('nomeDosAlunos');
    // Pega a opção selecionada.
    const opcaoSelecionada = nomeDosAlunos.selectedOptions;
    // Percorre cada elemento de opcaoSelecionada
    for (let indice = 0; indice < opcaoSelecionada.length; indice++) {
        // Seleciona um valor especifico do array e armazena na constante o indice determina qual elemento do array será selecionado
        const opcao = opcaoSelecionada[indice];
        // Verifica se a opção selecionada é estritamente igual a Selecione os Alunos
        if (opcao.value === 'Selecione os Alunos:') {
            // Se a condição anterior for verdadeira condicaoAluno continua false
            condicaoAluno = false;
            // Verifica se a condicaoAluno é estritamente igual a false
            if (condicaoAluno === false) {
                // Se a condição anterior for verdadeira dispara um alert.
                alert('Por favor selecione um ou mais alunos');
            }
            // Se a condição anterior for falsa entra aqui
        } else {
            // Se entrar aqui a condicaoAluno viar true
            condicaoAluno = true;
            // Verifica se a condicaoAluno é true
            if (condicaoAluno === true) {
                opcaoAlunosSelecionados.push(`${indice + 1}-${opcao.value}`);
            }
        }
    }
    // Faz com que o valor de nomeDosAlunos volte ao padrão
    document.getElementById('nomeDosAlunos').value = 'Selecione os Alunos:';
}
// Função de cadastroTurma
function cadastroTurma() {
    // pega o valor do elemento que possui id codigoTurma e atribui a constante codigoTurma
    const codigoTurma = document.getElementById('codigoTurma').value;
    // Verifica se o codigoTurma esta incluso no array codigoDaTurma
    if (codigoDaTurma.includes(codigoTurma)) {
        // Se a condição anterior for verdadeira a condicaoCodigo continua como false
        condicaoCodigo = false;
        // "Limpa" o valor do elemento com id codigoTurma
        document.getElementById('codigoTurma').value = '';
        // Se a condição for falsa quer dizer que codigoTurma não está incluso no array codigoDaTurma
    } else {
        // Se entrar nessa condição a condicaoCodigo vira true.
        condicaoCodigo = true;
        // "Limpa" o valor do elemento com id codigoTurma
        document.getElementById('codigoTurma').value = '';
    }
    // Fornece acesso ao elemento do codigoError
    const codigoError = document.getElementById('codigoError');
    // Verifica se o códigoDaTurma foi cadastrado e retorna uma mensagem de erro durante 3 segundos
    if (JSON.parse(localStorage.getItem('codigoDaTurma')) !== null && condicaoCodigo === false) {
        codigoError.textContent = 'Código já cadastrada'

        setTimeout(() => {
            codigoError.textContent = '';
        }, 3000);
    } else {
        codigoError.textContent = '';
    }

    adicionarOpcaoAlunos();
    adicionarOpcaoCurso();
    // Se as condicaoCodigo, condicaoTurma e condicaoEmail forem verdadeiras, adiciona codigoTurma ao array codigoDaturma e dispara um alert Cadastro efetuado com sucesso.
    if (condicaoCodigo === true && condicaoCurso === true && condicaoAluno === true) {
        codigoDaTurma.push(codigoTurma);
        alert('Cadastro efetuado com sucesso!');
    }
}

// Função salvarCodigoTurma armazena um valor chamado codigoDaTurma no armazenamento local do navegador usando o formato JSON.
function salvarCodigoTurma() {
    localStorage.setItem('codigoDaTurma', JSON.stringify(codigoDaTurma));
}
// Função salvarOpcaoCurso armazena um valor chamado opcaoCursoSelecionada no armazenamento local do navegador usando o formato JSON.
function salvarOpcaoCurso() {
    localStorage.setItem('opcaoCursoSelecionada', JSON.stringify(opcaoCursoSelecionada));
}
// Função salvarOpcaoAlunos armazena um valor chamado opcaoAlunosSelecionados no armazenamento local do navegador usando o formato JSON.
function salvarOpcaoAlunos() {
    localStorage.setItem('opcaoAlunosSelecionados', JSON.stringify(opcaoAlunosSelecionados));
}
// Função de teste/debug para remover os Itens dos arrays
// function removerItem() {
//     localStorage.removeItem('codigoDaTurma');
//     localStorage.removeItem('opcaoCursoSelecionada');
//     localStorage.removeItem('opcaoAlunosSelecionados');

//     const valorRemovido = localStorage.getItem('codigoDaTurma');
//     const valorRemovido2 = localStorage.getItem('opcaoCursoSelecionada');
//     const valorRemovido3 = localStorage.getItem('opcaoAlunosSelecionados');


//     if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null) {
//         console.log('Item removido com sucesso!');
//     } else {
//         console.log('Erro ao remover o item');
//     }
// }
// Exibir os arrays no console
// console.log(`Código da Turma: ${codigoDaTurma}`);
// console.log(`Nome do Curso: ${nomeDoCurso}`);
// console.log(`Nome do Aluno: ${nomeDoAluno}`);
// console.log(`Opção Curso Selecionada: ${opcaoCursoSelecionada}`);
// console.log(`Opção Alunos Selecionados: ${opcaoAlunosSelecionados}`);
// Função cadastro executa as funções cadastroTurma, salvarCodigoTurma, salvarNomeTurma e salvarEmailTurma
function cadastro() {
    cadastroTurma();
    salvarCodigoTurma();
    salvarOpcaoCurso();
    salvarOpcaoAlunos();
}
// Evento de enviar o formulario
formulario.addEventListener('submit', function (evento) {
    // Controla o fluxo dos eventos
    evento.preventDefault();
    // Chama a função cadastro
    cadastro();
})

botao2.addEventListener('click', function (evento) {
    evento.preventDefault();

    criarSelect();
})

document.addEventListener('DOMContentLoaded', function (evento) {
    evento.preventDefault();
})