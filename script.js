document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const html = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const updateUI = (theme) => {
        html.setAttribute('data-theme', theme);
        if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌓';
    };

    // 1. Escuta mudanças do sistema/navegador em tempo real
    mq.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Só muda se o usuário não travou uma escolha
            updateUI(e.matches ? 'dark' : 'light');
        }
    });

    // 2. Clique manual
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            updateUI(newTheme);
        });
    }
});