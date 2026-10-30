const container = document.getElementById('colecao');

fetch('/api/lista')
    .then(resposta => resposta.json())
    .then(dados => {
        if (!container) return;
        container.innerHTML = ''; // Limpa o container antes de renderizar

        dados.forEach(obra => {
            container.innerHTML += `
                <div class="card">
                    <div class="texto">
                        <h3 id="titulo">${obra.titulo}</h3>
                        <p>${obra.descricao}</p>
                    </div>
                    <div class="img">
                        <img src="${obra.imagem}" alt="${obra.descImagem}">
                    </div>
                </div>
            `;
        });
    })
    .catch(erro => console.error("Erro ao buscar as obras:", erro));

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('site'));

// Banco de dados temporário adaptado para os filmes
let lista = [
    {
        titulo: "Interestellar",
        descricao: "Uma equipe viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        descImagem: "Capa do filme Interestellar"
    }
];

// Rota GET: Devolve a lista inteira para a página principal
app.get('/api/lista', (req, res) => {
    res.json(lista);
});

// Rota POST: Recebe um novo filme do formulário e guarda no Array
app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.status(201).json({ status: "sucesso", obra: novaObra });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor escutando em http://localhost:3000");
});
