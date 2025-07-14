const categorySelect = document.getElementById('category-select');
const formContainer = document.querySelector('.feedback-form');
const step1 = document.querySelector('.feedback-step1'); // <- NOVA LINHA

categorySelect.addEventListener('change', function () {
    if (categorySelect.value !== '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
});

const form = document.querySelector(".feedback-form form");
const feedbackForm = document.querySelector(".feedback-form");
const agradecimento = document.getElementById("agradecimento");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio real do formulário

    // Oculta o formulário, a etapa 1 e mostra a mensagem
    feedbackForm.style.display = "none";
    step1.style.display = "none"; // <- LINHA ADICIONADA
    agradecimento.style.display = "block";

    // Espera 3 segundos e redireciona
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000);
});
