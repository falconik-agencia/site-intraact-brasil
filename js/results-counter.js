// ==========================================
// CONTADORES — RESULTADOS
// ==========================================

function initResultsCounters() {

    const counters = document.querySelectorAll(
        '.results__indicator-number[data-target]'
    );

    if (!counters.length) return;

    const formatNumber = (value, thousands) => {

        if (thousands) {
            return Math.floor(value).toLocaleString('pt-BR');
        }

        return Math.floor(value);

    };

    const animateCounter = (counter) => {

        const target = Number(counter.dataset.target);

        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';

        const thousands =
            counter.dataset.thousands === 'true';

        const duration = 2000;
        const stepTime = 16;

        const increment =
            target / (duration / stepTime);

        let current = 0;

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    `${prefix}${formatNumber(target, thousands)}${suffix}`;

                return;

            }

            counter.textContent =
                `${prefix}${formatNumber(current, thousands)}${suffix}`;

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

    counters.forEach(counter => {

        observer.observe(counter);

    });

}


// ==========================================
// EXECUÇÃO
// ==========================================

document.addEventListener(
    'DOMContentLoaded',
    initResultsCounters
);

document.addEventListener(
    'includesLoaded',
    initResultsCounters
);