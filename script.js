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
