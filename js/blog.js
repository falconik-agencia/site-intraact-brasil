/* ========================================================================
   BLOG.JS
   Motor único do blog: usado tanto na página principal (listagem) quanto
   em cada página de postagem única (blog-post-N.html).

   O que vem de BLOG_POSTS (blog-data.js): imagem, data, tempo de leitura,
   tag, autor e destaque. Inclua blog-data.js ANTES deste arquivo em
   qualquer página que o utilize:

       <script src="js/blog-data.js"></script>
       <script src="js/blog.js"></script>

   RESUMO (EXCERPT): não vem de blog-data.js. Cada postagem tem, no final
   do próprio HTML, um bloco:

       <p data-field="listing-summary" hidden>...</p>

   A página principal do blog busca (fetch) cada blog-post-N.html e
   extrai esse texto para montar os cards e o destaque. Isso evita
   duplicar o resumo em dois lugares.
   ======================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const POSTS = (typeof BLOG !== 'undefined') ? BLOG.posts : [];

    POSTS.forEach(post => {
    if (!post.tag && post.category) {
        post.tag = post.category;
    }
});

    if (!POSTS.length) return;


    /* ====================================================================
       Utilitários gerais
       ==================================================================== */

    function normalize(text) {
        return (text || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function formatDate(isoDate) {
        const d = new Date(isoDate + 'T00:00:00');
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // "6 minutos de leitura" — usado no grid e no destaque da listagem
    function readTimeLong(minutes) {
        return `${minutes} minuto${minutes === 1 ? '' : 's'} de leitura`;
    }

    // "8 min de leitura" — usado no cabeçalho da página de postagem única
    function readTimeShort(minutes) {
        return `${minutes} min de leitura`;
    }

    function sortByDateDesc(list) {
        return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    function getFeaturedPost() {
        const marked = POSTS.filter(p => p.featured);
        const pool = marked.length ? marked : POSTS;
        return sortByDateDesc(pool)[0];
    }

    // Imagem quadrada (cards / relacionados). Cai para a imagem larga
    // caso a postagem ainda não tenha uma versão quadrada cadastrada.
    function squareImage(post) {
        return post.imageSquare || post.image;
    }

    // Mapa de cor por categoria, usando o padrão de tag-pill definido em
    // components.css (indigo, orange, yellow, periwinkle, cream, teal,
    // lavender). "lavender" fica reservado para o selo "Em destaque".
    const TAG_COLORS = {
        alfabetizacao: 'teal',
        matematica:    'orange',
        noticia:        'periwinkle',
        formacao:      'indigo',
        resultados:    'yellow'
    };

    function tagPillClass(tagKey) {
        return `tag-pill--${TAG_COLORS[tagKey] || 'teal'}`;
    }

    const featuredPost = getFeaturedPost();


    /* ====================================================================
       Busca do resumo (listing-summary) direto no HTML de cada postagem
       ==================================================================== */

    const summaries = {}; // { [post.id]: string }

    async function loadSummary(post) {
        try {
            const res = await fetch(post.url);
            if (!res.ok) throw new Error('request failed');

            const html = await res.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const el = doc.querySelector('[data-field="listing-summary"]');

            summaries[post.id] = el ? el.textContent.trim() : '';
        } catch (err) {
            summaries[post.id] = '';
        }
    }

    function loadAllSummaries() {
        return Promise.all(POSTS.map(loadSummary));
    }


    /* ====================================================================
       PARTE 1 — PÁGINA PRINCIPAL DO BLOG (listagem)
       Ativa automaticamente quando encontra #blogGrid na página.
       ==================================================================== */

    const grid = document.getElementById('blogGrid');

    if (grid) {

        const featuredWrap  = document.getElementById('blogFeatured');
        const featuredSection = document.querySelector('.blog-featured');
        const tagButtons    = document.querySelectorAll('.blog-tags__btn');
        const searchInput   = document.getElementById('blogSearch');
        const searchBtn     = document.getElementById('blogSearchBtn');
        const loadMoreBtn   = document.getElementById('blogLoadMore');
        const loadMoreWrap  = document.getElementById('blogLoadMoreWrap');
        const emptyState    = document.getElementById('blogEmpty');
        const authorFilterBox  = document.getElementById('blogAuthorFilter');
        const authorFilterName = document.getElementById('blogAuthorFilterName');

        const INITIAL_COUNT = 4;  // 2 fileiras de 2 posts
        const BATCH_SIZE    = 2;  // 1 fileira por clique em "veja mais"

        let activeTag   = 'todos';
        let searchTerm  = '';
        let revealCount = INITIAL_COUNT;

        // Filtro por autor via URL (?autor=<id>), usado pelo link
        // "Ver todos os artigos" da caixa de autor em cada postagem.
        const authorId = new URLSearchParams(window.location.search).get('autor');

        // Com filtro de autor ativo, a listagem mostra TODOS os artigos
        // daquele autor (inclusive o que seria o destaque) e a seção de
        // destaque some, já que ela é sobre o post mais recente do site
        // como um todo, não sobre a pessoa filtrada.
        const listPosts = authorId
            ? sortByDateDesc(POSTS.filter(p => p.author?.id === authorId))
            : sortByDateDesc(POSTS.filter(p => p.id !== featuredPost?.id));

        function initAuthorFilter() {
            if (!authorId) return;

            if (featuredSection) featuredSection.hidden = true;

            const matchName = listPosts[0]?.author?.name || authorId;

            if (authorFilterBox) authorFilterBox.hidden = false;
            if (authorFilterName) authorFilterName.textContent = matchName;
        }


        /* ---------- Destaque ---------- */

        function renderFeatured() {
            if (authorId) return;
            if (!featuredWrap || !featuredPost) return;

            featuredWrap.innerHTML = `
                <div class="blog-featured__image">
                    <img src="${featuredPost.image}" alt="${featuredPost.imageAlt || ''}">
                </div>
                <div class="blog-featured__content">
                    <span class="tag-pill ${tagPillClass(featuredPost.tag.key)}">${featuredPost.tag.label}</span>
                    <h2>${featuredPost.title}</h2>
                    <p>${summaries[featuredPost.id] || ''}</p>
                    <p class="blog-featured__meta">${formatDate(featuredPost.date)} • ${readTimeLong(featuredPost.readTime)}</p>
                    <a href="${featuredPost.url}" class="btn-outline btn-outline--orange">Ler o artigo →</a>
                </div>
            `;
        }


        /* ---------- Cards do grid ---------- */

        function cardMatchesTag(post) {
            return activeTag === 'todos' || post.tag.key === activeTag;
        }

        function cardMatchesSearch(post) {
            if (!searchTerm) return true;
            return normalize(post.title).includes(searchTerm) || normalize(post.tag.label).includes(searchTerm);
        }

        function getFilteredPosts() {
            return listPosts.filter(post => cardMatchesTag(post) && cardMatchesSearch(post));
        }

        function buildCard(post) {
            const card = document.createElement('article');
            card.className = 'blog-card';
            card.dataset.tag = post.tag.key;

            card.innerHTML = `
                <div class="blog-card__image">
                    <img src="${squareImage(post)}" alt="${post.imageAlt || ''}">
                </div>
                <div class="blog-card__content">
                    <span class="tag-pill ${tagPillClass(post.tag.key)}">${post.tag.label}</span>
                    <h3>${post.title}</h3>
                    <div class="blog-card__footer">
                        <p class="blog-card__meta">${formatDate(post.date)}<br>${readTimeLong(post.readTime)}</p>
                        <a href="${post.url}" class="blog-card__arrow" aria-label="Ler ${post.title}">→</a>
                    </div>
                </div>
            `;
            return card;
        }

        function render() {
            const filtered = getFilteredPosts();

            grid.innerHTML = '';
            filtered.slice(0, revealCount).forEach(post => grid.appendChild(buildCard(post)));

            const hasResults = filtered.length > 0;
            if (emptyState) emptyState.classList.toggle('is-visible', !hasResults);

            const hasMore = filtered.length > revealCount;
            if (loadMoreWrap) loadMoreWrap.hidden = !hasMore;
        }


        /* ---------- Tags ---------- */

        function initTags() {
            tagButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('is-active')) return;

                    tagButtons.forEach(b => b.classList.remove('is-active'));
                    btn.classList.add('is-active');

                    activeTag   = btn.dataset.tag;
                    revealCount = INITIAL_COUNT;

                    render();
                });
            });
        }


        /* ---------- Busca ---------- */

        function debounce(fn, delay) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => fn(...args), delay);
            };
        }

        function runSearch(value) {
            searchTerm  = normalize(value.trim());
            revealCount = INITIAL_COUNT;
            render();
        }

        function initSearch() {
            if (!searchInput) return;

            const debouncedSearch = debounce(runSearch, 200);
            searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));

            if (searchBtn) {
                searchBtn.addEventListener('click', () => runSearch(searchInput.value));
            }
        }


        /* ---------- Carregar mais ---------- */

        function initLoadMore() {
            if (!loadMoreBtn) return;

            loadMoreBtn.addEventListener('click', () => {
                revealCount += BATCH_SIZE;
                render();
            });
        }


        // Busca todos os resumos antes de montar destaque e grid pela
        // primeira vez, para não aparecer texto vazio na primeira pintura.
        loadAllSummaries().then(() => {
            initAuthorFilter();
            renderFeatured();
            initTags();
            initSearch();
            initLoadMore();
            render();
        });
    }


    /* ====================================================================
       PARTE 2 — PÁGINA DE POSTAGEM ÚNICA
       Ativa automaticamente quando encontra um elemento [data-post-id].
       ==================================================================== */

    const postWrap = document.querySelector('[data-post-id]');

    if (postWrap) {

        const post = POSTS.find(p => p.id === postWrap.dataset.postId);

        if (post) {

            const setText = (field, value) => {
                const el = postWrap.querySelector(`[data-field="${field}"]`);
                if (el) el.textContent = value;
            };

            const setImage = (field, src, alt) => {
                const el = postWrap.querySelector(`[data-field="${field}"]`);
                if (el) { el.src = src; el.alt = alt || ''; }
            };

            const setHref = (field, href) => {
                const el = postWrap.querySelector(`[data-field="${field}"]`);
                if (el) el.href = href;
            };

            // Breadcrumb
            const breadcrumbEl = postWrap.querySelector('[data-field="breadcrumb"]');
            if (breadcrumbEl && post.breadcrumb) {
                breadcrumbEl.textContent = post.breadcrumb.join(' > ');
            }

            // Tag / destaque (na página de postagem, "Em destaque" é um selo
            // genérico em lavanda — a categoria já aparece no breadcrumb.
            // Quando não é destaque, mostra a categoria com a cor do padrão.)
            const tagEl = postWrap.querySelector('[data-field="tag"]');
            if (tagEl) {
                if (post.featured) {
                    tagEl.textContent = 'Em destaque';
                    tagEl.className = 'tag-pill post-hero__tag tag-pill--lavender';
                } else {
                    tagEl.textContent = post.tag.label;
                    tagEl.className = `tag-pill post-hero__tag ${tagPillClass(post.tag.key)}`;
                }
            }

            setText('title', post.title);
            // Resumo do hero (post-hero__excerpt) é escrito manualmente no
            // HTML da postagem — não vem de blog-data.js.
            setText('readtime', readTimeShort(post.readTime));
            setText('date', formatDate(post.date));
            setImage('hero-image', post.image, post.imageAlt);

            setText('author-name', post.author.name);
            setText('author-bio', post.author.bio);
            setImage('author-avatar', post.author.avatar, post.author.name);
            setHref('author-link', post.author.link);
            setText('source', post.source);

            // Artigos relacionados (3 postagens mais recentes, excluindo a
            // atual E o destaque, para não duplicar o que já é destaque)
            const relatedWrap = document.getElementById('postRelated');
            if (relatedWrap) {
                const related = sortByDateDesc(
                    POSTS.filter(p => p.id !== post.id && p.id !== featuredPost?.id)
                ).slice(0, 3);

                relatedWrap.innerHTML = related.map(p => `
                    <article class="post-related__item">
                        <a class="post-related__image" href="${p.url}">
                            <img src="${squareImage(p)}" alt="${p.imageAlt || ''}">
                        </a>
                        <div class="post-related__content">
                            <a class="post-related__title" href="${p.url}">${p.title}</a>
                            <span class="post-related__meta">${formatDate(p.date)}<br>${readTimeLong(p.readTime)}</span>
                        </div>
                        <a class="blog-card__arrow post-related__arrow" href="${p.url}" aria-label="Ler ${p.title}">→</a>
                    </article>
                `).join('');
            }

            document.title = `${post.title} | Blog IntraAct Brasil`;
        }
    }

});