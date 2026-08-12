// ==========================================
// LAZY LOADING DE IMAGENS
// ==========================================

function initLazyLoad() {

    const images = document.querySelectorAll(
        'img[data-src]'
    );

    if (!images.length) return;

    const imageObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute('data-src');

                observer.unobserve(img);

            });

        },
        {
            rootMargin: '100px'
        }
    );

    images.forEach(img => imageObserver.observe(img));

}


// ==========================================
// EXECUÇÃO
// ==========================================

document.addEventListener(
    'DOMContentLoaded',
    initLazyLoad
);

document.addEventListener(
    'includesLoaded',
    initLazyLoad
);