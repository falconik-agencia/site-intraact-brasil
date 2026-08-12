/* ====================================
   LIGHTBOX — O QUE NOS MOVE
   ==================================== */
(function () {

    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    // Apenas ativa lightbox em telas maiores
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    if (!isDesktop) return;


    const lightboxImg = document.getElementById('lightboxImg');

    const triggers = [
        ...document.querySelectorAll('.momentos__trigger')
    ];

    const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.lightbox__nav--next');

    const closeEls = lightbox.querySelectorAll('[data-close]');

    let currentIndex = 0;
    let lastFocused = null;


    function openLightbox(index) {

        currentIndex = index;

        const trigger = triggers[currentIndex];

        lightboxImg.src = trigger.dataset.full;
        lightboxImg.alt = trigger.querySelector('img').alt;


        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';


        lastFocused = trigger;

        const closeButton = lightbox.querySelector('.lightbox__close');

        if (closeButton) {
            closeButton.focus();
        }

    }


    function closeLightbox() {

        lightbox.classList.remove('is-open');

        lightbox.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';

        lightboxImg.src = '';


        if (lastFocused) {
            lastFocused.focus();
        }

    }


    function showNext() {

        currentIndex++;

        if (currentIndex >= triggers.length) {
            currentIndex = 0;
        }

        openLightbox(currentIndex);

    }


    function showPrev() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = triggers.length - 1;
        }

        openLightbox(currentIndex);

    }


    // Abrir imagem
    triggers.forEach((trigger, index) => {

        trigger.addEventListener('click', () => {

            openLightbox(index);

        });

    });


    // Navegação
    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    }


    // Fechar
    closeEls.forEach((el) => {

        el.addEventListener('click', closeLightbox);

    });


    // Teclado
    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('is-open')) return;


        switch (e.key) {

            case 'Escape':
                closeLightbox();
                break;


            case 'ArrowRight':
                showNext();
                break;


            case 'ArrowLeft':
                showPrev();
                break;

        }

    });


})();