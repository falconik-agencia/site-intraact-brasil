// ================================================================
// VIDEOS.JS
// Busca os vídeos mais recentes através do Cloudflare Worker
// ================================================================

// URL da API do Cloudflare Worker
const VIDEOS_API_URL =
    'https://intraactbrasil-api.falconikagencia.workers.dev/api/videos';

// Quantidade máxima de vídeos exibidos
const MAX_RESULTS = 3;


// ================================================================
// FUNÇÃO PARA BUSCAR VÍDEOS
// ================================================================

async function getLatestVideos() {

    try {

        console.log('🔍 Buscando vídeos através do Cloudflare Worker...');

        const response = await fetch(VIDEOS_API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });


        // ------------------------------------------------------------
        // Verifica resposta HTTP
        // ------------------------------------------------------------

        if (!response.ok) {

            throw new Error(
                `Erro HTTP ${response.status}`
            );

        }


        // ------------------------------------------------------------
        // Converte resposta para JSON
        // ------------------------------------------------------------

        const data = await response.json();


        // ------------------------------------------------------------
        // Verifica estrutura da resposta
        // ------------------------------------------------------------

        if (
            !data ||
            !Array.isArray(data.videos)
        ) {

            throw new Error(
                'Resposta inválida da API de vídeos.'
            );

        }


        // ------------------------------------------------------------
        // Retorna somente a quantidade necessária
        // ------------------------------------------------------------

        const videos =
            data.videos.slice(0, MAX_RESULTS);


        console.log(
            `✅ ${videos.length} vídeos recebidos.`
        );


        return videos;


    } catch (error) {

        console.error(
            '❌ Erro ao carregar vídeos:',
            error
        );

        return [];

    }

}


// ================================================================
// FUNÇÃO PARA EXIBIR OS VÍDEOS NA PÁGINA
// ================================================================

async function displayVideos() {

    const container =
        document.getElementById(
            'resultados-videos-latest'
        );


    // ------------------------------------------------------------
    // Verifica se o container existe
    // ------------------------------------------------------------

    if (!container) {

        console.warn(
            '⚠️ Container #resultados-videos-latest não encontrado.'
        );

        return;

    }


    // ------------------------------------------------------------
    // Estado de carregamento
    // ------------------------------------------------------------

    container.innerHTML = `
        <p style="color: var(--neutral-700);">
            Carregando vídeos...
        </p>
    `;


    // ------------------------------------------------------------
    // Busca vídeos
    // ------------------------------------------------------------

    const videos =
        await getLatestVideos();


    // ------------------------------------------------------------
    // Limpa o container
    // ------------------------------------------------------------

    container.innerHTML = '';


    // ------------------------------------------------------------
    // Nenhum vídeo
    // ------------------------------------------------------------

    if (!videos.length) {

        container.innerHTML = `
            <p style="color: var(--neutral-700);">
                Não foi possível carregar os vídeos no momento.
            </p>
        `;

        return;

    }


    // ------------------------------------------------------------
    // Cria os cards
    // ------------------------------------------------------------

    videos.forEach(video => {

        const card =
            document.createElement('a');


        // --------------------------------------------------------
        // Configurações do link
        // --------------------------------------------------------

        card.className =
            'resultados-videos__card';

        card.href =
            video.link;

        card.target =
            '_blank';

        card.rel =
            'noopener noreferrer';

        card.setAttribute(
            'aria-label',
            `Assistir ao vídeo: ${video.title}`
        );


        // --------------------------------------------------------
        // Conteúdo do card
        // --------------------------------------------------------

        card.innerHTML = `
            <div class="resultados-videos__card-media">

                <img
                    class="resultados-videos__card-image"
                    src="${video.thumbnail}"
                    alt="${video.title}"
                    loading="lazy"
                >

                <div
                    class="resultados-videos__card-overlay">
                </div>

                <span
                    class="resultados-videos__card-play"
                    aria-hidden="true">

                    <span></span>

                </span>

            </div>
        `;


        // --------------------------------------------------------
        // Adiciona card ao container
        // --------------------------------------------------------

        container.appendChild(card);

    });

}


// ================================================================
// INICIA QUANDO A PÁGINA CARREGAR
// ================================================================

document.addEventListener(
    'DOMContentLoaded',
    displayVideos
);