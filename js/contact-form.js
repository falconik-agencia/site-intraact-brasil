/* ====================================
   FORMULÁRIO DE CONTATO — envio via Web3Forms
   ==================================== */

(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('.contact-form__submit');
    const submitText = form.querySelector('.contact-form__submit-text');
    const submitLoading = form.querySelector('.contact-form__submit-loading');
    const feedback = form.querySelector('.contact-form__feedback');
    let feedbackTimeout;

    function showFeedback(message, state) {
        clearTimeout(feedbackTimeout);
        feedback.textContent = message;
        feedback.setAttribute('data-state', state);
        feedbackTimeout = setTimeout(function () {
            feedback.textContent = '';
            feedback.removeAttribute('data-state');
        }, 6000);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        submitBtn.disabled = true;
        submitText.hidden = true;
        submitLoading.hidden = false;
        clearTimeout(feedbackTimeout);
        feedback.textContent = '';
        feedback.removeAttribute('data-state');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            const data = await response.json();

            if (response.ok && data.success) {
                showFeedback('Mensagem enviada! Nossa equipe entrará em contato em breve.', 'success');
                form.reset();
            } else {
                console.error('Web3Forms erro:', data);
                throw new Error('Falha no envio');
            }
        } catch (err) {
            showFeedback('Não foi possível enviar. Tente novamente ou escreva para contato@intraactbrasil.com.br.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitText.hidden = false;
            submitLoading.hidden = true;
        }
    });
})();