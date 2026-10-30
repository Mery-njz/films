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

    // --- 2. BUSCAR OS FILMES DO SERVIDOR (CRUD) ---
    const colecaoDiv = document.getElementById("colecao");

    if (colecaoDiv) {
        // ATENÇÃO: Tem de estar a apontar para /api/filmes (que é a rota nova do seu index.js)
        fetch('/api/filmes')
            .then(response => response.json())
            .then(data => {
                colecaoDiv.innerHTML = ""; // Limpa a coleção antes de renderizar
                
                if (data.length === 0) {
                    colecaoDiv.innerHTML = "<p style='color: #9ca3af; text-align: center;'>Nenhum filme cadastrado ainda.</p>";
                    return;
                }

                data.forEach(obra => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
                        <div class="texto">
                            <h3>${obra.titulo} (${obra.ano_lancamento || ''})</h3>
                            <p>${obra.sinopse || ''}</p>
                            <small style="color: #60a5fa; display: block; margin-top: 10px;">Diretor ID: ${obra.id_diretor || 1}</small>
                        </div>
                        <div class="img">
                            <img src="${obra.imagem}" alt="Capa do Filme" onerror="this.src='header1.jpg'">
                        </div>
                    `;
                    colecaoDiv.appendChild(card);
                });
            })
            .catch(error => console.error("Erro ao carregar a lista de filmes:", error));
    }
});
