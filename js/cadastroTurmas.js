const formulario = document.getElementById('formulario');

const codigoDaTurma = JSON.parse(localStorage.getItem('codigoDaTurma') || '[]');
const nomeDaTurma = JSON.parse(localStorage.getItem('nomeDaTurma') || '[]');
const emailDaTurma = JSON.parse(localStorage.getItem('emailDaTurma') || '[]');

let condicaoCodigo = false, condicaoTurma = false, condicaoEmail = false;

function cadastroTurma() {
    const codigoTurma = document.getElementById('codigoTurma').value;


    if (codigoDaTurma.includes(codigoTurma)) {
        condicaoCodigo = false;
        document.getElementById('codigoTurma').value = '';
    } else {
        condicaoCodigo = true;
        document.getElementById('codigoTurma').value = '';
    }

    const codigoError = document.getElementById('codigoError');

    if (JSON.parse(localStorage.getItem('codigoDaTurma')) !== null) {
        codigoError.textContent = 'Código já cadastrada'

        setTimeout(() => {
            codigoError.textContent = '';
        }, 3000);
    } else {
        codigoError.textContent = '';
    }

    const nomeTurma = document.getElementById('nomeTurma').value;
    const emailTurma = document.getElementById('emailTurma').value;


    if (nomeDaTurma.includes(nomeTurma) && emailDaTurma.includes(emailTurma)) {
        condicaoTurma = true;
        document.getElementById('nomeTurma').value = '';
    } else {
        condicaoTurma = true;
        document.getElementById('nomeTurma').value = '';
    }

    if (emailDaTurma.includes(emailTurma) && nomeDaTurma.includes(nomeTurma)) {
        condicaoEmail = true;
        document.getElementById('emailTurma').value = '';
    } else {
        condicaoEmail = true;
        document.getElementById('emailTurma').value = '';
    }

    if (condicaoCodigo === true && condicaoTurma === true && condicaoEmail === true) {
        codigoDaTurma.push(codigoTurma);
        nomeDaTurma.push(nomeTurma);
        emailDaTurma.push(emailTurma);
        alert('Cadastro efetuado com sucesso!');
    }
}

function salvarCodigoTurma() {
    localStorage.setItem('codigoDaTurma', JSON.stringify(codigoDaTurma));
}

function salvarNomeTurma() {
    localStorage.setItem('nomeDaTurma', JSON.stringify(nomeDaTurma));
}

function salvarEmailTurma() {
    localStorage.setItem('emailDaTurma', JSON.stringify(emailDaTurma));
}

function removerItem() {
    localStorage.removeItem('codigoDaTurma');
    localStorage.removeItem('nomeDaTurma');
    localStorage.removeItem('emailDaTurma');

    const valorRemovido = localStorage.getItem('codigoDaTurma');
    const valorRemovido2 = localStorage.getItem('nomeDaTurma');
    const valorRemovido3 = localStorage.getItem('emailDaTurma');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item');
    }
}

console.log(`Código da Turma: ${codigoDaTurma}`);
console.log(`Nome da Turma: ${nomeDaTurma}`);
console.log(`Email da Turma: ${emailDaTurma}`);

function cadastro() {
    cadastroTurma();
    salvarCodigoTurma();
    salvarNomeTurma();
    salvarEmailTurma();
}

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    cadastro();
})