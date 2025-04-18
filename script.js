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