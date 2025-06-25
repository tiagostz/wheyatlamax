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

    // Caixinha expansível de ingredientes
    const ingredientesToggleDesktop = document.getElementById('ingredientesToggleDesktop');
    const ingredientesToggleMobile = document.getElementById('ingredientesToggleMobile');
    const ingredientesExpansivelDesktop = document.querySelector('.ingredientes-desktop');
    const ingredientesExpansivelMobile = document.querySelector('.ingredientes-mobile');
    const ingredientesToggleTextDesktop = document.querySelector('#ingredientesToggleDesktop .ingredientes-toggle-text');
    const ingredientesToggleTextMobile = document.querySelector('#ingredientesToggleMobile .ingredientes-toggle-text');
    
    // Função para controlar a expansão
    function toggleIngredientes(expansivel, toggleText) {
        const isAtivo = expansivel.classList.contains('ativo');
        
        if (isAtivo) {
            // Fechar
            expansivel.classList.remove('ativo');
            toggleText.textContent = 'Ver Informações dos Ingredientes';
        } else {
            // Abrir
            expansivel.classList.add('ativo');
            toggleText.textContent = 'Ocultar Informações dos Ingredientes';
        }
    }
    
    // Event listeners para desktop
    if (ingredientesToggleDesktop && ingredientesExpansivelDesktop) {
        ingredientesToggleDesktop.addEventListener('click', function() {
            toggleIngredientes(ingredientesExpansivelDesktop, ingredientesToggleTextDesktop);
        });
    }
    
    // Event listeners para mobile
    if (ingredientesToggleMobile && ingredientesExpansivelMobile) {
        ingredientesToggleMobile.addEventListener('click', function() {
            toggleIngredientes(ingredientesExpansivelMobile, ingredientesToggleTextMobile);
        });
    }
}); 