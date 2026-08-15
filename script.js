document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DO MENU MOBILE
    // ==========================================
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            // Troca o ícone do menu hambúrguer por um X quando abre
            menuBtn.innerHTML = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
        });
    }

    // ==========================================
    // 2. ANIMAÇÕES DE SCROLL (REVEAL)
    // ==========================================
    // Faz os elementos aparecerem suavemente de baixo pra cima quando entram na tela
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona um pequeno atraso para ficar mais suave
                setTimeout(() => entry.target.classList.add('active'), 50);
                // Para de observar o elemento após a animação rodar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, { 
        root: null, 
        rootMargin: '0px 0px -5% 0px', 
        threshold: 0.1 
    });

    // Pega todos os elementos que tem essas classes e aplica o observador
    document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 3. LÓGICA DO MODAL (POP-UP DE MINISTÉRIOS)
    // ==========================================
    const modal = document.getElementById('ministry-modal');
    
    if (modal) {
        const modalTitle = document.getElementById('modal-title');
        const modalText = document.getElementById('modal-text');
        const closeBtn = document.querySelector('.modal-close');

        // Abre o modal ao clicar nos cartões
        document.querySelectorAll('.ministry-card').forEach(card => {
            card.addEventListener('click', () => {
                // Puxa o conteúdo dinâmico salvo nos atributos "data-title" e "data-text" do HTML
                modalTitle.innerText = card.getAttribute('data-title');
                modalText.innerHTML = card.getAttribute('data-text');
                
                // Exibe a tela preta com blur e a caixa
                modal.classList.add('active');
                
                // Trava o scroll da página de fundo
                document.body.style.overflow = 'hidden'; 
            });
        });

        // Função para fechar o modal
        const fecharModal = () => {
            modal.classList.remove('active');
            
            // Libera o scroll da página de fundo novamente
            document.body.style.overflow = 'auto'; 
        };

        // Fecha se clicar no botão de X
        closeBtn.addEventListener('click', fecharModal);
        
        // Fecha se clicar na área escura (fora da caixa branca)
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                fecharModal();
            }
        });
    }

    // ==========================================
    // 4. DEV ONLY: ALTERNADOR DE TEMAS (REMOVER EM PROD)
    // ==========================================
    const devBtn = document.getElementById('dev-theme-switcher');
    if (devBtn) {
        const themes = ['theme-light', 'theme-blue', 'theme-interleaved'];
        const labels = ['Dev Theme: Branco', 'Dev Theme: Azul', 'Dev Theme: Intercalado'];
        
        // Busca a preferência salva ou começa no 0 (Branco)
        let currentThemeIndex = parseInt(localStorage.getItem('devThemeIndex') || '0');

        const applyTheme = (index) => {
            // Remove as classes de tema atuais
            document.body.classList.remove('theme-light', 'theme-blue', 'theme-interleaved');
            
            // Adiciona a classe do tema escolhido (se não for o padrão claro)
            if (themes[index] !== 'theme-light') {
                document.body.classList.add(themes[index]);
            }
            
            // Atualiza o texto do botão
            devBtn.innerText = labels[index];
            
            // Salva a preferência no navegador para a próxima página
            localStorage.setItem('devThemeIndex', index);
        };

        // Aplica o tema na inicialização
        applyTheme(currentThemeIndex);

        // Ação de clique do botão
        devBtn.addEventListener('click', () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            applyTheme(currentThemeIndex);
            
            // Pequeno feedback visual de clique no botão
            devBtn.style.transform = 'scale(0.92)';
            setTimeout(() => devBtn.style.transform = 'scale(1)', 150);
        });
    }
});