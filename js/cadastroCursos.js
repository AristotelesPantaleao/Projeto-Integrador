const formulario = document.getElementById('formulario');

const codigoDoCurso = JSON.parse(localStorage.getItem('codigoDoCurso') || '[]');
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
const descricaoDoCurso = JSON.parse(localStorage.getItem('descricaoDoCurso') || '[]');

let condicaoCodigo = false, condicaoNome = false, condicaoDescricao = false;

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

    const descricaoCurso = document.getElementById('floatingTextarea2').value;

    if(descricaoCurso === ''){
        condicaoDescricao = false;
        document.getElementById('floatingTextarea2').value = '';
    }else{
        condicaoDescricao = true;
        document.getElementById('floatingTextarea2').value = '';
    }

    if (condicaoCodigo === true && condicaoNome === true && condicaoDescricao === true) {
        codigoDoCurso.push(codigoCurso);
        nomeDoCurso.push(nomeCurso);
        descricaoDoCurso.push(descricaoCurso);
        alert('Cadastro efetuado com sucesso!');
    }

}

function salvarCodigoCurso() {
    localStorage.setItem('codigoDoCurso', JSON.stringify(codigoDoCurso));
}

function salvarNomeCurso() {
    localStorage.setItem('nomeDoCurso', JSON.stringify(nomeDoCurso));
}

function salvarDescricaoCurso() {
    localStorage.setItem('descricaoDoCurso', JSON.stringify(descricaoDoCurso));
}

function removerItem() {
    localStorage.removeItem('codigoDoCurso');
    localStorage.removeItem('nomeDoCurso');
    localStorage.removeItem('descricaoDoCurso');

    const valorRemovido = localStorage.getItem('codigoDoCurso');
    const valorRemovido2 = localStorage.getItem('nomeDoCurso');
    const valorRemovido3 = localStorage.getItem('descricaoDoCurso');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item.');
    }
}

console.log(`Código do Curso: ${codigoDoCurso}`);
console.log(`Nome do Curso: ${nomeDoCurso}`);
console.log(`Descrição do Curso: ${descricaoDoCurso}`);

function cadastro() {
    cadastrarCurso();
    salvarCodigoCurso();
    salvarNomeCurso();
    salvarDescricaoCurso();
}

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    cadastro();
})