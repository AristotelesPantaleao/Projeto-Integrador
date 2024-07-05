const codigoDoCurso = JSON.parse(localStorage.getItem('codigoDoCurso') || '[]');
const nomeDoCurso = JSON.parse(localStorage.getItem('nomeDoCurso') || '[]');
const descricaoDoCurso = JSON.parse(localStorage.getItem('descricaoDoCurso') || '[]');

// Função para criar um card para cada curso
function createCursoCard(codigo, nome, descricao) {
  const cardContainer = document.getElementById('cardsContainer');
  
  const card = document.createElement('div');
  card.classList.add('cartao');

  const codigoElement = document.createElement('p');
  codigoElement.textContent = `Código: ${codigo}` ;
  
  const nomeElement = document.createElement('p');
  nomeElement.textContent = `Nome: ${nome}` ;
  
  const descricaoElement = document.createElement('p');
  descricaoElement.textContent = `Descrição: ${descricao}`;
  
    
  card.appendChild(codigoElement);
  card.appendChild(nomeElement);
  card.appendChild(descricaoElement);
 
  
  cardContainer.appendChild(card);
}

// Exibir informações de cada curso
for (let i = 0; i <codigoDoCurso.length; i++) {
  createCursoCard(codigoDoCurso[i],nomeDoCurso[i], descricaoDoCurso[i]);
}