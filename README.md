# SITE-PIPS
Um protótipo moderno, ágil e responsivo para a Primeira Igreja Presbiteriana de Santos

## Protótipo de Site para Igreja

Um protótipo moderno, ágil e responsivo para uma igreja local, focado em conexão real e crescimento espiritual. O projeto utiliza um design system limpo (inspirado nas diretrizes da Apple), com uso de *Glassmorphism*, *Bento Grids* e animações suaves de scroll.

## Funcionalidades

- **Navegação Moderna:** Header com efeito *Glassmorphism* (fundo translúcido com desfoque) e menu mobile responsivo.
- **Bento Grid:** Layout em mosaico na tela inicial destacando as principais áreas e atividades.
- **Animações de Scroll:** Elementos surgem suavemente na tela (Reveal Up / Reveal Scale) utilizando o `IntersectionObserver`.
- **Modais Dinâmicos:** Tela de Ministérios com pop-ups que puxam dados diretamente dos atributos HTML.
- **Integrações:** Blocos prontos para embutir players do Spotify (Podcasts/Sermões) e Google Maps.
- ** [DEV ONLY] Alternador de Temas:** Um botão flutuante para testes de design, permitindo alternar a interface entre 3 modos: **Branco**, **Azul** e **Intercalado**. A escolha é salva no `localStorage` do navegador.

## Tecnologias Utilizadas

- **HTML5:** Semântico e estruturado.
- **CSS3:** Variáveis nativas (Custom Properties), Flexbox, CSS Grid e media queries para responsividade.
- **JavaScript (Vanilla):** Lógica de menu, modais, observadores de interseção e manipulação do DOM.

## Estrutura do Projeto

```text
/
├── index.html         # Página inicial (Visão Geral)
├── sobre.html         # Nossa História e Liderança
├── ministerios.html   # Grupos, Mocidade, Ação Social e Modal
├── programacao.html   # Agenda de Cultos e Eventos
├── style.css          # Estilos principais e variáveis
└── script.js          # Lógica de interação e Modo Dev
