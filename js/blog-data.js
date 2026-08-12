/* ==========================================================================
   BLOG-DATA.JS
   Banco de dados do Blog IntraAct Brasil
   ========================================================================== */

const BLOG = {

    /* ======================================================================
       AUTORES
       ====================================================================== */

    authors: {

        intraact: {
            id: "equipe-intraact-brasil",
            name: "Equipe IntraAct Brasil",
            avatar: "assets/images/blog/autor-intraact.webp",
            bio: "Conteúdo produzido pela equipe IntraAct Brasil, especializada em alfabetização, formação de professores e soluções educacionais para redes públicas e privadas de ensino.",
            link: "blog.html?autor=equipe-intraact-brasil"
        },


        irene: {
            id: "irene-duarte",
            name: "Professora Irene Duarte",
            avatar: "assets/images/blog/autor-irene-duarte.webp",
            bio: "Professora Irene Duarte é Diretora Pedagógica da IntraAct Brasil, atuando na formação de professores alfabetizadores e na implementação de metodologias baseadas em evidências para fortalecer a alfabetização.",
            link: "blog.html?autor=irene-duarte"
        }

    },


    /* ======================================================================
       CATEGORIAS
       ====================================================================== */

    categories: {

        alfabetizacao: {
            key: "alfabetizacao",
            label: "Alfabetização",
            color: "teal"
        },

        matematica: {
            key: "matematica",
            label: "Matemática",
            color: "orange"
        },

        formacao: {
            key: "formacao",
            label: "Formação",
            color: "indigo"
        },

        resultados: {
            key: "resultados",
            label: "Resultados",
            color: "yellow"
        },

        noticia: {
            key: "noticia",
            label: "Notícia",
            color: "periwinkle"
        }

    },

    /* ======================================================================
       POSTAGENS
       ====================================================================== */

    posts: [

        {
            id: "post-1",
            url: "blog-post-1.html",
            featured: true,

            title:
                "IntraAct já beneficiou mais de 44 mil estudantes e transforma a alfabetização em todo o Brasil",

            excerpt:
                "Mais de 44 mil estudantes beneficiados, 67 redes atendidas e 4.300 profissionais formados comprovam o impacto do Sistema IntraAct.",

            seoTitle:
                "IntraAct beneficia mais de 44 mil estudantes e fortalece a alfabetização no Brasil",

            seoDescription:
                "Conheça os resultados do Sistema IntraAct: mais de 44 mil estudantes beneficiados, 67 redes e municípios atendidos e 4.300 profissionais da educação formados.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-1.html",

            keywords: [
                "IntraAct",
                "alfabetização",
                "alfabetização na idade certa",
                "neurociência cognitiva",
                "educação pública",
                "redes municipais",
                "formação de professores",
                "resultados na alfabetização",
                "44 mil estudantes",
                "67 redes e municípios"
            ],

            image:
                "assets/images/blog/post-01.webp",

            imageSquare:
                "assets/images/blog/post-01-quadrada.webp",

            imageAlt:
                "Professora alfabetizando estudantes com o Sistema IntraAct em sala de aula.",

            imageCaption:
                "O Sistema IntraAct já beneficiou mais de 44 mil estudantes em redes públicas de ensino.",

            date:
                "2025-12-09",

            modified:
                "2026-07-15",

            readTime:
                7,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-2",
            url: "blog-post-2.html",
            featured: false,

            title:
                "Salto Veloso implanta o Método IntraAct e realiza formação de professores",

            excerpt:
                "Município fortalece a alfabetização com implantação do Método IntraAct.",

            seoTitle:
                "Salto Veloso implanta o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Salto Veloso (SC) adota o Método IntraAct e capacita professores para fortalecer a alfabetização.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-2.html",

            keywords: [
                "Método IntraAct",
                "Salto Veloso",
                "alfabetização",
                "formação de professores",
                "Santa Catarina"
            ],

            image:
                "assets/images/blog/post-02.webp",

            imageSquare:
                "assets/images/blog/post-02-quadrada.webp",

            imageAlt:
                "Professores durante formação do Método IntraAct.",

            imageCaption:
                "Formação de professores da rede municipal de Salto Veloso (SC).",

            date: "2024-07-01",

            modified: "2026-07-15",

            readTime: 2,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null, // preenchido abaixo

            author: null // preenchido abaixo
        },

        {
            id: "post-3",
            url: "blog-post-3.html",
            featured: false,

            title:
                "Formação continuada para professores alfabetizadores: como os Plantões de Dúvidas aceleram a alfabetização",

            excerpt:
                "Plantões de Dúvidas IntraAct: formação continuada para professores alfabetizadores com suporte pedagógico e recomposição da aprendizagem.",

            seoTitle:
                "Formação continuada para professores alfabetizadores | Plantões de Dúvidas IntraAct",

            seoDescription:
                "Formação continuada para professores alfabetizadores com suporte pedagógico contínuo. Conheça os Plantões de Dúvidas IntraAct e fortaleça a alfabetização na sua rede.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-3.html",

            keywords: [
                "formação continuada para professores alfabetizadores",
                "alfabetização na idade certa",
                "plantão de dúvidas IntraAct",
                "suporte pedagógico para professores",
                "recomposição da aprendizagem",
                "formação docente",
                "material didático para escolas públicas",
                "melhorar indicadores educacionais",
                "resultados na alfabetização"
            ],

            image:
                "assets/images/blog/post-03.webp",

            imageSquare:
                "assets/images/blog/post-03-quadrada.webp",

            imageAlt:
                "Professores alfabetizadores participando de formação continuada do Método IntraAct.",

            imageCaption:
                "Plantões de Dúvidas IntraAct oferecem formação continuada e suporte pedagógico aos professores alfabetizadores.",

            date:
                "2024-07-29",

            modified:
                "2026-07-15",

            readTime:
                5,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Formação"
            ],

            category: null,

            author: null
        },

        {
            id: "post-4",
            url: "blog-post-4.html",
            featured: false,

            title:
                "Escolas de Alta Floresta que utilizam o Método IntraAct destacam-se em Mato Grosso",

            excerpt:
                "Case de sucesso em alfabetização municipal com escolas que utilizam o Método IntraAct e obtêm resultados de destaque.",

            seoTitle:
                "Alta Floresta destaca-se com escolas que utilizam o Método IntraAct",

            seoDescription:
                "Conheça o case de Alta Floresta (MT), onde escolas que utilizam o Método IntraAct conquistaram resultados de destaque, reforçando o compromisso com a alfabetização na idade certa.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-4.html",

            keywords: [
                "Método IntraAct",
                "Alta Floresta",
                "alfabetização na idade certa",
                "case de sucesso em alfabetização",
                "rede municipal de ensino",
                "formação continuada",
                "fluência leitora",
                "material didático para escolas públicas",
                "resultados em alfabetização",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-04.webp",

            imageSquare:
                "assets/images/blog/post-04-quadrada.webp",

            imageAlt:
                "Escolas de Alta Floresta que utilizam o Método IntraAct em atividades de alfabetização.",

            imageCaption:
                "Alta Floresta destaca-se com escolas que utilizam o Método IntraAct.",

            date:
                "2024-07-09",

            modified:
                "2026-07-15",

            readTime:
                5,

            source:
                "Jornal MT Norte",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-5",
            url: "blog-post-5.html",
            featured: false,

            title:
                "Paranaíta (MT): como o Sistema IntraAct transformou a alfabetização da rede municipal",

            excerpt:
                "Paranaíta (MT) elevou a alfabetização de 30% para 96% com o Sistema IntraAct e formação continuada.",

            seoTitle:
                "Paranaíta (MT): transformação da alfabetização com o Sistema IntraAct",

            seoDescription:
                "Conheça o case de Paranaíta (MT), que ampliou os índices de alfabetização com o Sistema IntraAct e formação continuada de professores.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-5.html",

            keywords: [
                "Paranaíta",
                "Mato Grosso",
                "Sistema IntraAct",
                "alfabetização",
                "alfabetização na idade certa",
                "formação continuada",
                "fluência leitora",
                "rede municipal de ensino",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-05.webp",

            imageSquare:
                "assets/images/blog/post-05-quadrada.webp",

            imageAlt:
                "Professores e estudantes da rede municipal de Paranaíta durante atividades de alfabetização com o Sistema IntraAct.",

            imageCaption:
                "Paranaíta (MT) alcançou avanços expressivos na alfabetização com o Sistema IntraAct.",

            date:
                "2024-11-14",

            modified:
                "2026-07-15",

            readTime:
                4,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
    id: "post-6",
    url: "blog-post-6.html",
    featured: false,

    title:
        "Conheça a Janelinha Mágica do IntraAct Brasil: uma ferramenta que fortalece a alfabetização",

    excerpt:
        "Janelinha Mágica do IntraAct auxilia professores e alunos, tornando a alfabetização mais focada, envolvente e eficiente.",

    seoTitle:
        "Janelinha Mágica do IntraAct | Ferramenta para alfabetização",

    seoDescription:
        "Conheça a Janelinha Mágica do IntraAct Brasil, ferramenta pedagógica baseada em neurociência que fortalece o processo de alfabetização.",

    canonical:
        "https://intraactbrasil.com.br/blog-post-6.html",

    keywords: [
        "Janelinha Mágica",
        "IntraAct Brasil",
        "alfabetização",
        "fluência leitora",
        "consciência fonológica",
        "neurociência cognitiva",
        "formação de professores",
        "educação básica"
    ],

    image:
        "assets/images/blog/post-06.webp",

    imageSquare:
        "assets/images/blog/post-06-quadrada.webp",

    imageAlt:
        "Professor utilizando a Janelinha Mágica durante atividade de alfabetização.",

    imageCaption:
        "A Janelinha Mágica auxilia crianças a desenvolverem a leitura com mais foco.",

    date:
        "2024-11-14",

    modified:
        "2026-07-16",

    readTime:
        4,

    source:
        "IntraAct Brasil",

    breadcrumb: [
        "Início",
        "Conteúdos",
        "Alfabetização"
    ],

    category: null,

    author: null
},

        {
            id: "post-7",
            url: "blog-post-7.html",
            featured: false,

            title:
                "Transformando os resultados da aprendizagem com o Sistema IntraAct",

            excerpt:
                "Conheça como o Sistema IntraAct fortalece a aprendizagem e contribui para melhores resultados educacionais nas redes municipais.",

            seoTitle:
                "Transformando os resultados da aprendizagem com o Sistema IntraAct | IntraAct Brasil",

            seoDescription:
                "Descubra como o Sistema IntraAct fortalece a alfabetização, melhora a aprendizagem e apoia redes municipais com metodologia baseada em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-7.html",

            keywords: [
                "Sistema IntraAct",
                "alfabetização",
                "aprendizagem",
                "rede municipal de ensino",
                "neurociência cognitiva",
                "material didático",
                "formação de professores",
                "fluência leitora",
                "resultados educacionais",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-07.webp",

            imageSquare:
                "assets/images/blog/post-07-quadrada.webp",

            imageAlt:
                "Professores e alunos utilizando o Sistema IntraAct em sala de aula.",

            imageCaption:
                "O Sistema IntraAct contribui para transformar os resultados da aprendizagem nas redes municipais.",

            date:
                "2024-11-14",

            modified:
                "2026-07-16",

            readTime:
                4,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-8",
            url: "blog-post-8.html",
            featured: false,

            title:
                "Estudo de Caso: Alta Floresta, pioneira na implementação do Sistema IntraAct no Brasil",

            excerpt:
                "Alta Floresta foi a primeira cidade brasileira a implementar o Sistema IntraAct e tornou-se referência nacional em alfabetização e inovação educacional.",

            seoTitle:
                "Estudo de Caso: Alta Floresta | Primeira cidade a implantar o Sistema IntraAct",

            seoDescription:
                "Conheça o case de Alta Floresta, primeira cidade do Brasil a implementar o Sistema IntraAct e referência em alfabetização baseada em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-8.html",

            keywords: [
                "Alta Floresta",
                "Sistema IntraAct",
                "alfabetização",
                "educação pública",
                "case de sucesso",
                "neurociência",
                "formação de professores",
                "aprendizagem",
                "alfabetização na idade certa"
            ],

            image:
                "assets/images/blog/post-08.webp",

            imageSquare:
                "assets/images/blog/post-08-quadrada.webp",

            imageAlt:
                "Professores e estudantes da rede municipal de Alta Floresta durante implantação do Sistema IntraAct.",

            imageCaption:
                "Alta Floresta foi a primeira cidade brasileira a implementar o Sistema IntraAct em sua rede municipal de ensino.",

            date:
                "2024-11-20",

            modified:
                "2026-07-16",

            readTime:
                4,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-9",
            url: "blog-post-9.html",
            featured: false,

            title:
                "Santa Catarina inicia projeto-piloto com o Sistema IntraAct na alfabetização",

            excerpt:
                "Projeto-piloto leva o Sistema IntraAct para escolas da rede estadual de Santa Catarina com formação docente e metodologia baseada em neurociência.",

            seoTitle:
                "Santa Catarina inicia projeto-piloto com o Sistema IntraAct | IntraAct Brasil",

            seoDescription:
                "Santa Catarina implanta projeto-piloto com o Sistema IntraAct em escolas da rede estadual para fortalecer a alfabetização e a formação de professores.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-9.html",

            keywords: [
                "Santa Catarina",
                "Sistema IntraAct",
                "alfabetização",
                "rede estadual",
                "projeto piloto",
                "neurociência cognitiva",
                "formação de professores",
                "educação pública",
                "alfabetização na idade certa"
            ],

            image:
                "assets/images/blog/post-09.webp",

            imageSquare:
                "assets/images/blog/post-09-quadrada.webp",

            imageAlt:
                "Professores participando da formação do Sistema IntraAct em Santa Catarina.",

            imageCaption:
                "Projeto-piloto leva o Sistema IntraAct para escolas da rede estadual de Santa Catarina.",

            date:
                "2025-01-13",

            modified:
                "2026-07-16",

            readTime:
                3,

            source:
                "Governo de Santa Catarina",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-10",
            url: "blog-post-10.html",
            featured: false,

            title:
                "Professores do AEE e especialistas do município de Bom Despacho (MG) participam de formação sobre aplicação do Sistema IntraAct",

            excerpt:
                "Formação on-line reuniu professores do AEE e especialistas da rede municipal de Bom Despacho para fortalecer práticas inclusivas com o Sistema IntraAct.",

            seoTitle:
                "Bom Despacho realiza formação sobre aplicação do Sistema IntraAct | IntraAct Brasil",

            seoDescription:
                "Professores do Atendimento Educacional Especializado e especialistas de Bom Despacho participaram de formação sobre aplicação do Sistema IntraAct em contextos de educação inclusiva.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-10.html",

            keywords: [
                "Bom Despacho",
                "AEE",
                "educação inclusiva",
                "Sistema IntraAct",
                "formação continuada",
                "alfabetização",
                "educação especial",
                "professores alfabetizadores",
                "Minas Gerais"
            ],

            image:
                "assets/images/blog/post-10.webp",

            imageSquare:
                "assets/images/blog/post-10-quadrada.webp",

            imageAlt:
                "Professores do Atendimento Educacional Especializado participando de formação on-line do Sistema IntraAct.",

            imageCaption:
                "Formação on-line reuniu professores do AEE e especialistas da rede municipal de Bom Despacho (MG).",

            date:
                "2025-05-12",

            modified:
                "2026-07-16",

            readTime:
                3,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Formação"
            ],

            category: null,

            author: null
        },

        {
            id: "post-11",
            url: "blog-post-11.html",
            featured: false,

            title:
                "Professores de Quitandinha (PR) participam de formação sobre o Método IntraAct e a Neurociência Cognitiva",

            excerpt:
                "Educadores da rede municipal, estadual e da APAE participaram de formação sobre o Método IntraAct e sua aplicação na alfabetização baseada em neurociência.",

            seoTitle:
                "Quitandinha promove formação sobre o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Professores de Quitandinha (PR) participaram de formação sobre o Método IntraAct e a neurociência cognitiva aplicada à alfabetização.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-11.html",

            keywords: [
                "Quitandinha",
                "Paraná",
                "Método IntraAct",
                "neurociência cognitiva",
                "alfabetização",
                "formação de professores",
                "formação continuada",
                "educação",
                "APAE",
                "leitura e escrita"
            ],

            image:
                "assets/images/blog/post-11.webp",

            imageSquare:
                "assets/images/blog/post-11-quadrada.webp",

            imageAlt:
                "Professores de Quitandinha participam de formação sobre o Método IntraAct.",

            imageCaption:
                "Formação reuniu educadores da rede municipal, estadual e da APAE em Quitandinha (PR).",

            date:
                "2025-04-30",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Formação"
            ],

            category: null,

            author: null
        },

        {
            id: "post-12",
            url: "blog-post-12.html",
            featured: false,

            title:
                "Plantão de Dúvidas fortalece a formação continuada de professores alfabetizadores",

            excerpt:
                "Encontro reuniu educadores de diversos estados para compartilhar experiências e fortalecer a alfabetização com o Método IntraAct.",

            seoTitle:
                "Plantão de Dúvidas fortalece a formação de professores | IntraAct Brasil",

            seoDescription:
                "Plantão de Dúvidas do IntraAct reuniu professores de diferentes estados para compartilhar experiências e fortalecer a alfabetização baseada em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-12.html",

            keywords: [
                "Plantão de Dúvidas",
                "Método IntraAct",
                "formação continuada",
                "professores alfabetizadores",
                "alfabetização",
                "educação",
                "neurociência cognitiva",
                "leitura e escrita",
                "suporte pedagógico",
                "formação docente"
            ],

            image:
                "assets/images/blog/post-12.webp",

            imageSquare:
                "assets/images/blog/post-12-quadrada.webp",

            imageAlt:
                "Plantão de Dúvidas do IntraAct reúne professores para formação continuada.",

            imageCaption:
                "Encontro promoveu troca de experiências entre educadores de diferentes estados brasileiros.",

            date:
                "2025-05-23",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Formação"
            ],

            category: null,

            author: null
        },

        {
            id: "post-13",
            url: "blog-post-13.html",
            featured: false,

            title:
                "Moema (MG) alcança 81,4% de alunos com fluência em leitura utilizando o Método IntraAct",

            excerpt:
                "Município mineiro fortalece a alfabetização e alcança 81,4% dos estudantes lendo com fluência após a implantação do Método IntraAct.",

            seoTitle:
                "Moema (MG) alcança excelência em alfabetização com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Moema (MG) atingiu 81,4% de alunos com fluência em leitura após a implantação do Método IntraAct e investimentos em formação docente.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-13.html",

            keywords: [
                "Moema MG",
                "Método IntraAct",
                "alfabetização",
                "fluência leitora",
                "resultados",
                "rede municipal",
                "formação de professores",
                "educação pública",
                "neurociência cognitiva",
                "leitura e escrita"
            ],

            image:
                "assets/images/blog/post-13.webp",

            imageSquare:
                "assets/images/blog/post-13-quadrada.webp",

            imageAlt:
                "Professores e estudantes da rede municipal de Moema (MG).",

            imageCaption:
                "Moema (MG) alcançou 81,4% de alunos com fluência em leitura após a implantação do Método IntraAct.",

            date:
                "2025-05-28",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Resultado Moema/MG – INEP",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-14",
            url: "blog-post-14.html",
            featured: false,

            title:
                "Santa Catarina fortalece a alfabetização com a implementação do Método IntraAct",

            excerpt:
                "Projeto piloto em mais de 70 escolas estaduais reforça o compromisso de Santa Catarina com uma alfabetização baseada em evidências.",

            seoTitle:
                "Santa Catarina implementa o Método IntraAct na rede estadual | IntraAct Brasil",

            seoDescription:
                "Projeto piloto do Método IntraAct chega a mais de 70 escolas da rede estadual de Santa Catarina, fortalecendo a alfabetização com base na neurociência cognitiva.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-14.html",

            keywords: [
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "rede estadual",
                "neurociência cognitiva",
                "formação de professores",
                "educação pública",
                "projeto piloto",
                "aprendizagem",
                "leitura e escrita"
            ],

            image:
                "assets/images/blog/post-14.webp",

            imageSquare:
                "assets/images/blog/post-14-quadrada.webp",

            imageAlt:
                "Professores e estudantes da rede estadual de Santa Catarina durante a implantação do Método IntraAct.",

            imageCaption:
                "Projeto piloto do Método IntraAct está sendo desenvolvido em mais de 70 escolas da rede estadual catarinense.",

            date:
                "2025-05-29",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Governo do Estado de Santa Catarina",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-15",
            url: "blog-post-15.html",
            featured: false,

            title:
                "Santo Antônio da Barra (GO) inicia a implementação do Método IntraAct na rede municipal de ensino",

            excerpt:
                "O município de Santo Antônio da Barra (GO) inicia a implantação do Método IntraAct para fortalecer a alfabetização e apoiar a recomposição das aprendizagens.",

            seoTitle:
                "Santo Antônio da Barra implementa o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Santo Antônio da Barra (GO) inicia a implementação do Método IntraAct na rede municipal de ensino, fortalecendo a alfabetização e a recomposição das aprendizagens.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-15.html",

            keywords: [
                "Santo Antônio da Barra",
                "Goiás",
                "Método IntraAct",
                "alfabetização",
                "rede municipal",
                "implantação",
                "recomposição das aprendizagens",
                "formação de professores",
                "educação pública",
                "neurociência cognitiva"
            ],

            image:
                "assets/images/blog/post-15.webp",

            imageSquare:
                "assets/images/blog/post-15-quadrada.webp",

            imageAlt:
                "Equipe da Secretaria Municipal de Educação de Santo Antônio da Barra durante o início da implementação do Método IntraAct.",

            imageCaption:
                "Santo Antônio da Barra (GO) inicia a implementação do Método IntraAct na rede municipal de ensino.",

            date:
                "2025-05-29",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-16",
            url: "blog-post-16.html",
            featured: false,

            title:
                "Alta Floresta, Carlinda e Paranaíta estão entre os destaques do Prêmio Alfabetiza MT 2025",

            excerpt:
                "Os três municípios foram reconhecidos na 4ª edição do Prêmio Alfabetiza MT, evidenciando o compromisso das redes municipais com a alfabetização de qualidade.",

            seoTitle:
                "Alta Floresta, Carlinda e Paranaíta se destacam no Prêmio Alfabetiza MT 2025 | IntraAct Brasil",

            seoDescription:
                "Alta Floresta, Carlinda e Paranaíta estão entre os destaques da 4ª edição do Prêmio Alfabetiza MT 2025, reconhecimento aos resultados alcançados na alfabetização.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-16.html",

            keywords: [
                "Prêmio Alfabetiza MT",
                "Alta Floresta",
                "Carlinda",
                "Paranaíta",
                "Mato Grosso",
                "alfabetização",
                "Método IntraAct",
                "educação pública",
                "aprendizagem",
                "neurociência cognitiva"
            ],

            image:
                "assets/images/blog/post-16.webp",

            imageSquare:
                "assets/images/blog/post-16-quadrada.webp",

            imageAlt:
                "Representantes de Alta Floresta, Carlinda e Paranaíta durante o reconhecimento no Prêmio Alfabetiza MT.",

            imageCaption:
                "Alta Floresta, Carlinda e Paranaíta figuram entre os destaques da 4ª edição do Prêmio Alfabetiza MT.",

            date:
                "2025-06-04",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Prêmio Alfabetiza MT",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-17",
            url: "blog-post-17.html",
            featured: false,

            title:
                "Folha de S.Paulo destaca a expansão do Método IntraAct no Brasil",

            excerpt:
                "Reportagem da Folha de S.Paulo apresenta a expansão do Método IntraAct e sua aplicação em diferentes redes de ensino brasileiras.",

            seoTitle:
                "Folha de S.Paulo destaca a expansão do Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Reportagem da Folha de S.Paulo apresenta a expansão do Método IntraAct, destacando sua aplicação em redes públicas de ensino e seus fundamentos baseados em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-17.html",

            keywords: [
                "Folha de S.Paulo",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "Alta Floresta",
                "Santa Catarina",
                "educação",
                "redes de ensino",
                "alfabetização baseada em evidências",
                "IntraAct Brasil"
            ],

            image:
                "assets/images/blog/post-17.webp",

            imageSquare:
                "assets/images/blog/post-17-quadrada.webp",

            imageAlt:
                "Reportagem destaca a expansão do Método IntraAct em diferentes redes de ensino do Brasil.",

            imageCaption:
                "Folha de S.Paulo repercute a expansão do Método IntraAct no Brasil.",

            date:
                "2025-06-25",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Folha de S.Paulo",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-18",
            url: "blog-post-18.html",
            featured: false,

            title:
                "Araújos (MG) realiza formação do Método IntraAct para fortalecer a alfabetização na rede municipal",

            excerpt:
                "Professores, gestores e coordenadores de Araújos (MG) participaram de formação sobre o Método IntraAct, fortalecendo a alfabetização na rede municipal.",

            seoTitle:
                "Araújos (MG) realiza formação do Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Araújos (MG) promove formação do Método IntraAct para professores, gestores e coordenadores, fortalecendo a alfabetização na rede municipal de ensino.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-18.html",

            keywords: [
                "Araújos MG",
                "Método IntraAct",
                "formação de professores",
                "alfabetização",
                "neurociência cognitiva",
                "educação infantil",
                "ensino fundamental",
                "rede municipal",
                "formação continuada",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-18.webp",

            imageSquare:
                "assets/images/blog/post-18-quadrada.webp",

            imageAlt:
                "Professores e gestores durante a formação do Método IntraAct em Araújos (MG).",

            imageCaption:
                "Formação do Método IntraAct reuniu educadores da rede municipal de Araújos (MG).",

            date:
                "2025-06-16",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Formação"
            ],

            category: null,

            author: null
        },

        {
            id: "post-19",
            url: "blog-post-19.html",
            featured: true,

            title:
                "Projeto piloto do Método IntraAct apresenta resultados positivos nas escolas estaduais de Santa Catarina",

            excerpt:
                "Professores da rede estadual de Santa Catarina relatam avanços na alfabetização após os primeiros meses de implementação do Método IntraAct.",

            seoTitle:
                "Projeto piloto do Método IntraAct apresenta resultados em Santa Catarina | IntraAct Brasil",

            seoDescription:
                "Escolas estaduais de Santa Catarina registram avanços na alfabetização dos estudantes durante os primeiros meses do projeto piloto com o Método IntraAct.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-19.html",

            keywords: [
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "projeto piloto",
                "rede estadual",
                "Joinville",
                "neurociência cognitiva",
                "professores",
                "educação pública",
                "fluência leitora"
            ],

            image:
                "assets/images/blog/post-19.webp",

            imageSquare:
                "assets/images/blog/post-19-quadrada.webp",

            imageAlt:
                "Professores e estudantes durante a aplicação do Método IntraAct em escolas estaduais de Santa Catarina.",

            imageCaption:
                "Projeto piloto do Método IntraAct já apresenta resultados positivos em escolas estaduais de Santa Catarina.",

            date:
                "2025-06-30",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Revista Expressiva",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-20",
            url: "blog-post-20.html",
            featured: false,

            title:
                "Concórdia inicia projeto piloto do Método IntraAct na rede municipal de ensino",

            excerpt:
                "A rede municipal de Concórdia (SC) iniciou um projeto piloto com o Método IntraAct para fortalecer a alfabetização dos estudantes do 1º ano.",

            seoTitle:
                "Concórdia inicia projeto piloto com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Concórdia (SC) inicia a implantação do Método IntraAct em oito escolas da rede municipal, fortalecendo a alfabetização dos estudantes do 1º ano do Ensino Fundamental.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-20.html",

            keywords: [
                "Concórdia",
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "rede municipal",
                "projeto piloto",
                "formação de professores",
                "neurociência cognitiva",
                "ensino fundamental",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-20.webp",

            imageSquare:
                "assets/images/blog/post-20-quadrada.webp",

            imageAlt:
                "Professores e gestores durante a formação do Método IntraAct em Concórdia (SC).",

            imageCaption:
                "Projeto piloto do Método IntraAct inicia em oito escolas da rede municipal de Concórdia (SC).",

            date:
                "2025-07-15",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "Aliança News",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-21",
            url: "blog-post-21.html",
            featured: true,

            title:
                "Regional de Alta Floresta lidera ranking estadual de alfabetização em Mato Grosso",

            excerpt:
                "Com 76,02% de crianças alfabetizadas, a Regional de Alta Floresta conquistou o primeiro lugar entre as Diretorias Regionais de Educação de Mato Grosso.",

            seoTitle:
                "Regional de Alta Floresta lidera ranking estadual de alfabetização | IntraAct Brasil",

            seoDescription:
                "A Regional de Alta Floresta conquistou o primeiro lugar entre as Diretorias Regionais de Educação de Mato Grosso, alcançando 76,02% de crianças alfabetizadas em 2024.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-21.html",

            keywords: [
                "Alta Floresta",
                "Regional de Alta Floresta",
                "DRE Alta Floresta",
                "Alfabetiza MT",
                "Criança Alfabetizada",
                "Mato Grosso",
                "alfabetização",
                "indicadores educacionais",
                "educação pública",
                "resultados"
            ],

            image:
                "assets/images/blog/post-21.webp",

            imageSquare:
                "assets/images/blog/post-21-quadrada.webp",

            imageAlt:
                "Regional de Alta Floresta conquista o primeiro lugar em alfabetização no estado de Mato Grosso.",

            imageCaption:
                "Regional de Alta Floresta lidera os indicadores de alfabetização entre as DREs de Mato Grosso.",

            date:
                "2025-07-24",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "DRE Alta Floresta",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-22",
            url: "blog-post-22.html",
            featured: false,

            title:
                "Humberto de Campos (MA) inicia a implementação do Método IntraAct para fortalecer a alfabetização",

            excerpt:
                "A rede municipal de Humberto de Campos (MA) iniciou a implementação do Método IntraAct, fortalecendo a alfabetização e a recomposição das aprendizagens.",

            seoTitle:
                "Humberto de Campos implementa o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Humberto de Campos (MA) inicia a implementação do Método IntraAct na rede municipal, investindo na alfabetização, na recomposição das aprendizagens e na formação continuada dos educadores.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-22.html",

            keywords: [
                "Humberto de Campos",
                "Maranhão",
                "Método IntraAct",
                "alfabetização",
                "rede municipal",
                "formação de professores",
                "recomposição das aprendizagens",
                "neurociência cognitiva",
                "educação pública",
                "ensino fundamental"
            ],

            image:
                "assets/images/blog/post-22.webp",

            imageSquare:
                "assets/images/blog/post-22-quadrada.webp",

            imageAlt:
                "Educadores da rede municipal de Humberto de Campos (MA) durante a implementação do Método IntraAct.",

            imageCaption:
                "Humberto de Campos (MA) inicia a implementação do Método IntraAct para fortalecer a alfabetização.",

            date:
                "2025-08-27",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-23",
            url: "blog-post-23.html",
            featured: false,

            title:
                "Alfabetização na prática: como uma professora transformou dificuldades em conquistas com o Método IntraAct",

            excerpt:
                "Conheça a experiência da professora Luzia Brocardo Carabolante e veja como o Método IntraAct contribuiu para transformar dificuldades em avanços concretos na alfabetização.",

            seoTitle:
                "Alfabetização na prática com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Conheça a experiência da professora Luzia Brocardo Carabolante e descubra como o Método IntraAct fortaleceu o processo de alfabetização por meio de uma metodologia estruturada e baseada em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-23.html",

            keywords: [
                "alfabetização",
                "Método IntraAct",
                "professora Luzia",
                "consciência fonológica",
                "alfabetização municipal",
                "formação de professores",
                "BNCC",
                "neurociência cognitiva",
                "educação",
                "aprendizagem"
            ],

            image:
                "assets/images/blog/post-23.webp",

            imageSquare:
                "assets/images/blog/post-23-quadrada.webp",

            imageAlt:
                "Professora conduzindo atividades de alfabetização utilizando o Método IntraAct.",

            imageCaption:
                "Experiência da professora Luzia demonstra como o Método IntraAct transforma desafios em conquistas na alfabetização.",

            date:
                "2025-08-28",

            modified:
                "2026-07-17",

            readTime:
                5,

            source:
                "Depoimento da Professora Luzia Brocardo Carabolante, Escola Básica Municipal Cesar Avelino Bragagnolo.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-24",
            url: "blog-post-24.html",
            featured: false,

            title:
                "IntraAct cruza o Atlântico: metodologia chega a Moçambique",

            excerpt:
                "Moçambique torna-se o primeiro país africano a adotar a metodologia IntraAct, iniciando um projeto-piloto voltado à alfabetização baseada na neurociência cognitiva.",

            seoTitle:
                "IntraAct chega a Moçambique e inicia projeto de alfabetização | IntraAct Brasil",

            seoDescription:
                "Moçambique torna-se o primeiro país africano a implementar a metodologia IntraAct em um projeto-piloto que fortalece a alfabetização por meio da neurociência cognitiva.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-24.html",

            keywords: [
                "Moçambique",
                "África",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "DVV International",
                "AMODEC",
                "Manhiça",
                "educação",
                "cooperação internacional"
            ],

            image:
                "assets/images/blog/post-24.webp",

            imageSquare:
                "assets/images/blog/post-24-quadrada.webp",

            imageAlt:
                "Projeto de alfabetização com a metodologia IntraAct em Moçambique.",

            imageCaption:
                "Projeto-piloto leva a metodologia IntraAct ao continente africano pela primeira vez.",

            date:
                "2025-09-22",

            modified:
                "2026-07-17",

            readTime:
                6,

            source:
                "DVV International – Novo método de alfabetização em Moçambique.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-25",
            url: "blog-post-25.html",
            featured: false,

            title:
                "Lacerdópolis inicia capacitação de profissionais da educação com o Método IntraAct",

            excerpt:
                "A rede municipal de Lacerdópolis iniciou a formação de professores do Apoio Pedagógico e do AEE para implementar o Método IntraAct e fortalecer a alfabetização.",

            seoTitle:
                "Lacerdópolis inicia capacitação com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Lacerdópolis inicia a formação de professores para aplicação do Método IntraAct, reforçando a alfabetização, a educação inclusiva e a formação continuada dos educadores.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-25.html",

            keywords: [
                "Lacerdópolis",
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "AEE",
                "Apoio Pedagógico",
                "formação de professores",
                "educação inclusiva",
                "consciência fonológica",
                "neurociência cognitiva"
            ],

            image:
                "assets/images/blog/post-25.webp",

            imageSquare:
                "assets/images/blog/post-25-quadrada.webp",

            imageAlt:
                "Capacitação de professores da rede municipal de Lacerdópolis para aplicação do Método IntraAct.",

            imageCaption:
                "Professores de Lacerdópolis iniciam formação para aplicação do Método IntraAct.",

            date:
                "2025-09-22",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Prefeitura de Lacerdópolis.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-26",
            url: "blog-post-26.html",
            featured: false,

            title:
                "Lindóia do Sul (SC) investe em alfabetização com método baseado em neurociência",

            excerpt:
                "Lindóia do Sul inicia projeto-piloto com o Método IntraAct no AEE, fortalecendo a alfabetização por meio de uma metodologia baseada na neurociência.",

            seoTitle:
                "Lindóia do Sul implanta o Método IntraAct na alfabetização | IntraAct Brasil",

            seoDescription:
                "Lindóia do Sul (SC) inicia projeto-piloto com o Método IntraAct para fortalecer a alfabetização no AEE, investindo em formação docente e práticas baseadas na neurociência cognitiva.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-26.html",

            keywords: [
                "Lindóia do Sul",
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "AEE",
                "educação inclusiva",
                "neurociência cognitiva",
                "formação de professores",
                "rede municipal",
                "aprendizagem"
            ],

            image:
                "assets/images/blog/post-26.webp",

            imageSquare:
                "assets/images/blog/post-26-quadrada.webp",

            imageAlt:
                "Projeto-piloto do Método IntraAct em Lindóia do Sul (SC).",

            imageCaption:
                "Lindóia do Sul inicia projeto-piloto do Método IntraAct para fortalecer a alfabetização.",

            date:
                "2025-09-30",

            modified:
                "2026-07-17",

            readTime:
                5,

            source:
                "Prefeitura de Lindóia do Sul.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-27",
            url: "blog-post-27.html",
            featured: false,

            title:
                "Secretaria Municipal de Educação de Concórdia (SC) acelera projeto de alfabetização",

            excerpt:
                "Concórdia amplia o projeto-piloto do Método IntraAct e avalia expandir a metodologia para mais escolas da rede municipal.",

            seoTitle:
                "Concórdia amplia projeto de alfabetização com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "A Secretaria Municipal de Educação de Concórdia (SC) amplia o projeto-piloto com o Método IntraAct e estuda levar a metodologia para mais escolas da rede municipal.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-27.html",

            keywords: [
                "Concórdia",
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "rede municipal",
                "educação",
                "projeto piloto",
                "formação de professores",
                "Ensino Fundamental",
                "neurociência cognitiva"
            ],

            image:
                "assets/images/blog/post-27.webp",

            imageSquare:
                "assets/images/blog/post-27-quadrada.webp",

            imageAlt:
                "Projeto de alfabetização da rede municipal de Concórdia utilizando o Método IntraAct.",

            imageCaption:
                "Concórdia amplia projeto-piloto do Método IntraAct na rede municipal.",

            date:
                "2025-07-21",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Rádio Massa FM / Aliança News",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-28",
            url: "blog-post-28.html",
            featured: true,

            title:
                "Professora de MT revolucionou a alfabetização na rede pública com método baseado na neurociência",

            excerpt:
                "A experiência conduzida por Irene Duarte em Alta Floresta (MT) transformou os índices de alfabetização da rede municipal e inspirou a expansão do Método IntraAct pelo Brasil.",

            seoTitle:
                "Professora de MT transforma a alfabetização com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Conheça a experiência de Irene Duarte em Alta Floresta (MT), onde o Método IntraAct elevou os índices de alfabetização e se tornou referência para outras redes de ensino.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-28.html",

            keywords: [
                "Irene Duarte",
                "Alta Floresta",
                "Mato Grosso",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "educação pública",
                "Selo Ouro",
                "Alfabetiza Alta Floresta",
                "políticas públicas"
            ],

            image:
                "assets/images/blog/post-28.webp",

            imageSquare:
                "assets/images/blog/post-28-quadrada.webp",

            imageAlt:
                "Professora Irene Duarte durante atividades de alfabetização utilizando o Método IntraAct.",

            imageCaption:
                "A experiência de Alta Floresta (MT) tornou-se referência nacional em alfabetização com o Método IntraAct.",

            date:
                "2025-02-18",

            modified:
                "2026-07-17",

            readTime:
                6,

            source:
                "Folha de S.Paulo, Prefeitura de Alta Floresta e reportagens correlatas.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-29",
            url: "blog-post-29.html",
            featured: false,

            title:
                "Bom Despacho (MG) adota novo método para acelerar a alfabetização",

            excerpt:
                "Bom Despacho (MG) implementa o Método IntraAct na rede municipal, investindo em alfabetização baseada na neurociência cognitiva e na formação continuada dos educadores.",

            seoTitle:
                "Bom Despacho (MG) adota o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Conheça como Bom Despacho (MG) iniciou a implementação do Método IntraAct para fortalecer a alfabetização, a formação docente e os resultados da rede municipal de ensino.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-26.html",

            keywords: [
                "Bom Despacho",
                "Minas Gerais",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "educação pública",
                "ensino fundamental",
                "formação continuada",
                "BNCC",
                "rede municipal"
            ],

            image:
                "assets/images/blog/post-29.webp",

            imageSquare:
                "assets/images/blog/post-29-quadrada.webp",

            imageAlt:
                "Professores da rede municipal de Bom Despacho durante formação sobre o Método IntraAct.",

            imageCaption:
                "Bom Despacho (MG) inicia a implementação do Método IntraAct para fortalecer a alfabetização.",

            date:
                "2025-10-24",

            modified:
                "2026-07-17",

            readTime:
                5,

            source:
                "Prefeitura de Bom Despacho (MG).",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-30",
            url: "blog-post-30.html",
            featured: false,

            title:
                "IntraAct participa do Fórum Extraordinário 2025 da Undime Paraná",

            excerpt:
                "A IntraAct Brasil participou do Fórum Extraordinário 2025 da Undime Paraná, apresentando sua metodologia baseada em neurociência para gestores e dirigentes municipais de educação.",

            seoTitle:
                "IntraAct no Fórum Extraordinário 2025 da Undime Paraná | IntraAct Brasil",

            seoDescription:
                "Conheça a participação da IntraAct Brasil no Fórum Extraordinário 2025 da Undime Paraná e como a metodologia fortalece a alfabetização baseada em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-30.html",

            keywords: [
                "Undime Paraná",
                "Fórum Extraordinário 2025",
                "IntraAct Brasil",
                "alfabetização",
                "Sistema Nacional de Educação",
                "SNE",
                "neurociência cognitiva",
                "gestão educacional",
                "formação de professores",
                "educação pública"
            ],

            image:
                "assets/images/blog/post-30.webp",

            imageSquare:
                "assets/images/blog/post-30-quadrada.webp",

            imageAlt:
                "Equipe da IntraAct Brasil durante o Fórum Extraordinário 2025 da Undime Paraná.",

            imageCaption:
                "A IntraAct Brasil apresentou sua metodologia durante o Fórum Extraordinário 2025 da Undime Paraná.",

            date:
                "2025-12-09",

            modified:
                "2026-07-17",

            readTime:
                6,

            source:
                "Undime Paraná e IntraAct Brasil.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-31",
            url: "blog-post-31.html",
            featured: false,

            title:
                "Método IntraAct é destaque em reportagem da Magazine & Ação",

            excerpt:
                "Reportagem da Magazine & Ação apresenta os resultados do Método IntraAct e mostra como a metodologia vem transformando a alfabetização em diferentes redes públicas de ensino.",

            seoTitle:
                "Método IntraAct é destaque na Magazine & Ação | IntraAct Brasil",

            seoDescription:
                "Conheça a reportagem da Magazine & Ação sobre o Método IntraAct, seus resultados na alfabetização e o impacto da metodologia em redes públicas brasileiras.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-31.html",

            keywords: [
                "Magazine & Ação",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "Alta Floresta",
                "educação pública",
                "Moysés Gori",
                "Janaína Mourão",
                "leitura",
                "formação de professores"
            ],

            image:
                "assets/images/blog/post-31.webp",

            imageSquare:
                "assets/images/blog/post-31-quadrada.webp",

            imageAlt:
                "Reportagem da Magazine & Ação destacando os resultados do Método IntraAct na alfabetização.",

            imageCaption:
                "A Magazine & Ação destacou os resultados alcançados pelo Método IntraAct em redes públicas de ensino.",

            date:
                "2025-12-09",

            modified:
                "2026-07-17",

            readTime:
                4,

            source:
                "Magazine & Ação.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-32",
            url: "blog-post-32.html",
            featured: false,

            title:
                "Prefeitura de Maringá reconhece escolas pelos resultados em alfabetização com o Método IntraAct",

            excerpt:
                "A Prefeitura de Maringá homenageará escolas municipais que se destacaram nos indicadores de alfabetização de 2025 após a implementação do Método IntraAct.",

            seoTitle:
                "Maringá reconhece escolas pelos resultados com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "A Prefeitura de Maringá homenageia escolas municipais pelos resultados alcançados na alfabetização em 2025, destacando a implementação do Método IntraAct.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-32.html",

            keywords: [
                "Maringá",
                "Paraná",
                "Método IntraAct",
                "alfabetização",
                "Secretaria Municipal de Educação",
                "educação pública",
                "neurociência cognitiva",
                "1º ano",
                "2º ano",
                "indicadores de alfabetização"
            ],

            image:
                "assets/images/blog/post-32.webp",

            imageSquare:
                "assets/images/blog/post-32-quadrada.webp",

            imageAlt:
                "Escolas municipais de Maringá recebem reconhecimento pelos resultados obtidos na alfabetização com o Método IntraAct.",

            imageCaption:
                "Prefeitura de Maringá reconhece escolas municipais pelos indicadores de alfabetização alcançados em 2025.",

            date:
                "2025-12-10",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "Prefeitura de Maringá.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-33",
            url: "blog-post-33.html",
            featured: false,

            title:
                "Maringá supera 80% de alfabetização após implantação do Método IntraAct",

            excerpt:
                "Após implantar o Método IntraAct, a rede municipal de Maringá elevou o índice de alfabetização de 25% para mais de 80% no 2º ano e homenageou escolas pelos resultados alcançados.",

            seoTitle:
                "Maringá supera 80% de alfabetização com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "A rede municipal de Maringá alcançou mais de 80% de crianças alfabetizadas após a implantação do Método IntraAct, metodologia baseada na neurociência cognitiva.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-33.html",

            keywords: [
                "Maringá",
                "Paraná",
                "Método IntraAct",
                "alfabetização",
                "neurociência cognitiva",
                "rede municipal",
                "Secretaria Municipal de Educação",
                "alfabetização na idade certa",
                "Silvio Barros",
                "Janaína Mourão"
            ],

            image:
                "assets/images/blog/post-33.webp",

            imageSquare:
                "assets/images/blog/post-33-quadrada.webp",

            imageAlt:
                "Cerimônia realizada pela Prefeitura de Maringá homenageando escolas pelos resultados obtidos com o Método IntraAct.",

            imageCaption:
                "Rede municipal de Maringá supera 80% de alfabetização após a implantação do Método IntraAct.",

            date:
                "2025-12-12",

            modified:
                "2026-07-17",

            readTime:
                5,

            source:
                "Prefeitura de Maringá.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Notícias"
            ],

            category: null,

            author: null
        },

        {
            id: "post-34",
            url: "blog-post-34.html",
            featured: false,

            title:
                "Erval Velho (SC) completa três anos de resultados com o Método IntraAct",

            excerpt:
                "Após três anos de implementação do Método IntraAct, Erval Velho (SC) consolida avanços na alfabetização, na formação continuada dos professores e na qualidade da educação municipal.",

            seoTitle:
                "Erval Velho completa três anos com o Método IntraAct | IntraAct Brasil",

            seoDescription:
                "Erval Velho (SC) celebra três anos de implementação do Método IntraAct, fortalecendo a alfabetização, a formação docente e a qualidade da educação na rede municipal.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-34.html",

            keywords: [
                "Erval Velho",
                "Santa Catarina",
                "Método IntraAct",
                "alfabetização",
                "educação municipal",
                "formação continuada",
                "assessoria pedagógica",
                "neurociência cognitiva",
                "aprendizagem",
                "resultados"
            ],

            image:
                "assets/images/blog/post-34.webp",

            imageSquare:
                "assets/images/blog/post-34-quadrada.webp",

            imageAlt:
                "Professores e estudantes da rede municipal de Erval Velho durante atividades com o Método IntraAct.",

            imageCaption:
                "Erval Velho (SC) celebra três anos de avanços na alfabetização com o Método IntraAct.",

            date:
                "2026-03-31",

            modified:
                "2026-07-17",

            readTime:
                3,

            source:
                "IntraAct Brasil.",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Resultados"
            ],

            category: null,

            author: null
        },

        {
            id: "post-35",
            url: "blog-post-35.html",
            featured: false,

            title:
                "IntraAct lança novos materiais para matemática, escrita cursiva e letramento",

            excerpt:
                "Os novos materiais da IntraAct ampliam o sistema pedagógico da metodologia com recursos voltados ao ensino da matemática, da escrita cursiva e do letramento, fundamentados na neurociência cognitiva.",

            seoTitle:
                "IntraAct lança novos materiais para matemática e letramento | IntraAct Brasil",

            seoDescription:
                "Conheça os novos materiais da IntraAct para matemática, escrita cursiva e atividades literárias, desenvolvidos com base na neurociência para fortalecer a aprendizagem.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-33.html",

            keywords: [
                "Aprendendo Matemática",
                "Aprendendo a Escrever 2",
                "Caderno de Atividades Literárias",
                "Método IntraAct",
                "neurociência cognitiva",
                "alfabetização",
                "letramento",
                "matemática",
                "escrita cursiva",
                "educação"
            ],

            image:
                "assets/images/blog/post-35.webp",

            imageSquare:
                "assets/images/blog/post-35-quadrada.webp",

            imageAlt:
                "Novos materiais pedagógicos da IntraAct para matemática, escrita cursiva e letramento.",

            imageCaption:
                "A IntraAct amplia seu sistema pedagógico com novos materiais para matemática, escrita cursiva e letramento.",

            date:
                "2026-04-10",

            modified:
                "2026-07-17",

            readTime:
                8,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Matemática"
            ],

            category: null,

            author: null
        },

        {
            id: "post-36",
            url: "blog-post-36.html",
            featured: false,

            title:
                "Brasil avança na alfabetização, mas desafios persistem: 5 regras para melhorar a aprendizagem",

            excerpt:
                "Apesar dos avanços nos índices de alfabetização, especialistas alertam que ainda existem desafios estruturais. Conheça cinco regras baseadas na neurociência para fortalecer a aprendizagem da leitura e escrita.",

            seoTitle:
                "5 regras para melhorar a alfabetização com base na neurociência | IntraAct Brasil",

            seoDescription:
                "Especialista em alfabetização apresenta cinco regras baseadas na neurociência para melhorar a aprendizagem da leitura e escrita e fortalecer o processo de alfabetização.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-36.html",

            keywords: [
                "alfabetização",
                "aprendizagem da leitura",
                "aprendizagem da escrita",
                "neurociência aplicada à educação",
                "método IntraAct",
                "alfabetização baseada em evidências",
                "educação",
                "professor alfabetizador",
                "leitura fluente",
                "escrita infantil"
            ],

            image:
                "assets/images/blog/post-36.webp",

            imageSquare:
                "assets/images/blog/post-36-quadrada.webp",

            imageAlt:
                "Especialista apresenta cinco regras para melhorar a alfabetização com base na neurociência.",

            imageCaption:
                "A alfabetização baseada em evidências científicas contribui para uma aprendizagem mais eficiente da leitura e da escrita.",

            date:
                "2026-04-10",

            modified:
                "2026-07-17",

            readTime:
                10,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        },

        {
            id: "post-37",
            url: "blog-post-37.html",
            featured: false,

            title:
                "Santa Catarina realiza formação inicial do Método IntraAct para fortalecer a alfabetização na rede estadual",

            excerpt:
                "Formação realizada em Florianópolis reuniu 275 profissionais da educação para aprofundar práticas pedagógicas baseadas em evidências científicas e fortalecer a alfabetização na rede estadual de Santa Catarina.",

            seoTitle:
                "Santa Catarina realiza formação do Método IntraAct para alfabetização | IntraAct Brasil",

            seoDescription:
                "Formação inicial do Método IntraAct em Santa Catarina reuniu 275 profissionais da educação com foco na alfabetização, neurociência da leitura e práticas pedagógicas baseadas em evidências.",

            canonical:
                "https://intraactbrasil.com.br/blog-post-37.html",

            keywords: [
                "Método IntraAct",
                "alfabetização em Santa Catarina",
                "formação de professores",
                "alfabetização baseada em evidências",
                "neurociência da leitura",
                "educação pública",
                "rede estadual de ensino",
                "professores alfabetizadores",
                "Fortalecimento das Aprendizagens",
                "Atendimento Educacional Especializado",
                "AEE",
                "IntraAct Brasil"
            ],

            image:
                "assets/images/blog/post-37.webp",

            imageSquare:
                "assets/images/blog/post-37-quadrada.webp",

            imageAlt:
                "Profissionais da educação participam da formação inicial do Método IntraAct em Santa Catarina.",

            imageCaption:
                "Formação inicial do Método IntraAct reuniu profissionais da educação de Santa Catarina para fortalecer a alfabetização na rede estadual.",

            date:
                "2026-04-28",

            modified:
                "2026-07-17",

            readTime:
                12,

            source:
                "IntraAct Brasil",

            breadcrumb: [
                "Início",
                "Conteúdos",
                "Alfabetização"
            ],

            category: null,

            author: null
        }
                

    ]

};

