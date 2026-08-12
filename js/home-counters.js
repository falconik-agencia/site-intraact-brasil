// ==========================================
// CONTADORES ANIMADOS
// ==========================================

function initCounters() {

    const counters = document.querySelectorAll('[data-target]');

    if (!counters.length) return;

    const formatNumber = (value, element) => {

        if (element.dataset.thousands === 'true') {
            return Math.floor(value).toLocaleString('pt-BR');
        }

        return Math.floor(value);

    };

    const animateCounter = (element) => {

        const target = Number(element.dataset.target);

        const prefix = element.dataset.prefix || '';
        const suffix = element.dataset.suffix || '';

        const duration = Number(element.dataset.duration) || 2000;

        const stepTime = 16;

        const increment = target / (duration / stepTime);

        let current = 0;

        const update = () => {

            current += increment;

            if (current >= target) {

                element.textContent =
                    `${prefix}${formatNumber(target, element)}${suffix}`;

                return;

            }

            element.textContent =
                `${prefix}${formatNumber(current, element)}${suffix}`;

            requestAnimationFrame(update);

        };

        update();

    };

    const observer = new IntersectionObserver(

        (entries, obs) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                animateCounter(entry.target);

                obs.unobserve(entry.target);

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => observer.observe(counter));

}


// ==========================================
// EXECUÇÃO
// ==========================================

document.addEventListener(
    'DOMContentLoaded',
    initCounters
);

document.addEventListener(
    'includesLoaded',
    initCounters
);