const formulario = document.getElementById('formulario');

const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]');
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]');
const capacidadeDeAluno = JSON.parse(localStorage.getItem('capacidadeDeAluno') || '[]');
const flexDeComputadores = JSON.parse(localStorage.getItem('flexDeComputadores') || '[]');
const flexDeProjetor = JSON.parse(localStorage.getItem('flexDeProjetor') || '[]');
const flexDeLousaInterativa = JSON.parse(localStorage.getItem('flexDeLousaInterativa') || '[]');
const flexDeMaterial = JSON.parse(localStorage.getItem('flexDeMaterial') || '[]');
const flexDeRadioSim = JSON.parse(localStorage.getItem('flexDeRadioSim') || '[]');
const flexDeRadioNao = JSON.parse(localStorage.getItem('flexDeRadioNao') || '[]');
const opcoes = JSON.parse(localStorage.getItem('opcoes') || '[]');

let condicaoCodigo = false, condicaoLocal = false, condicaoCapacidade = false, condicaoCoffeeBreak = false;

function cadastrarSala() {
    const codigoSala = document.getElementById('codigoSala').value;

    if (codigoDaSala.includes(codigoSala)) {
        condicaoCodigo = false;
        alert('Código já cadastrado!');
        document.getElementById('codigoSala').value = '';
    } else {
        condicaoCodigo = true;
        document.getElementById('codigoSala').value = '';
    }

    const codigoError = document.getElementById('codigoError');

    if (JSON.parse(localStorage.getItem('codigoDaSala')) !== null) {
        codigoError.textContent = 'Código já cadastrada'

        setTimeout(() => {
            codigoError.textContent = '';
        }, 3000);
    } else {
        codigoError.textContent = '';
    }

    const localSala = document.getElementById('localSala').value;

    if (localSala === '') {
        condicaoLocal = false;
        document.getElementById('localSala').value = '';
    } else {
        condicaoLocal = true
        document.getElementById('localSala').value = '';
    }

    const capacidadeAluno = document.getElementById('capacidadeAluno').value;

    if (capacidadeAluno <= 0) {
        condicaoCapacidade = false;
        document.getElementById('capacidadeAluno').value = '';
    } else {
        condicaoCapacidade = true
        document.getElementById('capacidadeAluno').value = '';
    }

    const cofeBreakSim = document.querySelector('#flexRadioSim');
    const cofeBreakNao = document.querySelector('#flexRadioNao');


    if (cofeBreakSim.checked && !cofeBreakNao.checked) {
        condicaoCoffeeBreak = true
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeRadioSim.push(mensagem);
            flexDeRadioNao.push('Opção desmarcada');
        }
    }
    if (cofeBreakNao.checked) {
        condicaoCoffeeBreak = true
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeRadioNao.push(mensagem);
            flexDeRadioSim.push('Opção desmarcada');
        }
    }

    cofeBreakSim.checked = false;
    cofeBreakNao.checked = false;

    const pc = document.querySelector('#flexComputadores');

    if (pc.checked) {
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeComputadores.push(mensagem);
        }
    } else {
        let mensagem = 'Opção desmarcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeComputadores.push(mensagem);
        }
    }

    pc.checked = false;

    const projetor = document.querySelector('#flexProjetor');

    if (projetor.checked) {
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeProjetor.push(mensagem);
        }
    } else {
        let mensagem = 'Opção desmarcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeProjetor.push(mensagem);
        }
    }

    projetor.checked = false;

    const lousa = document.querySelector('#flexLousaInterativa');

    if (lousa.checked) {
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeLousaInterativa.push(mensagem);
        }
    } else {
        let mensagem = 'Opção desmarcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeLousaInterativa.push(mensagem);
        }
    }

    lousa.checked = false

    const material = document.querySelector('#flexMaterial');

    if (material.checked) {
        let mensagem = 'Opção marcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeMaterial.push(mensagem);
        }
    } else {
        let mensagem = 'Opção desmarcada';
        if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
            flexDeMaterial.push(mensagem);
        }
    }

    material.checked = false;


    if (condicaoCodigo === true && condicaoLocal === true && condicaoCapacidade === true && condicaoCoffeeBreak === true) {
        codigoDaSala.push(codigoSala);
        localDaSala.push(localSala);
        capacidadeDeAluno.push(capacidadeAluno);
        alert('Cadastro efetuado com sucesso!');
    }
}

