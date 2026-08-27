// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. MENU MOBILE (HAMBÚRGUER)
    // ============================================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Verifica se os elementos existem (presentes em todas as páginas)
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // Fecha o menu ao clicar em qualquer link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }

    // ============================================
    // 2. POSTS DINÂMICOS (somente na página de artigos)
    // ============================================
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const postsGrid = document.getElementById('postsGrid');

    // Só executa se estivermos na página de artigos
    if (loadMoreBtn && postsGrid) {
        // Array com posts adicionais (mesmos dados de antes)
        const additionalPosts = [
            {
                title: 'A Importância da Tipografia no Design',
                excerpt: 'Descubra como a escolha da fonte pode influenciar a experiência do usuário em blogs e sites.',
                author: 'Maria Souza',
                date: '8 de Fevereiro de 2025'
            },
            {
                title: 'Otimização de Imagens para Web',
                excerpt: 'Técnicas para reduzir o tamanho das imagens sem perder qualidade, melhorando o desempenho.',
                author: 'Pedro Santos',
                date: '5 de Fevereiro de 2025'
            },
            {
                title: 'Introdução ao CSS Grid',
                excerpt: 'Aprenda a criar layouts complexos com facilidade usando a poderosa ferramenta CSS Grid.',
                author: 'Ana Lima',
                date: '2 de Fevereiro de 2025'
            },
            {
                title: 'JavaScript Assíncrono: Promises e Async/Await',
                excerpt: 'Entenda como lidar com operações assíncronas de forma limpa e eficiente no JavaScript moderno.',
                author: 'Carlos Oliveira',
                date: '28 de Janeiro de 2025'
            },
            {
                title: 'Acessibilidade na Web: Por Onde Começar?',
                excerpt: 'Dicas práticas para tornar seu blog mais acessível a todos os usuários, incluindo pessoas com deficiência.',
                author: 'Juliana Costa',
                date: '25 de Janeiro de 2025'
            },
            {
                title: 'Design Responsivo: Mobile First',
                excerpt: 'Por que começar o design pelo mobile pode resultar em sites mais eficientes e fáceis de manter.',
                author: 'Rafael Almeida',
                date: '20 de Janeiro de 2025'
            }
        ];

        let postsLoaded = 0;
        const POSTS_PER_LOAD = 3;

        // Função para criar um card de post
        function createPostCard(postData) {
            const article = document.createElement('article');
            article.classList.add('post-card');

            const link = document.createElement('a');
            // Como não temos páginas individuais para cada post, o link leva para a própria página de artigos
            link.href = 'artigos.html';
            link.classList.add('post-card-link');

            const imageDiv = document.createElement('div');
            imageDiv.classList.add('post-card-image');

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('post-card-content');

            const title = document.createElement('h3');
            title.classList.add('post-card-title');
            title.textContent = postData.title;

            const excerpt = document.createElement('p');
            excerpt.classList.add('post-card-excerpt');
            excerpt.textContent = postData.excerpt;

            const metaDiv = document.createElement('div');
            metaDiv.classList.add('post-meta');

            const authorSpan = document.createElement('span');
            authorSpan.classList.add('author');
            authorSpan.textContent = 'Por ' + postData.author;

            const dateSpan = document.createElement('span');
            dateSpan.classList.add('date');
            dateSpan.textContent = postData.date;

            metaDiv.appendChild(authorSpan);
            metaDiv.appendChild(dateSpan);
            contentDiv.appendChild(title);
            contentDiv.appendChild(excerpt);
            contentDiv.appendChild(metaDiv);
            link.appendChild(imageDiv);
            link.appendChild(contentDiv);
            article.appendChild(link);

            return article;
        }

        // Função para carregar mais posts
        function loadMorePosts() {
            const startIndex = postsLoaded;
            const endIndex = Math.min(startIndex + POSTS_PER_LOAD, additionalPosts.length);

            if (startIndex < additionalPosts.length) {
                for (let i = startIndex; i < endIndex; i++) {
                    const card = createPostCard(additionalPosts[i]);
                    postsGrid.appendChild(card);
                }
                postsLoaded = endIndex;

                if (postsLoaded >= additionalPosts.length) {
                    loadMoreBtn.style.display = 'none';
                }
            }
        }

        // Adiciona evento ao botão
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }

    // ============================================
    // 3. BOTÃO VOLTAR AO TOPO (todas as páginas)
    // ============================================
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        function toggleBackToTopButton() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', toggleBackToTopButton);
        toggleBackToTopButton(); // estado inicial

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