/* ==========================================================================
   ASSOCIAÇÕES
   ========================================================================== */

BLOG.posts[0].author = BLOG.authors.intraact;
BLOG.posts[0].category = BLOG.categories.resultados;

BLOG.posts[1].author = BLOG.authors.intraact;
BLOG.posts[1].category = BLOG.categories.alfabetizacao;

BLOG.posts[2].author = BLOG.authors.irene;
BLOG.posts[2].category = BLOG.categories.formacao;

BLOG.posts[3].author = BLOG.authors.intraact;
BLOG.posts[3].category = BLOG.categories.noticia;

BLOG.posts[4].author = BLOG.authors.intraact;
BLOG.posts[4].category = BLOG.categories.resultados;

BLOG.posts[5].author = BLOG.authors.intraact;
BLOG.posts[5].category = BLOG.categories.alfabetizacao;

BLOG.posts[6].author = BLOG.authors.intraact;
BLOG.posts[6].category = BLOG.categories.alfabetizacao;

BLOG.posts[7].author = BLOG.authors.intraact;
BLOG.posts[7].category = BLOG.categories.alfabetizacao;

BLOG.posts[8].author = BLOG.authors.intraact;
BLOG.posts[8].category = BLOG.categories.alfabetizacao;

BLOG.posts[9].author = BLOG.authors.intraact;
BLOG.posts[9].category = BLOG.categories.formacao;

