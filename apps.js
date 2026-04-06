// Dados do usuário
let usuario = {};

// Array de ideias (mantido igual)
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
    "Desenhe algo simples, mesmo que você ache que não sabe desenhar.",
    "Dance por 10 minutos ao som da sua música favorita.",
    "Pratique um hobby antigo que você não faz há um tempo.",
    "Experimente uma nova receita de sobremesa.",
    "Assista a um filme ou série de um gênero que você normalmente não assiste.",
    "Desconecte-se das redes sociais por pelo menos uma hora.",
    "Faça uma lista de 5 coisas pelas quais você é grato hoje.",
    // ... (pode adicionar mais se quiser)
];

// Variáveis de controle
let notaAvaliacao = 0;

// Funções do Cadastro
function cadastrarUsuario() {
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value;
    const motivo = document.getElementById('motivo').value.trim();

    if (!nome || !idade || !motivo) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    usuario = { nome, idade: parseInt(idade), motivo };

    // Troca de tela
    document.getElementById('tela-cadastro').classList.remove('active');
    document.getElementById('tela-principal').classList.add('active');

    // Saudação personalizada
    document.getElementById('saudacao').textContent = `Olá, ${nome}! 👋`;
}

// Função do botão principal (mantida)
const botao = document.getElementById('btn-gerar');
const display = document.getElementById('mensagem-display');

botao.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * ideias.length);
    display.textContent = ideias[indiceAleatorio];
});

// Sistema de Avaliação
function mostrarAvaliacao() {
    document.getElementById('tela-principal').classList.remove('active');
    document.getElementById('tela-avaliacao').classList.add('active');
    
    // Reset estrelas
    notaAvaliacao = 0;
    atualizarEstrelas();
}

function atualizarEstrelas() {
    const estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach(estrela => {
        estrela.classList.toggle('ativa', parseInt(estrela.dataset.valor) <= notaAvaliacao);
    });
}

// Clique nas estrelas
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('estrela')) {
        notaAvaliacao = parseInt(e.target.dataset.valor);
        atualizarEstrelas();
    }
});

function enviarAvaliacao() {
    const comentario = document.getElementById('comentario').value.trim();

    if (notaAvaliacao === 0) {
        alert("Por favor, dê uma nota de 1 a 5 estrelas.");
        return;
    }

    // Aqui você pode salvar em localStorage ou enviar para um servidor
    console.log("Avaliação recebida:", {
        nome: usuario.nome,
        nota: notaAvaliacao,
        comentario: comentario || "Sem comentário"
    });

    alert(`Obrigado, ${usuario.nome}! Sua avaliação de ${notaAvaliacao} estrelas foi registrada com sucesso! 💜`);

    // Volta para a tela principal
    voltarParaPrincipal();
}

function voltarParaPrincipal() {
    document.getElementById('tela-avaliacao').classList.remove('active');
    document.getElementById('tela-principal').classList.add('active');
}