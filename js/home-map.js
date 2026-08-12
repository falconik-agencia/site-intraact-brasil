// ==========================================
// MAPA INTERATIVO — RESULTADOS
// ==========================================

const stateData = {
    BRSC: {
        name: "Santa Catarina",
        municipios: "46",
        alunos: "10.595",
        professores: "2.370"
    },
    BRPR: {
        name: "Paraná",
        municipios: "6",
        alunos: "12.146",
        professores: "414"
    },
    BRPE: {
        name: "Pernambuco",
        municipios: "1",
        alunos: "3.221",
        professores: "237"
    },
    BRMT: {
        name: "Mato Grosso",
        municipios: "4",
        alunos: "2.060",
        professores: "75"
    },
    BRMG: {
        name: "Minas Gerais",
        municipios: "6",
        alunos: "1.647",
        professores: "152"
    }
};

const activeStates = Object.keys(stateData);

function initResultsMap() {

    const mapImg = document.getElementById('brazil-map');

    if (!mapImg) return;

    fetch(mapImg.src)
        .then(response => response.text())
        .then(svgText => {

            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(
                svgText,
                'image/svg+xml'
            );

            const svgEl = svgDoc.querySelector('svg');

            if (!svgEl) return;

            svgEl.classList.add('results__map-svg');

            svgEl.querySelectorAll('circle').forEach(circle => {
                circle.style.pointerEvents = 'none';
            });

            activeStates.forEach(id => {

                const statePath =
                    svgEl.querySelector(`path[id="${id}"]`) ||
                    svgEl.querySelector(`path[data-id="${id}"]`) ||
                    svgEl.querySelector(`path[title="${id}"]`);

                if (!statePath) return;

                statePath.classList.add('map-state--active');

                statePath.setAttribute('tabindex', '0');
                statePath.setAttribute('role', 'button');
                statePath.setAttribute(
                    'aria-label',
                    `Ver dados de ${stateData[id].name}`
                );

            });

            mapImg.replaceWith(svgEl);

            setupMapListeners(svgEl);

        })
        .catch(error => {
            console.error('Erro ao carregar SVG:', error);
        });

}

function setupMapListeners(svgEl) {

    const tooltip = document.getElementById('map-tooltip');

    if (!tooltip) return;

    svgEl.querySelectorAll('.map-state--active')
        .forEach(state => {

            state.addEventListener('mouseenter', () => {

                showTooltip(
                    tooltip,
                    state.id
                );

                highlightState(
                    svgEl,
                    state
                );

            });

            state.addEventListener('mouseleave', () => {

                closeTooltip(
                    tooltip,
                    svgEl
                );

            });

            state.addEventListener('focus', () => {

                showTooltip(
                    tooltip,
                    state.id
                );

                highlightState(
                    svgEl,
                    state
                );

            });

            state.addEventListener('blur', () => {

                closeTooltip(
                    tooltip,
                    svgEl
                );

            });

            state.addEventListener('keydown', e => {

                if (e.key !== 'Enter' && e.key !== ' ')
                    return;

                e.preventDefault();

                showTooltip(
                    tooltip,
                    state.id
                );

                highlightState(
                    svgEl,
                    state
                );

            });

        });

    document.addEventListener('keydown', e => {

        if (e.key === 'Escape') {

            closeTooltip(
                tooltip,
                svgEl
            );

        }

    });

}

function showTooltip(tooltip, id) {

    const data = stateData[id];

    if (!data) return;

    document.getElementById('tooltip-state').textContent =
        data.name;

    document.getElementById('tooltip-municipios').textContent =
        data.municipios;

    document.getElementById('tooltip-alunos').textContent =
        data.alunos;

    document.getElementById('tooltip-professores').textContent =
        data.professores;

    tooltip.removeAttribute('hidden');

}

function highlightState(svgEl, activeState) {

    svgEl
        .querySelectorAll('.map-state--selected')
        .forEach(state =>
            state.classList.remove('map-state--selected')
        );

    activeState.classList.add(
        'map-state--selected'
    );

}

function closeTooltip(tooltip, svgEl) {

    tooltip.setAttribute(
        'hidden',
        ''
    );

    svgEl
        .querySelectorAll('.map-state--selected')
        .forEach(state =>
            state.classList.remove('map-state--selected')
        );

}


// ==========================================
// EXECUÇÃO
// ==========================================

document.addEventListener(
    'DOMContentLoaded',
    initResultsMap
);

document.addEventListener(
    'includesLoaded',
    initResultsMap
);