/* ==========================================================================
   SHARE.JS
   Compartilhamento de postagens
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const shareButton = document.getElementById("shareButton");
    const shareMenu = document.getElementById("shareMenu");

    if (!shareButton || !shareMenu) return;

    const title = document.title;

    const excerpt =
        document.querySelector(".post-hero__excerpt")?.textContent.trim() || "";

    const url = window.location.href;

    const encodedTitle = encodeURIComponent(title);
    const encodedExcerpt = encodeURIComponent(excerpt);
    const encodedUrl = encodeURIComponent(url);

    /* ============================================================
       ABRIR MENU OU USAR COMPARTILHAMENTO NATIVO
       ============================================================ */

    shareButton.addEventListener("click", async (e) => {

        e.stopPropagation();

        // Usa o compartilhamento nativo quando disponível
        if (navigator.share) {

            try {

                await navigator.share({
                    title,
                    text: excerpt,
                    url
                });

            } catch (err) {
                // usuário cancelou
            }

            return;
        }

        // Desktop
        shareMenu.classList.toggle("active");

    });

    /* ============================================================
       FECHAR AO CLICAR FORA
       ============================================================ */

    document.addEventListener("click", (e) => {

        if (!shareMenu.contains(e.target) &&
            !shareButton.contains(e.target)) {

            shareMenu.classList.remove("active");

        }

    });

    /* ============================================================
       FECHAR COM ESC
       ============================================================ */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            shareMenu.classList.remove("active");

        }

    });

    /* ============================================================
       COMPARTILHAMENTO
       ============================================================ */

    document.querySelectorAll("[data-share]").forEach(button => {

        button.addEventListener("click", () => {

            const network = button.dataset.share;

            let shareUrl = "";

            switch (network) {

                case "facebook":

                    shareUrl =
                        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

                    break;

                case "linkedin":

                    shareUrl =
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

                    break;

                case "x":

                    shareUrl =
                        `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

                    break;

                case "whatsapp":

                    shareUrl =
                        `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

                    break;

                case "telegram":

                    shareUrl =
                        `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;

                    break;

                case "copy":

                    navigator.clipboard.writeText(url)
                        .then(() => {

                            button.textContent = "✓ Link copiado!";

                            setTimeout(() => {

                                button.innerHTML =
                                    "<span>Copiar link</span>";

                            }, 1800);

                        });

                    shareMenu.classList.remove("active");

                    return;

            }

            window.open(
                shareUrl,
                "_blank",
                "width=600,height=600"
            );

            shareMenu.classList.remove("active");

        });

    });

});