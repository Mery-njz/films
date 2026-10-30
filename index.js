document.addEventListener("DOMContentLoaded", () => {
    // --- 1. LÓGICA DO CARROSSEL ---
    const slides = document.querySelectorAll(".banner-slides .slide");
    const indicators = document.querySelectorAll(".banner-indicators .indicator");
    let currentIndex = 0;

    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach(slide => slide.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));

        slides[index].classList.add("active");
        indicators[index].classList.add("active");
    }

    function nextSlide() {
        if (slides.length === 0) return;
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    if (slides.length > 0) {
        setInterval(nextSlide, 4000); // Passa o slide a cada 4 segundos

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });
    }

const express = require('express');
const app = express();

// Middleware essencial para ler o JSON vindo do formulário (POST)
app.use(express.json());

// Serve a pasta 'site' onde estão os arquivos estáticos (HTML, CSS, JS)
app.use(express.static('site'));

// Banco de dados temporário em memória RAM
let lista = [
    {
        titulo: "obra de arte 1",
        descricao: "ficticio",
        imagem: "https://placeholder.com",
        descImagem: "Imagem ficticia 1"
    },
    {
        titulo: "obra de arte 2",
        descricao: "ficticio2",
        imagem: "https://placeholder.com",
        descImagem: "Imagem ficticia 2"
    }
];

// Rota GET: Devolve a lista inteira para a página principal
app.get('/api/lista', (req, res) => {
    res.json(lista);
});

// Rota POST: Recebe uma nova obra do formulário e guarda no Array
app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.status(201).json({ status: "sucesso" });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor escutando em http://localhost:3000");
});
