/* ==========================================================================
   HOME-BLOG.JS
   Seção "Conteúdos que inspiram e transformam" (home).

   Puxa os dados de js/blog-data.js:
   - Card grande  -> postagem marcada como featured (fallback: mais recente)
   - 2 cards menores -> as 2 postagens mais recentes, excluindo o destaque
     (sempre atualiza sozinho conforme novas postagens são cadastradas)

   Requer, nesta ordem, antes deste arquivo:
       <script src="js/blog-data.js"></script>
       <script src="js/home-blog.js"></script>
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const featuredWrap = document.getElementById('blogHomeFeatured');
    const listWrap      = document.getElementById('blogHomeList');

    if (!featuredWrap || !listWrap) return;

    const POSTS = (typeof BLOG !== 'undefined') ? BLOG.posts : [];
    if (!POSTS.length) return;

    // Aceita tanto post.tag quanto post.category (blog-data.js usa "category")
    POSTS.forEach(post => {
        if (!post.tag && post.category) post.tag = post.category;
    });


    /* ---------- Utilitários ---------- */

    function formatDate(isoDate) {
        const d = new Date(isoDate + 'T00:00:00');
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function readTimeLong(minutes) {
        return `${minutes} minuto${minutes === 1 ? '' : 's'} de leitura`;
    }

    function sortByDateDesc(list) {
        return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    function squareImage(post) {
        return post.imageSquare || post.image;
    }

    // Mesmo mapa de cores usado em js/blog.js, para manter o padrão de
    // tag-pill (components.css) consistente entre home e blog.
    const TAG_COLORS = {
        alfabetizacao: 'teal',
        matematica:    'orange',
        noticia:       'periwinkle',
        formacao:      'indigo',
        resultados:    'yellow'
    };

    function tagPillClass(tagKey) {
        return `tag-pill--${TAG_COLORS[tagKey] || 'teal'}`;
    }

    function getFeaturedPost() {
        const marked = POSTS.filter(p => p.featured);
        const pool = marked.length ? marked : POSTS;
        return sortByDateDesc(pool)[0];
    }


    /* ---------- Seleção das postagens ---------- */

    const featuredPost = getFeaturedPost();

    const latestPosts = sortByDateDesc(
        POSTS.filter(p => p.id !== featuredPost?.id)
    ).slice(0, 2);


    /* ---------- Render: card grande (destaque) ---------- */

    function renderFeatured(post) {
        if (!post) return;

        featuredWrap.innerHTML = `
            <img class="blog-home__featured-img" src="${post.image}" alt="${post.imageAlt || ''}" loading="lazy">
            <div class="blog-home__featured-overlay"></div>
            <div class="blog-home__featured-content">
                <span class="tag-pill ${tagPillClass(post.tag.key)}">${post.tag.label}</span>
                <div class="blog-home__featured-flag">
                    <span class="blog-home__featured-flag-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2.5l2.9 6.24 6.6.7-4.9 4.6 1.3 6.66L12 17.6l-5.9 3.1 1.3-6.66-4.9-4.6 6.6-.7L12 2.5z"/>
                        </svg>
                    </span>
                    Artigo em destaque
                </div>
                <h3 class="blog-home__featured-title">${post.title}</h3>
                <a href="${post.url}" class="blog-home__featured-btn">Ler o artigo →</a>
            </div>
        `;
    }


    /* ---------- Render: cards pequenos (mais recentes) ---------- */

    function buildCard(post) {
        const card = document.createElement('article');
        card.className = 'blog-home__card';

        card.innerHTML = `
            <div class="blog-home__card-image">
                <img src="${squareImage(post)}" alt="${post.imageAlt || ''}" loading="lazy">
            </div>
            <div class="blog-home__card-content">
                <span class="tag-pill ${tagPillClass(post.tag.key)}">${post.tag.label}</span>
                <h3 class="blog-home__card-title">${post.title}</h3>
                <div class="blog-home__card-footer">
                    <p class="blog-home__card-meta">${formatDate(post.date)} • ${readTimeLong(post.readTime)}</p>
                    <a href="${post.url}" class="blog-home__card-arrow" aria-label="Ler ${post.title}">→</a>
                </div>
            </div>
        `;
        return card;
    }

    function renderList(posts) {
        listWrap.innerHTML = '';
        posts.forEach(post => listWrap.appendChild(buildCard(post)));
    }


    renderFeatured(featuredPost);
    renderList(latestPosts);

});