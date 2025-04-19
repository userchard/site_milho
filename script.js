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

function detectarDispositivo() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
        document.body.className = "mobile";
    } else if (larguraTela > 768 && larguraTela <= 1024) {
        document.body.className = "tablet";
    } else {
        document.body.className = "desktop";
    }
}

window.addEventListener("load", detectarDispositivo);
window.addEventListener("resize", detectarDispositivo);

// Seleciona os elementos do header
const header = document.querySelector('header');
const headerContent = document.querySelector('.header-content');
const imgFundo = document.querySelector('.img-fundo');

// Função para ajustar o layout com base no tamanho da tela
function ajustarHeader() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
        // Ajustes para telas menores
        header.style.flexDirection = 'column'; // Empilha os elementos verticalmente
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

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButton = document.getElementById("modo-escuro-toggle");

    // Verifica se o modo escuro está ativado no localStorage
    if (localStorage.getItem("modo-escuro") === "true") {
        body.classList.add("modo-escuro");
    }

    // Alterna entre modo claro e escuro ao clicar no botão
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("modo-escuro");

        // Salva a preferência no localStorage
        if (body.classList.contains("modo-escuro")) {
            localStorage.setItem("modo-escuro", "true");
        } else {
            localStorage.setItem("modo-escuro", "false");
        }
    });
});
