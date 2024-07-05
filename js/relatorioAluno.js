const matriculaDoAluno = JSON.parse(localStorage.getItem('matriculaDoAluno') || '[]');
const nomeDoAluno = JSON.parse(localStorage.getItem('nomeDoAluno') || '[]');
const emailDoAluno = JSON.parse(localStorage.getItem('emailDoAluno') || '[]');
const telefoneDoAluno = JSON.parse(localStorage.getItem('telefoneDoAluno') || '[]');

// Função para criar um card para cada aluno
function createAlunoCard(matricula, nome, email, telefone) {
  const cardContainer = document.getElementById('cardsContainer');
  
  const card = document.createElement('div');
  card.classList.add('cartao');

  const matriculaElement = document.createElement('p');
  matriculaElement.textContent = `Matrícula: ${matricula}` ;
  
  const nomeElement = document.createElement('p');
  nomeElement.textContent = `Nome: ${nome}` ;
  
  const emailElement = document.createElement('p');
  emailElement.textContent = `Email: ${email}`;
  
  const telefoneElement = document.createElement('p');
  telefoneElement.textContent = `Telefone: ${telefone}`;
  
  card.appendChild(matriculaElement);
  card.appendChild(nomeElement);
  card.appendChild(emailElement);
  card.appendChild(telefoneElement);
  
  cardContainer.appendChild(card);
}

// Exibir informações de cada aluno
for (let i = 0; i < matriculaDoAluno.length; i++) {
  createAlunoCard(matriculaDoAluno[i],nomeDoAluno[i], emailDoAluno[i], telefoneDoAluno[i]);
}