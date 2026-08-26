// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. MENU MOBILE (HAMBÚRGUER)
    // ============================================
    // Seleciona o botão de menu pelo ID
    const menuToggle = document.getElementById('menuToggle');
    // Seleciona a navegação principal pelo ID
    const mainNav = document.getElementById('mainNav');

    // Adiciona um ouvinte de evento de clique no botão de menu
    menuToggle.addEventListener('click', function () {
        // Alterna a classe 'active' na navegação (mostra/oculta o menu)
        mainNav.classList.toggle('active');
        // Atualiza o atributo aria-label para acessibilidade
        if (mainNav.classList.contains('active')) {
            // Se o menu estiver aberto, muda o label do botão
            menuToggle.setAttribute('aria-label', 'Fechar menu');
        } else {
            // Se o menu estiver fechado, restaura o label original
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        }
    });

    // Fecha o menu ao clicar em qualquer link do menu (para melhor experiência mobile)
    // Seleciona todos os links dentro da navegação
    const navLinks = document.querySelectorAll('.nav-link');
    // Itera sobre cada link encontrado
    navLinks.forEach(function (link) {
        // Adiciona um ouvinte de clique em cada link
        link.addEventListener('click', function () {
            // Remove a classe 'active' da navegação (fecha o menu)
            mainNav.classList.remove('active');
            // Restaura o label do botão
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        });
    });

    // ============================================
    // 2. POSTS DINÂMICOS (CARREGAR MAIS)
    // ============================================
    // Array com objetos contendo dados de posts fictícios adicionais
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

    // Contador para controlar quantos posts já foram carregados
    let postsLoaded = 0;
    // Quantidade de posts a carregar por clique
    const POSTS_PER_LOAD = 3;

    // Seleciona o botão "Carregar Mais" pelo ID
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    // Seleciona o container da grade de posts pelo ID
    const postsGrid = document.getElementById('postsGrid');

    // Função para criar um elemento de card de post a partir de um objeto de dados
    function createPostCard(postData) {
        // Cria um elemento <article> para o card
        const article = document.createElement('article');
        // Adiciona a classe 'post-card' ao article
        article.classList.add('post-card');

        // Cria o link interno do card (agora aponta para a seção de artigos)
        const link = document.createElement('a');
        // Define o href como âncora para a seção de artigos
        link.href = '#artigos';
        // Adiciona a classe 'post-card-link'
        link.classList.add('post-card-link');

        // Cria a div da imagem do card
        const imageDiv = document.createElement('div');
        // Adiciona a classe 'post-card-image'
        imageDiv.classList.add('post-card-image');

        // Cria a div do conteúdo do card
        const contentDiv = document.createElement('div');
        // Adiciona a classe 'post-card-content'
        contentDiv.classList.add('post-card-content');

        // Cria o título do card (h3)
        const title = document.createElement('h3');
        // Adiciona a classe 'post-card-title'
        title.classList.add('post-card-title');
        // Define o texto do título com os dados do post
        title.textContent = postData.title;

        // Cria o resumo do card (p)
        const excerpt = document.createElement('p');
        // Adiciona a classe 'post-card-excerpt'
        excerpt.classList.add('post-card-excerpt');
        // Define o texto do resumo
        excerpt.textContent = postData.excerpt;

        // Cria a div de metadados
        const metaDiv = document.createElement('div');
        // Adiciona a classe 'post-meta'
        metaDiv.classList.add('post-meta');

        // Cria o span do autor
        const authorSpan = document.createElement('span');
        // Adiciona a classe 'author'
        authorSpan.classList.add('author');
        // Define o texto do autor
        authorSpan.textContent = 'Por ' + postData.author;

        // Cria o span da data
        const dateSpan = document.createElement('span');
        // Adiciona a classe 'date'
        dateSpan.classList.add('date');
        // Define o texto da data
        dateSpan.textContent = postData.date;

        // Monta a hierarquia dos elementos
        // Adiciona autor e data à div de metadados
        metaDiv.appendChild(authorSpan);
        metaDiv.appendChild(dateSpan);

        // Adiciona título, resumo e metadados à div de conteúdo
        contentDiv.appendChild(title);
        contentDiv.appendChild(excerpt);
        contentDiv.appendChild(metaDiv);

        // Adiciona a imagem e o conteúdo ao link
        link.appendChild(imageDiv);
        link.appendChild(contentDiv);

        // Adiciona o link ao article
        article.appendChild(link);

        // Retorna o card completo
        return article;
    }

    // Função para carregar mais posts na grade
    function loadMorePosts() {
        // Calcula o índice inicial do próximo lote
        const startIndex = postsLoaded;
        // Calcula o índice final (não pode exceder o tamanho do array)
        const endIndex = Math.min(startIndex + POSTS_PER_LOAD, additionalPosts.length);

        // Verifica se ainda há posts para carregar
        if (startIndex < additionalPosts.length) {
            // Itera sobre o lote de posts
            for (let i = startIndex; i < endIndex; i++) {
                // Cria um card para o post atual
                const card = createPostCard(additionalPosts[i]);
                // Adiciona o card à grade de posts
                postsGrid.appendChild(card);
            }
            // Atualiza o contador de posts carregados
            postsLoaded = endIndex;

            // Se todos os posts foram carregados, esconde o botão
            if (postsLoaded >= additionalPosts.length) {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Adiciona um ouvinte de clique no botão "Carregar Mais"
    loadMoreBtn.addEventListener('click', loadMorePosts);

    // ============================================
    // 3. BOTÃO VOLTAR AO TOPO
    // ============================================
    // Seleciona o botão voltar ao topo pelo ID
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Função para mostrar/ocultar o botão dependendo da rolagem
    function toggleBackToTopButton() {
        // Verifica se a rolagem vertical é maior que 300 pixels
        if (window.scrollY > 300) {
            // Adiciona a classe 'visible' ao botão
            backToTopBtn.classList.add('visible');
        } else {
            // Remove a classe 'visible' do botão
            backToTopBtn.classList.remove('visible');
        }
    }

    // Adiciona um ouvinte de evento de rolagem na janela
    window.addEventListener('scroll', toggleBackToTopButton);

    // Chama a função uma vez no carregamento para verificar estado inicial
    toggleBackToTopButton();

    // Adiciona um ouvinte de clique no botão voltar ao topo
    backToTopBtn.addEventListener('click', function () {
        // Rola suavemente até o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Suavidade na rolagem
        });
    });

    // ============================================
    // 4. INICIALIZAÇÃO DOS POSTS EXISTENTES (OPCIONAL)
    // ============================================
    // Caso queira carregar alguns posts automaticamente ao abrir a página,
    // descomente a linha abaixo. No momento, a grade começa vazia e o usuário
    // pode clicar em "Carregar Mais" para popular.
    // loadMorePosts();

});
