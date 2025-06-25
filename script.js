// JavaScript para interações futuras do portfólio Whey Atlamax 

document.addEventListener('DOMContentLoaded', function() {
    // Menu hambúrguer mobile
    const btnHamburger = document.getElementById('menuHamburger');
    const menuMobile = document.getElementById('menuMobile');
    function closeMenuMobile() {
        if (menuMobile) menuMobile.classList.remove('menu-mobile--active');
        document.body.classList.remove('menu-open');
    }
    if (btnHamburger && menuMobile) {
        btnHamburger.addEventListener('click', function() {
            menuMobile.classList.toggle('menu-mobile--active');
            if (menuMobile.classList.contains('menu-mobile--active')) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        });
        menuMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenuMobile);
        });
    }
    // Event delegation para o botão X
    document.body.addEventListener('click', function(e) {
        if (e.target.closest && e.target.closest('#menuClose')) {
            closeMenuMobile();
        }
    });

    // Rolagem suave para âncoras do menu
    document.querySelectorAll('.menu-flutuante a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const yOffset = window.innerWidth <= 700 ? -70 : -64;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // FAQ animação (novo acordeão)
    const perguntas = document.querySelectorAll('.faq-nutri-pergunta');
    perguntas.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('ativo');
            // Fecha outros abertos
            document.querySelectorAll('.faq-nutri-item').forEach(faq => {
                if (faq !== item) faq.classList.remove('ativo');
            });
        });
    });
}); 