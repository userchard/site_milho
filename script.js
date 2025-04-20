// Detecta o redimensionamento da janela e exibe no console o tipo de dispositivo
window.addEventListener("resize", () => {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
        console.log("Dispositivo pequeno (celular)");
    } else if (larguraTela > 768 && larguraTela <= 1024) {
        console.log("Dispositivo médio (tablet)");
    } else {
        console.log("Dispositivo grande (desktop)");
    }
});

// Função para adicionar classes ao body com base no tamanho da tela
function detectarDispositivo() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
        document.body.className = "mobile"; // Classe para dispositivos móveis
    } else if (larguraTela > 768 && larguraTela <= 1024) {
        document.body.className = "tablet"; // Classe para tablets
    } else {
        document.body.className = "desktop"; // Classe para desktops
    }
}

// Detecta o dispositivo ao carregar a página e ao redimensionar a janela
window.addEventListener("load", detectarDispositivo);
window.addEventListener("resize", detectarDispositivo);

// Seleciona os elementos do header
const header = document.querySelector('header'); // O elemento <header>
const headerContent = document.querySelector('.header-content'); // O conteúdo do header
const imgFundo = document.querySelector('.img-fundo'); // A imagem de fundo no header

// Função para ajustar o layout do header com base no tamanho da tela
function ajustarHeader() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
        // Ajustes para telas menores
        header.style.flexDirection = 'row'; // Alinha os elementos em uma linha
        header.style.height = 'auto'; // Ajusta a altura automaticamente
        headerContent.style.maxWidth = '90%'; // Reduz a largura do texto
        headerContent.style.marginRight = '0'; // Remove o espaço lateral
        headerContent.style.textAlign = 'center'; // Centraliza o texto
        imgFundo.style.width = '200px'; // Reduz o tamanho da imagem
        imgFundo.style.height = '200px';
        imgFundo.style.marginLeft = '0'; // Remove o espaço lateral
        imgFundo.style.marginTop = '20px'; // Adiciona espaço acima da imagem
    } else {
        // Ajustes para telas maiores
        header.style.flexDirection = 'row'; // Alinha os elementos em uma linha
        header.style.height = '400px'; // Define a altura fixa
        headerContent.style.maxWidth = '50%'; // Define a largura padrão do texto
        headerContent.style.marginRight = '150px'; // Espaço entre o texto e a imagem
        headerContent.style.textAlign = 'left'; // Alinha o texto à esquerda
        imgFundo.style.width = '300px'; // Tamanho padrão da imagem
        imgFundo.style.height = '300px';
        imgFundo.style.marginLeft = '100px'; // Espaço entre a imagem e o texto
        imgFundo.style.marginTop = '0'; // Remove o espaço superior
    }
}

// Chama a função ao carregar a página
ajustarHeader();

// Adiciona um listener para ajustar o layout ao redimensionar a janela
window.addEventListener('resize', ajustarHeader);

// (INICIO) Adiciona a classe "modo-escuro" ao body se o usuário preferir o modo escuro
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Função para ativar o modo escuro
    function aplicarModoEscuro() {
        body.classList.add("modo-escuro");
    }

    // Função para desativar o modo escuro
    function removerModoEscuro() {
        body.classList.remove("modo-escuro");
    }

    // Detecta a preferência do usuário
    const preferenciaEscura = window.matchMedia("(prefers-color-scheme: dark)");

    // Aplica o modo escuro se a preferência for "dark"
    if (preferenciaEscura.matches) {
        aplicarModoEscuro();
    }

    // Adiciona um listener para mudanças na preferência do sistema
    preferenciaEscura.addEventListener("change", (e) => {
        if (e.matches) {
            aplicarModoEscuro();
        } else {
            removerModoEscuro();
        }
    });
});
// (FIM) Adiciona a classe "modo-escuro" ao body se o usuário preferir o modo escuro

// Adiciona a classe "fade-in" aos elementos que devem aparecer com efeito de fade-in
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in"); // Seleciona todos os elementos com a classe "fade-in"

    // Função para verificar se os elementos estão visíveis na tela
    function handleScroll() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect(); // Obtém a posição do elemento
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Verifica se o elemento está visível

            if (isVisible) {
                el.classList.add("show"); // Adiciona a classe "show" para exibir o elemento
            }
        });
    }

    // Executa a função ao carregar a página e ao rolar
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que os elementos visíveis ao carregar a página sejam exibidos
});

// Adiciona o efeito de transição ao body para o modo escuro
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    toggleDarkMode.innerText = document.body.classList.contains('modo-escuro')
        ? 'Modo Claro'
        : 'Modo Escuro';
});
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona o efeito de transição ao menu
const menuToggle = document.querySelector('.inp');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        menuContainer.style.transform = 'translateY(0)';
        menuContainer.style.opacity = '1';
    } else {
        menuContainer.style.transform = 'translateY(-100%)';
        menuContainer.style.opacity = '0';
    }
});

const headerTitle = document.querySelector('header h1');
const textTitle = 'Guia Completo para Exportação de Milho';

const headerSubtitle = document.querySelector('header p');
const textSubtitle = 'Tudo o que você precisa saber para começar a exportar com sucesso.';

const continueButton = document.getElementById('continue-button'); // Seleciona o botão "Continue"

let indexTitle = 0;
let indexSubtitle = 0;

// Adiciona o cursor piscando
const cursor = document.createElement('span');
cursor.classList.add('cursor');
headerTitle.parentNode.appendChild(cursor);

// Função para o efeito de digitação no título
function typeTitleEffect() {
    if (indexTitle < textTitle.length) {
        headerTitle.innerHTML += textTitle.charAt(indexTitle);
        indexTitle++;
        setTimeout(typeTitleEffect, 10); // Velocidade da digitação do título
    } else {
        cursor.style.display = 'none'; // Remove o cursor após a digitação do título
        typeSubtitleEffect(); // Inicia o efeito de digitação no subtítulo
    }
}

// Função para o efeito de digitação no subtítulo
function typeSubtitleEffect() {
    if (indexSubtitle < textSubtitle.length) {
        headerSubtitle.innerHTML += textSubtitle.charAt(indexSubtitle);
        indexSubtitle++;
        setTimeout(typeSubtitleEffect, 5); // Velocidade da digitação do subtítulo
    } else {
        headerTitle.classList.add('subtitle-visible'); // Ajusta o espaçamento do título
        headerSubtitle.classList.add('show'); // Adiciona a classe "show" para o zoom-in
        showContinueButton(); // Exibe o botão "Continue" após o subtítulo
    }
}

// Função para exibir o botão "Continue" de forma suave
function showContinueButton() {
    continueButton.style.display = 'block'; // Torna o botão visível
    setTimeout(() => {
        continueButton.style.opacity = '10'; // Suaviza a opacidade
    }, 400); // Pequeno atraso para garantir a transição
}

// Inicia o efeito de digitação
typeTitleEffect();

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão "Continue"
    const continueButton = document.getElementById('continue-button');

    // Adiciona o evento de clique ao botão
    continueButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do botão
        const introducaoSection = document.querySelector('#introducao'); // Seleciona a seção "Introdução"
        introducaoSection.scrollIntoView({
            behavior: 'smooth', // Rolagem suave
            block: 'start' // Alinha a seção ao topo da página
        });
    });
});
