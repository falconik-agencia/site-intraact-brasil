async function loadInclude(url, elementId) {
  const placeholder = document.getElementById(elementId);

  if (!placeholder) return;

  try {
    const response = await fetch(url, {
      cache: "force-cache"
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao buscar ${url}`);
    }

    const html = await response.text();
    placeholder.outerHTML = html;
  } catch (error) {
    console.error(`Falha ao carregar ${url}:`, error);
  }
}

async function initIncludes() {
  await Promise.all([
    loadInclude("partials/header.html", "header-placeholder"),
    loadInclude("partials/footer.html", "footer-placeholder")
  ]);

  document.dispatchEvent(new Event("includesLoaded"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIncludes);
} else {
  initIncludes();
}