BLOG.posts[10].author = BLOG.authors.intraact;
BLOG.posts[10].category = BLOG.categories.formacao;

BLOG.posts[11].author = BLOG.authors.intraact;
BLOG.posts[11].category = BLOG.categories.formacao;

BLOG.posts[12].author = BLOG.authors.intraact;
BLOG.posts[12].category = BLOG.categories.resultados;

BLOG.posts[13].author = BLOG.authors.intraact;
BLOG.posts[13].category = BLOG.categories.noticia;

BLOG.posts[14].author = BLOG.authors.intraact;
BLOG.posts[14].category = BLOG.categories.noticia;

BLOG.posts[15].author = BLOG.authors.intraact;
BLOG.posts[15].category = BLOG.categories.noticia;

BLOG.posts[16].author = BLOG.authors.intraact;
BLOG.posts[16].category = BLOG.categories.noticia;

BLOG.posts[17].author = BLOG.authors.intraact;
BLOG.posts[17].category = BLOG.categories.formacao;

BLOG.posts[18].author = BLOG.authors.intraact;
BLOG.posts[18].category = BLOG.categories.resultados;

BLOG.posts[19].author = BLOG.authors.intraact;
BLOG.posts[19].category = BLOG.categories.noticia;

BLOG.posts[20].author = BLOG.authors.intraact;
BLOG.posts[20].category = BLOG.categories.resultados;