function addOpcoes() {
    if (opcoes.length === 0) {
        opcoes.push('Sala Livre');
        opcoes.push('Sala Agendada');
        opcoes.push('Sala Ocupada');
    }
}

function salvarOpcoes() {
    localStorage.setItem('opcoes', JSON.stringify(opcoes));
}

function salvarCodigoSala() {
    localStorage.setItem('codigoDaSala', JSON.stringify(codigoDaSala));
}

function salvarLocalSala() {
    localStorage.setItem('localDaSala', JSON.stringify(localDaSala));
}

function salvarCapacidadeAlunos() {
    localStorage.setItem('capacidadeDeAluno', JSON.stringify(capacidadeDeAluno));
}

function salvarComputadores() {
    localStorage.setItem('flexDeComputadores', JSON.stringify(flexDeComputadores));
}

function salvarProjetores() {
    localStorage.setItem('flexDeProjetor', JSON.stringify(flexDeProjetor));
}

function salvarLousaInterativa() {
    localStorage.setItem('flexDeLousaInterativa', JSON.stringify(flexDeLousaInterativa));
}

function salvarMaterial() {
    localStorage.setItem('flexDeMaterial', JSON.stringify(flexDeMaterial));
}

function salvarSim() {
    localStorage.setItem('flexDeRadioSim', JSON.stringify(flexDeRadioSim));
}

function salvarNao() {
    localStorage.setItem('flexDeRadioNao', JSON.stringify(flexDeRadioNao));
}

function removerItem() {

    localStorage.removeItem('codigoDaSala');
    localStorage.removeItem('localDaSala');
    localStorage.removeItem('capacidadeDeAluno');
    localStorage.removeItem('flexDeComputadores');
    localStorage.removeItem('flexDeProjetor');
    localStorage.removeItem('flexDeLousaInterativa');
    localStorage.removeItem('flexDeMaterial');
    localStorage.removeItem('flexDeRadioSim');
    localStorage.removeItem('flexDeRadioNao');

    const valorRemovido = localStorage.getItem('codigoDaSala');
    const valorRemovido2 = localStorage.getItem('localDaSala');
    const valorRemovido3 = localStorage.getItem('capacidadeDeAluno');
    const valorRemovido4 = localStorage.getItem('flexDeComputadores');
    const valorRemovido5 = localStorage.getItem('flexDeProjetor');
    const valorRemovido6 = localStorage.getItem('flexDeLousaInterativa');
    const valorRemovido7 = localStorage.getItem('flexDeMaterial');
    const valorRemovido8 = localStorage.getItem('flexDeRadioSim');
    const valorRemovido9 = localStorage.getItem('flexDeRadioNao');

    if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null && valorRemovido5 === null && valorRemovido6 === null && valorRemovido7 === null && valorRemovido8 === null && valorRemovido9 === null) {
        console.log('Item removido com sucesso!');
    } else {
        console.log('Erro ao remover o item.');
    }
}

console.log(`Código Da Sala: ${codigoDaSala}`);
console.log(`Local Sala: ${localDaSala}`);
console.log(`Capacidade Aluno: ${capacidadeDeAluno}`)
console.log(`Computadores: ${flexDeComputadores}`)
console.log(`Projetor: ${flexDeProjetor}`)
console.log(`Lousa Interativa: ${flexDeLousaInterativa}`)
console.log(`Material: ${flexDeMaterial}`)
console.log(`Coffee Break Sim: ${flexDeRadioSim}`)
console.log(`Coffee Break Não: ${flexDeRadioNao}`)


function cadastrar() {
    cadastrarSala();
    salvarCodigoSala();
    salvarLocalSala();
    salvarCapacidadeAlunos();
    salvarComputadores();
    salvarProjetores();
    salvarLousaInterativa();
    salvarMaterial();
    salvarSim();
    salvarNao();
    addOpcoes();
    salvarOpcoes();
}

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    cadastrar();
})