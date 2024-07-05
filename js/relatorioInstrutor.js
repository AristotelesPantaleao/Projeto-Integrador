const matriculaInstrutor = JSON.parse(localStorage.getItem('matriculaInstrutor') || '[]');
const nomeInstrutor = JSON.parse(localStorage.getItem('nomeInstrutor') || '[]');
const emailInstrutor = JSON.parse(localStorage.getItem('emailInstrutor') || '[]');
const telefoneInstrutor = JSON.parse(localStorage.getItem('telefoneInstrutor') || '[]');

// Função para criar um card para cada instrutor
function createInstructorCard(matricula, nome, email, telefone) {
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

// Exibir informações de cada instrutor
for (let i = 0; i < matriculaInstrutor.length; i++) {
  createInstructorCard(matriculaInstrutor[i],nomeInstrutor[i], emailInstrutor[i], telefoneInstrutor[i]);
}