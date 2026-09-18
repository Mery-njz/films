const express = require('express');
const app = express();

app.listen(3000, ()=> console.log("Escutando a porta 3000"));
app.use(express.static("Arkham Knight"))

document.addEventListener("DOMContentLoaded", () => {
   
    const container = document.getElementById('colecao');

    
    fetch('https://api.exemplo.com/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(dados => {
            
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
      
        .catch(error => console.log(err));
});
