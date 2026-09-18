const express = require('express');
const app = express();

app.listen(3000, ()=> console.log("Escutando a porta 3000"));
app.use(express.static("Arkham Knight"))

document.addEventListener("DOMContentLoaded", () => {
    // 1. Constante selecionando o container do HTML
    const container = document.getElementById('colecao');

    // 2. Requisição usando fetch (substitua a URL pelo seu endpoint/arquivo JSON)
    fetch('https://api.exemplo.com/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(dados => {
            // Limpa o container antes de renderizar
            container.innerHTML = '';

            dados.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card-item';
                card.innerHTML = `
                    <h3>${item.nome || 'Sem título'}</h3>
                    <p>${item.descricao || ''}</p>
                `;
                container.appendChild(card);
            });
        })
        // 3. Captura e tratamento de erros no final
        .catch(error => console.log(err));
});
