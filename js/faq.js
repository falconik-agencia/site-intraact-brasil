/* ========================================================================
   FAQ.JS
   Accordion, navegação por tags e busca
   ======================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const categories  = document.querySelectorAll('.faq-category');
    const searchInput = document.getElementById('faqSearch');
    const tagLinks    = document.querySelectorAll('.faq-tags a');


    /* ====================================================================
       1. ACCORDION
       - apenas uma pergunta aberta na página inteira
       - clicar na aberta fecha; clicar em outra troca
       ==================================================================== */

    const allItems = document.querySelectorAll('.faq-item');

    function closeItem(item) {

        const question = item.querySelector('.faq-question');
        const answer   = item.querySelector('.faq-answer');
        const icon     = item.querySelector('.faq-icon');

        if (question.getAttribute('aria-expanded') !== 'false') {
            question.setAttribute('aria-expanded', 'false');
        }

        answer.hidden = true;
        item.classList.remove('is-active');

        if (icon) icon.textContent = '+';
    }

    function openItem(item) {

        const question = item.querySelector('.faq-question');
        const answer   = item.querySelector('.faq-answer');
        const icon     = item.querySelector('.faq-icon');

        question.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        item.classList.add('is-active');

        if (icon) {
            icon.textContent = '−';
            pop(icon);
        }
    }

    function pop(icon) {
        icon.classList.remove('is-animating');
        // força reflow para poder reiniciar a animação em cliques seguidos
        void icon.offsetWidth;
        icon.classList.add('is-animating');
    }

    function initAccordions() {

        // estado inicial: tudo fechado
        allItems.forEach(closeItem);

        allItems.forEach(item => {

            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {

                const isOpen = question.getAttribute('aria-expanded') === 'true';

                // fecha qualquer pergunta aberta em qualquer categoria
                allItems.forEach(other => {
                    if (other !== item) closeItem(other);
                });

                // alterna a pergunta clicada
                if (isOpen) {
                    closeItem(item);
                } else {
                    openItem(item);
                }
            });
        });
    }


    /* ====================================================================
       2. NAVEGAÇÃO POR TAGS
       - clique rola suavemente até a categoria
       - tag fica marcada como ativa conforme a categoria em foco
       ==================================================================== */

    function setActiveTag(link) {
        tagLinks.forEach(a => a.classList.remove('is-active'));
        if (link) link.classList.add('is-active');
    }

    function initTags() {

        tagLinks.forEach(link => {

            link.addEventListener('click', (event) => {

                const targetId = link.getAttribute('href').slice(1);
                const target   = document.getElementById(targetId);

                if (!target) return;

                event.preventDefault();

                setActiveTag(link);

                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const link = document.querySelector(
                    `.faq-tags a[href="#${entry.target.id}"]`
                );

                if (link) setActiveTag(link);
            });

        }, {
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        });

        categories.forEach(category => observer.observe(category));
    }


    /* ====================================================================
       3. BUSCA
       - filtra por pergunta e resposta
       - abre automaticamente as perguntas que combinam com o termo
       - destaca o trecho encontrado na pergunta
       - mostra mensagem quando não há resultados
       ==================================================================== */

    let emptyState = document.querySelector('.faq-empty');

    if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.className = 'faq-empty';
        emptyState.innerHTML = '<p>Nenhuma pergunta encontrada. Tente outro termo de busca.</p>';

        const main = document.querySelector('main.faq');
        if (main) main.appendChild(emptyState);
    }

    function normalize(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function highlightMatch(span, term) {

        const original = span.dataset.original || span.textContent;
        span.dataset.original = original;

        const normOriginal = normalize(original);
        const normTerm      = normalize(term);
        const index          = normOriginal.indexOf(normTerm);

        if (!term || index === -1) {
            span.textContent = original;
            return;
        }

        const before = original.slice(0, index);
        const match  = original.slice(index, index + term.length);
        const after  = original.slice(index + term.length);

        span.textContent = '';
        span.append(document.createTextNode(before));

        const mark = document.createElement('mark');
        mark.textContent = match;
        span.append(mark);

        span.append(document.createTextNode(after));
    }

    function clearMatch(span) {
        if (span.dataset.original) {
            span.textContent = span.dataset.original;
        }
    }

    function debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    function runSearch(rawTerm) {

        const term = rawTerm.trim();
        let totalVisible = 0;

        categories.forEach(category => {

            const items = category.querySelectorAll('.faq-item');
            let visibleInCategory = 0;

            items.forEach(item => {

                const questionSpan = item.querySelector('.faq-question span:first-child');
                const answerP       = item.querySelector('.faq-answer p');

                const questionText = questionSpan.dataset.original || questionSpan.textContent;
                const answerText   = answerP ? answerP.textContent : '';

                const matches = !term
                    || normalize(questionText).includes(normalize(term))
                    || normalize(answerText).includes(normalize(term));

                item.hidden = !matches;

                if (matches) {

                    visibleInCategory++;
                    totalVisible++;

                    if (term) {
                        highlightMatch(questionSpan, term);
                        openItem(item);
                    } else {
                        clearMatch(questionSpan);
                        closeItem(item);
                    }

                } else {
                    clearMatch(questionSpan);
                }
            });

            category.hidden = visibleInCategory === 0;
        });

        emptyState.classList.toggle('is-visible', totalVisible === 0);
    }

    function initSearch() {

        if (!searchInput) return;

        const debouncedSearch = debounce(runSearch, 200);

        searchInput.addEventListener('input', (event) => {
            debouncedSearch(event.target.value);
        });
    }


    /* ====================================================================
       INIT
       ==================================================================== */

    initAccordions();
    initTags();
    initSearch();

});