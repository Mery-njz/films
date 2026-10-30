const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('site'));

let filmes = [
    {
        id_filme: 1,
        titulo: "Interestellar",
        ano_lancamento: 2014,
        sinopse: "Uma equipa viaja através de um buraco de minhoca...",
        id_diretor: 1,
        imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401"
    }
];

let usuarios = [
    { id_usuario: 1, nome: "Ana Silva", email: "ana@email.com" }
];

let diretores = [
    { id_diretor: 1, nome_diretor: "Christopher Nolan", nacionalidade: "Britânico" }
];

let avaliacoes = [];



// READ (Listar todos os filmes)
app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});

// CREATE (Cadastrar novo filme)
app.post('/api/filmes', (req, res) => {
    const novoFilme = {
        id_filme: filmes.length + 1,
        titulo: req.body.titulo,
        ano_lancamento: req.body.ano_lancamento,
        sinopse: req.body.sinopse,
        id_diretor: req.body.id_diretor,
        imagem: req.body.imagem || "https://images.unsplash.com/photo-1485846234645-a62644f84728"
    };
    filmes.push(novoFilme);
    res.status(201).json({ status: "sucesso", filme: novoFilme });
});

// UPDATE (Atualizar filme por ID)
app.put('/api/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = filmes.findIndex(f => f.id_filme === id);
    
    if (index === -1) {
        return res.status(404).json({ erro: "Filme não encontrado" });
    }

    filmes[index] = {
        id_filme: id,
        titulo: req.body.titulo || filmes[index].titulo,
        ano_lancamento: req.body.ano_lancamento || filmes[index].ano_lancamento,
        sinopse: req.body.sinopse || filmes[index].sinopse,
        id_diretor: req.body.id_diretor || filmes[index].id_diretor,
        imagem: req.body.imagem || filmes[index].imagem
    };

    res.json({ status: "atualizado com sucesso", filme: filmes[index] });
});

// DELETE (Apagar filme por ID)
app.delete('/api/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    filmes = filmes.filter(f => f.id_filme !== id);
    res.json({ status: "apagado com sucesso" });
});



app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const novoUsuario = {
        id_usuario: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };
    usuarios.push(novoUsuario);
    res.status(201).json({ status: "sucesso", usuario: novoUsuario });
});


app.get('/api/avaliacoes', (req, res) => {
    res.json(avaliacoes);
});

app.post('/api/avaliacoes', (req, res) => {
    const novaAvaliacao = {
        id_avaliacao: avaliacoes.length + 1,
        nota: req.body.nota,
        comentario: req.body.comentario,
        id_usuario: req.body.id_usuario,
        id_filme: req.body.id_filme
    };
    avaliacoes.push(novaAvaliacao);
    res.status(201).json({ status: "sucesso", avaliacao: novaAvaliacao });
});

// Dispara a requisição POST para a nova rota do CRUD
        const resposta = await fetch('/api/filmes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoFilme)
        });
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".banner-slides .slide");
    const indicators = document.querySelectorAll(".banner-indicators .indicator");
    let currentIndex = 0;
    const intervalTime = 4000; // Tempo em milissegundos (4 segundos)

    function showSlide(index) {
        // Remove a classe active de todos
        slides.forEach(slide => slide.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));

        // Adiciona a classe active no índice atual
        slides[index].classList.add("active");
        indicators[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Inicia o carrossel automático
    let slideInterval = setInterval(nextSlide, intervalTime);

    // Permite clicar nos indicadores para mudar o banner manualmente
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
            // Reinicia o temporizador ao clicar manualmente
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });
});
// Iniciar o servidor
app.listen(3000, () => {
    console.log("🚀 Servidor CRUD rodando em http://localhost:3000");
});
