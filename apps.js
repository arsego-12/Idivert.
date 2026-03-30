const ideias = [
  "Tente cozinhar uma receita que você nunca fez antes.",
  "Faça um caminho diferente para o trabalho ou escola hoje.",
  "Assista a um documentário sobre um assunto que você desconhece.",
  "Leia 10 páginas de um livro que está parado na estante.",
  "Faça uma caminhada de 15 minutos sem usar o celular.",
  "Escreva uma carta ou mensagem carinhosa para um amigo antigo.",
  "Aprenda 5 palavras novas em outro idioma.",
  "Reorganize uma gaveta ou prateleira que está bagunçada.",
  "Medite por 5 minutos focando apenas na sua respiração.",
  "Desenhe algo simples, mesmo que você ache que não sabe desenhar."
];

const botao = document.getElementById('btn-gerar');
const display = document.getElementById('mensagem-display');

botao.addEventListener('click', () => {
  // Gera um índice aleatório entre 0 e 9
  const indiceAleatorio = Math.floor(Math.random() * ideias.length);
  
  // Exibe a mensagem na tela
  display.textContent = ideias[indiceAleatorio];
});