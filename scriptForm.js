// Classe ObraDeArt (ou Filme) com a ordem exata dos atributos
class ObraDeArt {
    constructor(titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o recarregamento padrão da página

    // Captura os valores digitados nos inputs do form.html
    const tituloF = document.getElementById('titulo').value;
    const imagemF = document.getElementById('imagem').value;
    const descricaoImF = document.getElementById('sinopse').value; // Usando a sinopse como descrição
    const descImgF = "Capa do filme " + tituloF;

    // Instancia o objeto com a estrutura correta
    const novaObra = new ObraDeArt(tituloF, descricaoImF, imagemF, descImgF);

    // Dispara a requisição POST para a API
    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaObra)
    })
    .then(resposta => resposta.json())
    .then(() => {
        alert('Filme cadastrado com sucesso!');
        formulario.reset();
        window.location.href = 'index.html'; // Redireciona para ver o card na galeria
    })
    .catch(erro => console.error("Erro ao enviar:", erro));
});
