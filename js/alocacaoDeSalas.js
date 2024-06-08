const codigoDaSala = JSON.parse(localStorage.getItem('codigoDaSala') || '[]');
const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]');
const nomeDaTurma = JSON.parse(localStorage.getItem('nomeDaTurma') || '[]');
const localDaSala = JSON.parse(localStorage.getItem('localDaSala') || '[]');
const opcoes = JSON.parse(localStorage.getItem('opcoes') || '[]');

console.log(`Código Da Sala: ${codigoDaSala}`);
console.log(`Nome do Instrutor: ${nomeInstrutor}`);
console.log(`Nome da Turma: ${nomeDaTurma}`);
console.log(`Local Sala: ${localDaSala}`);
console.log(`Opções: ${opcoes}`);

const elementoPrincipal = document.querySelector('main');
// Verificar se tem codigo da sala
if (elementoPrincipal && codigoDaSala.length > 0 && nomeInstrutor.length > 0 && nomeDaTurma.length > 0 && localDaSala.length > 0 && opcoes.length > 0) {
    elementoPrincipal.style.display = 'flex';
    elementoPrincipal.style.flexWrap = 'wrap';
    // Cria os cards
    for (let indice = 0; indice < codigoDaSala.length; indice++) {
        // Cria o container com classe container4
        const container4 = document.createElement('div');
        container4.className = 'container4';
        // Adiciona esse elemento no elementoPrincipal
        elementoPrincipal.appendChild(container4);
        // Cria o container com classe mini-container
        const miniContainer = document.createElement('div');
        miniContainer.className = 'mini-container';
        // Adiciona esse elemento no contaienr4
        container4.appendChild(miniContainer);
        // Cria o card com classe card, id salaLivre, e style de 18ream e atributo
        const elementoCard = document.createElement('div');
        elementoCard.className = 'card';
        elementoCard.id = 'salaLivre';
        elementoCard.style.width = '18rem'
        elementoCard.setAttribute('data-card-id', `${indice + 1}`);
        // Adiciona esse elemento no miniContainer
        miniContainer.appendChild(elementoCard);
        // Cria o formulario com id formulario
        const formulario = document.createElement('form');
        formulario.id = 'formulario';
        // Adiciona esse elemento no elementoCard
        elementoCard.appendChild(formulario);
        // Cria o cardBody com classe card-body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Adiciona esse elemento no formulario;
        formulario.appendChild(cardBody);
        // Cria o elemento h5 com classe card-title e id centralizar e com texto Sala indice + 1;
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.id = 'centralizar';
        h5.textContent = `Sala ${indice + 1}`
        // Adiciona esse elemento no cardBody
        cardBody.appendChild(h5);
        // Cria o elemento div com classe
        const div = document.createElement('div')
        div.className = 'form-floating';
        // Adiciona div no cardBody
        cardBody.appendChild(div)
        // Cria o elemento select com class style id e atributo
        const select = document.createElement('select');
        select.className = 'form-select';
        select.style.marginBottom = '10px';
        select.id = `opcao-instrutor-${indice + 1}`;
        select.setAttribute('aria-label', 'Floating label select example')
        // Adiciona o elemento select ao elemento div
        div.appendChild(select)
        // Cria o elemento option com text content e um valor ja verdadeiro
        const option = document.createElement('option');
        option.selected = true
        option.textContent = 'Selecione o Instrutor';
        // Adiciona o elemento option ao elemento select
        select.appendChild(option);
        // Cria no select todas as opções de nomeInstrutor
        for (let indice = 0; indice < nomeInstrutor.length; indice++) {
            const nome = nomeInstrutor[indice];
            const opcao = document.createElement('option');
            opcao.id = `${indice}`;
            opcao.value = nome;
            opcao.textContent = nome;
            select.appendChild(opcao);
        }
        const labelDoSelect = document.createElement('label');
        labelDoSelect.setAttribute('for', 'floatingSelect')
        labelDoSelect.textContent = 'Escolha o Instrutor';
        // ADiciona o elemento labelDoSelect ao elemento div
        div.appendChild(labelDoSelect);
        // Cria o elemento select com classe style id e atributo
        const select2 = document.createElement('select');
        select2.className = 'form-select';
        select2.style.marginBottom = '10px';
        select2.id = `opcao-turma-${indice + 1}`;
        select2.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select2 a div
        div.appendChild(select2);
        // Cria o elemento option2 com text content e um valor ja verdadeiro
        const option2 = document.createElement('option');
        option2.selected = true;
        option2.textContent = 'Selecione a Turma';
        // Adiciona o elemento option2 ao elemento select2
        select2.appendChild(option2);
        // Cria no select2 todas as opções de nomeDaTurma;
        for (let indice = 0; indice < nomeDaTurma.length; indice++) {
            const nome = nomeDaTurma[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome
            select2.appendChild(opcao);
        }
        const labeldoSelect2 = document.createElement('label');
        labeldoSelect2.setAttribute('for', 'floatingSelect')
        labeldoSelect2.textContent = 'Escolha a Tuma';
        labeldoSelect2.style.top = select2.offsetTop + 'px';
        labeldoSelect2.style.left = select2.offsetLeft + 'px';
        // ADiciona o elemento labeldoSelect2 ao elemento div
        div.appendChild(labeldoSelect2);
        // Cria o elemento label com textContent e atributo
        const label = document.createElement('label');
        label.textContent = 'Data:';
        label.setAttribute('for', 'data');
        // Adiciona o elemento label ao cardBody
        cardBody.appendChild(label);
        // Cria o elemento input com type e id
        const input = document.createElement('input');
        input.type = 'date';
        input.id = 'data';
        input.style.marginLeft = '5px';
        // Adiciona o elemento input ao cardBody
        cardBody.appendChild(input);
        // Cria o elemento br
        const br = document.createElement('br');
        // Adiciona o elemento br ao cardBody
        cardBody.appendChild(br);
        // Cria o elemento label2
        const label2 = document.createElement('label');
        label2.textContent = 'Hora:';
        label2.setAttribute('for', 'hora');
        // Adiciona o elemento label2 ao cardBody
        cardBody.appendChild(label2);
        // Cria o elemento input2 com type e id
        const input2 = document.createElement('input');
        input2.type = 'time';
        input2.id = 'hora';
        input2.style.marginLeft = '3px';
        // Adiciona o elemento input2 ao cardBody
        cardBody.appendChild(input2);
        // Cria o elemento br2
        const br2 = document.createElement('br')
        // Adiciona o elemento br2 ao cardBody
        cardBody.appendChild(br2);
        // Cria o elemento select com classe style id e atributo
        const select3 = document.createElement('select');
        select3.className = 'form-select';
        select3.style.marginBottom = '10px';
        select3.id = `opcao-local-${indice + 1}`;
        select3.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select3 a div
        div.appendChild(select3);
        // Cria o elemento option3 com text content e um valor ja verdadeiro
        const option3 = document.createElement('option');
        option3.selected = true;
        option3.textContent = 'Selecione o Local';
        // Adiciona o elemento option3 ao elemento select2
        select3.appendChild(option3);
        // Cria no select2 todas as opções de localDaSala;
        for (let indice = 0; indice < localDaSala.length; indice++) {
            const nome = localDaSala[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome
            select3.appendChild(opcao);
        }
        const labelDoSelect3 = document.createElement('label');
        labelDoSelect3.setAttribute('for', 'floatingSelect')
        labelDoSelect3.textContent = 'Escolha o Local';
        labelDoSelect3.style.top = select3.offsetTop + 'px';
        labelDoSelect3.style.left = select3.offsetLeft + 'px';
        // ADiciona o elemento labelDoSelect3 ao elemento div
        div.appendChild(labelDoSelect3);
        // Cria o elemento select com classe style id e atributo
        const select4 = document.createElement('select');
        select4.className = 'form-select';
        select4.style.marginBottom = '10px';
        select4.id = `opcao-status-${indice + 1}`;
        select4.setAttribute('arial-label', 'Floating label select example');
        // Adiciona o elemento select4 a div
        div.appendChild(select4);
        // Cria o elemento option2 com text content e um valor ja verdadeiro
        const option4 = document.createElement('option');
        option4.selected = true;
        option4.textContent = 'Selecione o Status da sala';
        // Adiciona o elemento option4 ao elemento select4
        select4.appendChild(option4);
        // Cria no select4 todas as opções de opcoes;
        for (let indice = 0; indice < opcoes.length; indice++) {
            const nome = opcoes[indice];
            const opcao = document.createElement('option');
            opcao.value = nome;
            opcao.textContent = nome
            select4.appendChild(opcao);
        }
        const labelDoSelect4 = document.createElement('label');
        labelDoSelect4.setAttribute('for', 'floatingSelect')
        labelDoSelect4.textContent = 'Escolha o Status';
        labelDoSelect4.style.top = select4.offsetTop + 'px';
        labelDoSelect4.style.left = select4.offsetLeft + 'px';
        // ADiciona o elemento labelDoSelect4 ao elemento div
        div.appendChild(labelDoSelect4);
        // Cria o elemento botao com class type id e textContent
        const botao = document.createElement('button');
        botao.className = `btn btn-light ${indice + 1}`;
        botao.type = 'button'; // Trocar para submit quando for fazer os testes do eventListener se precisar
        botao.id = 'botao4';
        botao.textContent = 'Salvar';
        // Adiciona o elemento botao ao cardBody
        cardBody.appendChild(botao);

        const arrayInstrutor = JSON.parse(localStorage.getItem(`opcaoInstrutor${indice + 1}`) || '[]');
        const arrayTurma = JSON.parse(localStorage.getItem(`opcaoTurma${indice + 1}`) || '[]');
        const arrayLocal = JSON.parse(localStorage.getItem(`opcaoLocal${indice + 1}`) || '[]');
        const arrayStatus = JSON.parse(localStorage.getItem(`opcaoStatus${indice + 1}`) || '[]');

        console.log(`${indice + 1}`)
        console.log(`Opção Instrutor ${indice + 1}: ${arrayInstrutor}`);
        console.log(`Opção Turma ${indice + 1}: ${arrayTurma}`);
        console.log(`Opção Local ${indice + 1}: ${arrayLocal}`);
        console.log(`Opção Status ${indice + 1}: ${arrayStatus}`);

        function adicionarOpcaoInstrutor() {
            const opcaoinstrutor = document.getElementById(`opcao-instrutor-${indice + 1}`).value;
            console.log(`Instrutor: ${opcaoinstrutor}`);
            if(opcaoinstrutor !== 'Selecione o Instrutor'){
                arrayInstrutor.push(opcaoinstrutor);
            }
        }

        function adicionarOpcaoTurma(){
            const opcaoTurma = document.getElementById(`opcao-turma-${indice + 1}`).value;
            console.log(`Turma: ${opcaoTurma}`);
            if(opcaoTurma !== 'Selecione a Turma'){
                arrayTurma.push(opcaoTurma);
            }
        }

        function adicionarOpcaoLocal(){
            const opcaoLocal = document.getElementById(`opcao-local-${indice + 1}`).value;
            console.log(`Local: ${opcaoLocal}`);
            if(opcaoLocal !== 'Selecione o Local'){
                arrayLocal.push(opcaoLocal);
            }
        }

        function adicionarOpcaoStatus() {
            const opcaoStatus = document.getElementById(`opcao-status-${indice + 1}`).value;
            console.log(`Status: ${opcaoStatus}`);
            if(opcaoStatus !== 'Selecione o Status da sala'){
                if(opcaoStatus === 'Sala Livre'){
                    elementoCard.id = 'salaLivre';
                    arrayStatus.push(opcaoStatus);
                }else if(opcaoStatus === 'Sala Agendada'){
                    elementoCard.id = 'salaAgendada';
                    arrayStatus.push(opcaoStatus);
                }else if(opcaoStatus === 'Sala Ocupada'){
                    elementoCard.id = 'salaOcupada';
                    arrayStatus.push(opcaoStatus);
                }
            }
        }

        function salvarInstrutorArray() {
            localStorage.setItem(`opcaoInstrutor${indice + 1}`, JSON.stringify(arrayInstrutor));
        }
        function salvarTurmaArray() {
            localStorage.setItem(`opcaoTurma${indice + 1}`, JSON.stringify(arrayTurma));
        }
        function salvarLocalArray() {
            localStorage.setItem(`opcaoLocal${indice + 1}`, JSON.stringify(arrayLocal));
        }
        function salvarStatusArray() {
            localStorage.setItem(`opcaoStatus${indice + 1}`, JSON.stringify(arrayStatus));
        }

        function removerItem() {
            localStorage.removeItem(`opcaoInstrutor${indice + 1}`);
            localStorage.removeItem(`opcaoTurma${indice + 1}`);
            localStorage.removeItem(`opcaoLocal${indice + 1}`);
            localStorage.removeItem(`opcaoStatus${indice + 1}`);
            localStorage.removeItem(`dropdownSelecionado${indice + 1}`);
            localStorage.removeItem(`dropdownSelecionado2${indice + 1}`);
            localStorage.removeItem(`dropdownSelecionado3${indice + 1}`);
            localStorage.removeItem(`dropdownSelecionado4${indice + 1}`);

            const valorRemovido = localStorage.getItem(`opcaoInstrutor${indice + 1}`);
            const valorRemovido2 = localStorage.getItem(`opcaoTurma${indice + 1}`);
            const valorRemovido3 = localStorage.getItem(`opcaoLocalr${indice + 1}`);
            const valorRemovido4 = localStorage.getItem(`opcaoStatus${indice + 1}`);
            const valorRemovido5 = localStorage.getItem(`dropdownSelecionado${indice + 1}`);
            const valorRemovido6 = localStorage.getItem(`dropdownSelecionado2${indice + 1}`);
            const valorRemovido7 = localStorage.getItem(`dropdownSelecionado3${indice + 1}`);
            const valorRemovido8 = localStorage.getItem(`dropdownSelecionado4${indice + 1}`);
            
            if (valorRemovido === null && valorRemovido2 === null && valorRemovido3 === null && valorRemovido4 === null && valorRemovido5 === null && valorRemovido6 === null && valorRemovido7 === null && valorRemovido8 === null) {
                console.log('Item removido com sucesso!');
            } else {
                console.log('Erro ao remover o item.');
            }
        }

        botao.addEventListener('click', function () {
            adicionarOpcaoInstrutor();
            adicionarOpcaoTurma();
            adicionarOpcaoLocal();
            adicionarOpcaoStatus();
            salvarInstrutorArray();
            salvarTurmaArray();
            salvarLocalArray();
            salvarStatusArray();
            alert(`Sala ${indice+1} salvo com sucesso!`)
        })
        
        const dropdown = document.getElementById(`opcao-instrutor-${indice + 1}`);
        const dropdown2 = document.getElementById(`opcao-turma-${indice + 1}`);
        const dropdown3 = document.getElementById(`opcao-local-${indice + 1}`);
        const dropdown4 = document.getElementById(`opcao-status-${indice + 1}`);

        dropdown.addEventListener('change',function(){
            const valorSelecionado = event.target.value;
            localStorage.setItem(`dropdownSelecionado${indice + 1}`, valorSelecionado);
            console.log('Valor selecionado:', valorSelecionado);
        })

        dropdown2.addEventListener('change',function(){
            const valorSelecionado = event.target.value;
            localStorage.setItem(`dropdownSelecionado2${indice + 1}`, valorSelecionado);
            console.log('Valor selecionado:', valorSelecionado);
        })

        dropdown3.addEventListener('change',function(){
            const valorSelecionado = event.target.value;
            localStorage.setItem(`dropdownSelecionado3${indice + 1}`,valorSelecionado);
            console.log('Valor selecionado:',valorSelecionado);
        })

        dropdown4.addEventListener('change',function(){
            const valorSelecionado = event.target.value;
            localStorage.setItem(`dropdownSelecionado4${indice + 1}`,valorSelecionado);
            console.log('Valor selecionado:',valorSelecionado);
        })

        document.addEventListener('DOMContentLoaded', function(){
            const valorSalvo = localStorage.getItem(`dropdownSelecionado${indice + 1}`);
            const valorSalvo2 = localStorage.getItem(`dropdownSelecionado2${indice + 1}`);
            const valorSalvo3 = localStorage.getItem(`dropdownSelecionado3${indice + 1}`);
            const valorSalvo4 = localStorage.getItem(`dropdownSelecionado4${indice + 1}`);

            if(valorSalvo4 === 'Sala Livre'){
                elementoCard.id = 'salaLivre'
            }else if(valorSalvo4 === 'Sala Agendada'){
                elementoCard.id = 'salaAgendada';
            }else if(valorSalvo4 === 'Sala Ocupada'){
                elementoCard.id = 'salaOcupada';
            }
            if(valorSalvo || valorSalvo2 || valorSalvo3 || valorSalvo4){
                dropdown.value = valorSalvo;
                dropdown2.value = valorSalvo2;
                dropdown3.value = valorSalvo3;
                dropdown4.value = valorSalvo4;
            }
        })

    }
}