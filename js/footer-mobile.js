// ==========================================
// FOOTER MOBILE
// ==========================================

async function initFooterMobile() {

    const footerMobile = document.getElementById(
        'footer-mobile'
    );

    if (!footerMobile) return;


    const isMobile = window.matchMedia(
        '(max-width:576px)'
    ).matches;


    // Se não for mobile, remove o footer carregado
    if (!isMobile) {

        footerMobile.innerHTML = '';
        footerMobile.removeAttribute('data-loaded');

        return;

    }


    // Evita carregar duas vezes
    if (footerMobile.dataset.loaded) return;


    try {

        const response = await fetch(
            'partials/footer.html'
        );


        if (!response.ok) {

            throw new Error(
                `Erro ${response.status}`
            );

        }


        footerMobile.innerHTML =
            await response.text();


        footerMobile.dataset.loaded = true;


    } catch (error) {

        console.error(
            'Erro ao carregar footer:',
            error
        );

    }

}


// ==========================================
// EXECUÇÃO
// ==========================================

document.addEventListener(
    'DOMContentLoaded',
    initFooterMobile
);


document.addEventListener(
    'includesLoaded',
    initFooterMobile
);


window.addEventListener(
    'resize',
    () => {

        initFooterMobile();

    }
);