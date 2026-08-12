(function () {
  let gtmLoaded = false;
  let clarityLoaded = false;

  function loadClarity() {
    if (clarityLoaded) return;
    clarityLoaded = true;

    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };

      t = l.createElement(r);
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;

      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "xnki3egpjh");
  }


  function loadGTM() {
    if (gtmLoaded) return;
    gtmLoaded = true;

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-3ND2C957PB");

    const script = document.createElement("script");

    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=G-3ND2C957PB";

    document.head.appendChild(script);
  }


  function loadTracking() {
    loadClarity();

    // Dá prioridade ao carregamento da página antes do Analytics
    setTimeout(() => {
      loadGTM();
    }, 1000);
  }


  const events = [
    "scroll",
    "mousemove",
    "touchstart",
    "keydown",
    "click"
  ];


  events.forEach((event) => {
    window.addEventListener(event, loadTracking, {
      once: true,
      passive: true
    });
  });


  // Caso o usuário não interaja, carrega após o navegador ficar livre
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadTracking, {
      timeout: 5000
    });
  } else {
    setTimeout(loadTracking, 5000);
  }

})();