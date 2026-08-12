// ==========================================
// MENU PRINCIPAL
// ==========================================

function initMenu() {

    const currentPage = window.location.pathname
        .split('/')
        .pop()
        .replace('.html', '') || 'index';

    // ==========================================
    // MENU ATIVO
    // ==========================================

    document.querySelectorAll('.nav-list a').forEach(link => {

        const href = link.getAttribute('href');
        if (!href) return;

        const linkPage = href
            .split('/')
            .pop()
            .replace('.html', '');

        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

    });

    // Método também fica ativo nas páginas filhas

    if (
        currentPage === 'metodo' ||
        currentPage === 'alfabetizacao' ||
        currentPage === 'matematica'
    ) {

        const metodoLink = document.querySelector(
            '.dropdown > a[href="metodo.html"]'
        );

        if (metodoLink) {
            metodoLink.classList.add('active');
        }

    }

    // ==========================================
    // BOTÃO CONTATO
    // ==========================================

    document.querySelectorAll('.contact-btn').forEach(btn => {

        if (currentPage === 'contato') {
            btn.classList.add('contact-btn--active');
        } else {
            btn.classList.remove('contact-btn--active');
        }

    });

    // ==========================================
    // MENU MOBILE
    // ==========================================

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (!mobileMenuBtn || !nav) return;

    mobileMenuBtn.addEventListener('click', () => {

        nav.classList.toggle('active');

        const expanded = nav.classList.contains('active');

        mobileMenuBtn.setAttribute(
            'aria-expanded',
            expanded
        );

        mobileMenuBtn.classList.toggle(
            'active',
            expanded
        );

    });

    // ==========================================
    // FECHAR MENU AO CLICAR
    // ==========================================

    document.querySelectorAll('.nav-list a').forEach(link => {

        link.addEventListener('click', () => {

            if (window.innerWidth > 992) return;

            nav.classList.remove('active');

            mobileMenuBtn.classList.remove('active');

            mobileMenuBtn.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

}


// ==========================================
// HEADER SCROLL
// ==========================================

function initHeaderScroll() {

    const header = document.querySelector('.header');

    if (!header) return;

    const updateHeader = () => {

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

    };

    updateHeader();

    window.addEventListener(
        'scroll',
        updateHeader
    );

}


// ==========================================
// EXECUÇÃO
// ==========================================

// páginas sem include
document.addEventListener(
    'DOMContentLoaded',
    () => {
        initMenu();
        initHeaderScroll();
    }
);

// páginas com include
document.addEventListener(
    'includesLoaded',
    () => {
        initMenu();
        initHeaderScroll();
    }
);