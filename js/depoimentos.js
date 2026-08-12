document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Carrossel de depoimentos ---------- */

    const track = document.getElementById('depoimentosTrack');
    const dotsContainer = document.getElementById('depoimentosDots');

    if (track && dotsContainer) {

        const cards = Array.from(track.children);
        const totalCards = cards.length;

        let cardsPerView = window.innerWidth < 1024 ? 1 : 2;
        let totalPages = Math.ceil(totalCards / cardsPerView);
        let currentPage = 0;

        function buildDots() {
            dotsContainer.innerHTML = '';

            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('button');
                dot.className = 'resultados-depoimentos__dot';
                if (i === 0) dot.classList.add('resultados-depoimentos__dot--active');
                dot.dataset.page = i;
                dot.setAttribute('aria-label', `Página ${i + 1} de depoimentos`);

                dot.addEventListener('click', () => goToPage(i));

                dotsContainer.appendChild(dot);
            }
        }

        function goToPage(index) {
            currentPage = Math.max(0, Math.min(index, totalPages - 1));

            const trackStyles = getComputedStyle(track);
            const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
            const cardWidth = cards[0].getBoundingClientRect().width + gap;
            const offset = currentPage * cardsPerView * cardWidth;

            track.style.transform = `translateX(-${offset}px)`;

            const dots = dotsContainer.querySelectorAll('.resultados-depoimentos__dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('resultados-depoimentos__dot--active', i === currentPage);
            });
        }

        function handleResize() {
            const newCardsPerView = window.innerWidth < 1024 ? 1 : 2;

            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                totalPages = Math.ceil(totalCards / cardsPerView);
                currentPage = 0;
                buildDots();
            }

            goToPage(currentPage);
        }

        buildDots();
        goToPage(0);

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 150);
        });
    }

    /* ---------- Animação do círculo percentual ---------- */

    const donutFill = document.querySelector('.resultados-depoimentos__donut-fill');
    const statNumber = document.querySelector('.resultados-depoimentos__stat-number');

    if (donutFill && statNumber) {
        const percent = parseFloat(donutFill.dataset.percent);
        const circumference = 2 * Math.PI * 85;
        const targetOffset = circumference - (percent / 100) * circumference;

        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;

                    donutFill.style.strokeDashoffset = targetOffset;

                    const duration = 1400;
                    const startTime = performance.now();

                    function updateNumber(now) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const current = (progress * percent).toFixed(1).replace('.', ',');

                        statNumber.textContent = `${current}%`;

                        if (progress < 1) {
                            requestAnimationFrame(updateNumber);
                        }
                    }

                    requestAnimationFrame(updateNumber);
                }
            });
        }, { threshold: 0.4 });

        observer.observe(donutFill);
    }

});