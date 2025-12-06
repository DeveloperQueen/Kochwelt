function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const headerNav = document.querySelector('.header-nav');
    if (!navToggle || !headerNav) return;

    navToggle.addEventListener('click', () => {
        headerNav.classList.toggle('nav-open');
    });
}