BLOG.posts[21].author = BLOG.authors.intraact;
BLOG.posts[21].category = BLOG.categories.noticia;

BLOG.posts[22].author = BLOG.authors.intraact;
BLOG.posts[22].category = BLOG.categories.alfabetizacao;

BLOG.posts[23].author = BLOG.authors.intraact;
BLOG.posts[23].category = BLOG.categories.noticia;

BLOG.posts[24].author = BLOG.authors.intraact;
BLOG.posts[24].category = BLOG.categories.noticia;

BLOG.posts[25].author = BLOG.authors.intraact;
BLOG.posts[25].category = BLOG.categories.noticia;

BLOG.posts[26].author = BLOG.authors.intraact;
BLOG.posts[26].category = BLOG.categories.noticia;

BLOG.posts[27].author = BLOG.authors.intraact;
BLOG.posts[27].category = BLOG.categories.noticia;

BLOG.posts[28].author = BLOG.authors.intraact;
BLOG.posts[28].category = BLOG.categories.noticia;

BLOG.posts[29].author = BLOG.authors.intraact;
BLOG.posts[29].category = BLOG.categories.alfabetizacao;

BLOG.posts[30].author = BLOG.authors.intraact;
BLOG.posts[30].category = BLOG.categories.noticia;

BLOG.posts[31].author = BLOG.authors.intraact;
BLOG.posts[31].category = BLOG.categories.noticia;

BLOG.posts[32].author = BLOG.authors.intraact;
BLOG.posts[32].category = BLOG.categories.noticia;

BLOG.posts[33].author = BLOG.authors.intraact;
BLOG.posts[33].category = BLOG.categories.resultados;

BLOG.posts[34].author = BLOG.authors.intraact;
BLOG.posts[34].category = BLOG.categories.matematica;

BLOG.posts[35].author = BLOG.authors.intraact;
BLOG.posts[35].category = BLOG.categories.alfabetizacao;

BLOG.posts[36].author = BLOG.authors.intraact;
BLOG.posts[36].category = BLOG.categories.alfabetizacao;

/* ==========================================================================
   EXPORTAÇÃO
   ========================================================================== */

if (typeof module !== "undefined" && module.exports) {

    module.exports = BLOG;

} else {

    window.BLOG = BLOG;

}