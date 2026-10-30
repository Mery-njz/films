const container = document.querySelector('.todosCards');

fetch('/api/lista')
    .then(resposta => resposta.json())
    .then(dados => {
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
