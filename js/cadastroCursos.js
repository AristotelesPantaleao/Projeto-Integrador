const formulario = document.getElementById('formulario');

const codigoDoCurso = JSON.parse(localStorage.getItem('codigoDoCurso') || '[]');
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
const localDoCurso = JSON.parse(localStorage.getItem('localDoCurso') || '[]');

let condicaoCodigo = false, condicaoNome = false, condicaoLocal = false;

function cadastrarCurso() {
    const codigoCurso = document.getElementById('codigoCurso').value;


    if (codigoDoCurso.includes(codigoCurso)) {
        condicaoCodigo = false
        alert('Código já cadastrado!');
        document.getElementById('codigoCurso').value = '';
    } else {
        condicaoCodigo = true;
        document.getElementById('codigoCurso').value = '';
    }


    const codigoError = document.getElementById('codigoError');

    if(JSON.parse(localStorage.getItem('codigoCurso')) !== null){
        codigoError.textContent = 'Código já cadastrada'
        
        setTimeout(() => {
            codigoError.textContent = '';
        },3000);
    }else{
        codigoError.textContent = '';
    }

    const nomeCurso = document.getElementById('nomeCurso').value;


    if (nomeDoCurso.includes(nomeCurso)) {
        condicaoNome = true
        document.getElementById('nomeCurso').value = '';
    } else {
        condicaoNome = true;
        document.getElementById('nomeCurso').value = '';
    }

    const localCurso = document.getElementById('localCurso').value;

    if (localCurso === '') {
        condicaoLocal = false;
        document.getElementById('localCurso').value = '';
    } else {
        condicaoLocal = true
        document.getElementById('localCurso').value = '';
    }

    if (condicaoCodigo === true && condicaoNome === true && condicaoLocal === true) {
        codigoDoCurso.push(codigoCurso);
        nomeDoCurso.push(nomeCurso);
        localDoCurso.push(localCurso);
        alert('Cadastro efetuado com sucesso!');
    }
}

function salvarCodigoCurso() {
    localStorage.setItem('codigoDoCurso', JSON.stringify(codigoDoCurso));
}

function salvarNomeCurso() {
    localStorage.setItem('nomeDoCurso', JSON.stringify(nomeDoCurso));
}

function salvarLocalCurso() {
    localStorage.setItem('localDoCurso', JSON.stringify(localDoCurso));
}

function removerItem() {
    localStorage.removeItem('codigoDoCurso');
    localStorage.removeItem('nomeDoCurso');
    localStorage.removeItem('localDoCurso');

    const valorRemovido = localStorage.getItem('codigoDoCurso');
    const valorRemovido2 = localStorage.getItem('nomeDoCurso');
    const valorRemovido3 = localStorage.getItem('localDoCurso');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item.');
    }
}

console.log(`Código do Curso: ${codigoDoCurso}`);
console.log(`Nome do Curso: ${nomeDoCurso}`);
console.log(`Local do Curso: ${localDoCurso}`);

function cadastro() {
    cadastrarCurso();
    salvarCodigoCurso();
    salvarNomeCurso();
    salvarLocalCurso();
}

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    cadastro();
})