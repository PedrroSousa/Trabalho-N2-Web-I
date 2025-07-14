// === Seletores principais ===
const categorySelect = document.getElementById('category-select');
const formContainer = document.querySelector('.feedback-form');
const step1 = document.querySelector('.feedback-step1');
const form = document.querySelector(".feedback-form form");
const feedbackForm = document.querySelector(".feedback-form");
const agradecimento = document.getElementById("agradecimento");

// === Exibir formulário somente após escolher categoria ===
categorySelect.addEventListener('change', function () {
    formContainer.style.display = categorySelect.value !== '' ? 'block' : 'none';
});

// === Envio do formulário para MockAPI ===
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Detecta o nome da página atual
    const paginaAtual = window.location.pathname.split("/").pop(); // Ex: card1.html
    const nomePagina = paginaAtual.replace('.html', ''); // Ex: card1

    // Mapeamento do nome real do jogo
    const nomesJogos = {
        card1: "WVP: Itatira",
        card2: "WVP: Canindé",
        card3: "WVP Picross"
    };
    const nomeJogo = nomesJogos[nomePagina] || "Desconhecido";

    // Coleta os dados do formulário
    const plataforma = form.querySelector('select').value;
    const descricao = document.getElementById('descricao').value;
    const nome = document.getElementById('nome').value;
    const email = form.querySelector('input[type="email"]').value;
    const categoria = categorySelect.value;
    const arquivoInput = document.getElementById("anexo");
    const arquivo = arquivoInput.files[0];
    const nomeArquivo = arquivo ? arquivo.name : null;

    // Monta o objeto para envio
    const feedback = {
        nome,
        email,
        categoria,
        plataforma,
        descricao,
        jogo: nomeJogo,
        anexo: nomeArquivo
    };

    try {
        // Envia para o MockAPI (substitua pelo seu endpoint real)
        await fetch('https://687471c2dd06792b9c93e280.mockapi.io/wvp/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        });

        // Oculta o formulário e a etapa 1, mostra mensagem
        feedbackForm.style.display = "none";
        step1.style.display = "none";
        agradecimento.style.display = "block";

        // Redireciona após 3 segundos
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    } catch (error) {
        console.error("Erro ao enviar feedback:", error);
        alert("Erro ao enviar feedback. Tente novamente mais tarde.");
    }
});
