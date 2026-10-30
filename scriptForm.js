class Filme {
    constructor(titulo, ano_lancamento, sinopse, id_diretor) {
        this.titulo = titulo;
        this.ano_lancamento = ano_lancamento;
        this.sinopse = sinopse;
        this.id_diretor = id_diretor;
    }
}

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página

    // Captura os valores digitados nos inputs corretos do banco
    const titulo = document.getElementById('titulo').value;
    const ano_lancamento = document.getElementById('ano_lancamento').value;
    const sinopse = document.getElementById('sinopse').value;
    const id_diretor = document.getElementById('id_diretor').value;

    // Instancia o objeto Filme
    const novoFilme = new Filme(titulo, ano_lancamento, sinopse, id_diretor);

    try {
        // Dispara a requisição POST para a API
        const resposta = await fetch('/api/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoFilme)
        });

        if (!resposta.ok) {
            throw new Error(`Erro no servidor: ${resposta.status}`);
        }

        alert('Filme cadastrado com sucesso!');
        formulario.reset();
        window.location.href = 'index.html'; // Redireciona para a home

    } catch (erro) {
        console.error("Erro ao enviar:", erro);
    }
});


alert('Filme cadastrado com sucesso!');
formulario.reset();
window.location.href = 'index.html'; // <-- Isto aqui já leva ele direto pro catálogo principal!
