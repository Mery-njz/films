// 1. Inicializa a lista buscando dados existentes ou cria uma nova lista vazia
const galeria = JSON.parse(localStorage.getItem('galeria')) || [];

const formulario = document.getElementById('meuFormulario');

// 3. Função para renderizar todos os cards na tela
function renderizarCards() {
    const container = document.getElementById('colecao');
    container.innerHTML = ''; // Limpa o container antes de renderizar para não duplicar

    galeria.forEach(flores => {
        const novoCard = `
            <div class="card"> 
                <div class="letras">
                    <h3>${flores.titulo}</h3>
                    <p>${flores.texto}</p>
                </div>
                <div class="img">
                    <img src="${flores.imagem}" alt="${flores.descricaoIm}" />
                    <p class="descricao">${flores.descricaoIm}</p>
                </div>
            </div>
        `;
        container.innerHTML += novoCard;
    });
}

// 4. Renderiza os cards guardados logo que a página carrega
renderizarCards();

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        descricaoIm: document.getElementById('descricao').value, 
        texto: document.getElementById('paragrafo').value
    };

    // 2. Adiciona o objeto no array e atualiza o LocalStorage
    galeria.push(novo);
    localStorage.setItem('galeria', JSON.stringify(galeria));

    // Atualiza a tela com o novo card
    renderizarCards();
    
    formulario.reset(); 
});

from.addEventListener('sumbit', function(e) {
    e.preventDefalut();

    const novaObra = new ObraDeArte(t, desc, img, alt);

    fetch('/api/lista', {
        method: 'POST',
        headers {
            'Content-Type': 'application/json'
        },
        body: JOSON.stringify(novaObra)
    })
    .then(() => {
        window.location.href = 'index.html';
    });
});

card.innerHTML = `
    <div class="texto">
        <h3>${obra.titulo} (${obra.ano_lancamento})</h3>
        <p>${obra.sinopse}</p>
        <small style="color: #60a5fa;">Diretor ID: ${obra.id_diretor}</small>
    </div>
    <div class="img">
        <img src="header1.jpg" alt="Capa do Filme">
    </div>
`;
