
// 🔥 DESATIVAR ÔNIBUS AUTOMATICAMENTE
document.querySelectorAll('input[name="asistencia"]').forEach(radio => {

    radio.addEventListener("change", function () {

        let autobusRadios = document.querySelectorAll('input[name="autobus"]');

        if (this.value.includes("No")) {

            autobusRadios.forEach(r => {
                r.checked = false;   // limpa seleção
                r.disabled = true;   // desativa
            });

        } else {

            autobusRadios.forEach(r => {
                r.disabled = false;  // ativa novamente
            });

        }

    });

});


// 🚀 ENVIAR PARA WHATSAPP
function enviarWhatsapp() {

    let nombre = document.getElementById("nombre").value.trim();

    let asistenciaInput = document.querySelector('input[name="asistencia"]:checked');
    let autobusInput = document.querySelector('input[name="autobus"]:checked');

    if (nombre === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    if (!asistenciaInput) {
        alert("Por favor, confirma si asistirás.");
        return;
    }

    let asistencia = asistenciaInput.value;

    // Se não vai assistir → ônibus não aplica
    let autobus = asistencia.includes("No")
        ? "No aplica"
        : (autobusInput ? autobusInput.value : "No informado");

    let mensaje = `Confirmación de Asistencia:\n\n
                Nombre: ${nombre}\n
                Asistencia: ${asistencia}\n
                Autobús: ${autobus}`;

    let numero = "5350004710"; // seu número com código do país

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    document.querySelector(".form-submit").reset();

    window.open(url, "_blank");
}


let foto = document.querySelector(".foto");
let foto_aberta = document.querySelector(".foto-aberta");
let body = document.querySelector("body");

function abrirImg(img) {
    let img_src = img.src;
    console.log(img_src)
    foto_aberta.src = img_src;
    foto.style.display = "flex";
    body.style.overflow = "hidden";
}

function closeImg(i) {
    foto.style.display = "none";
    body.style.overflow = "scroll";
}


// Configuración base de ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // Cambia a true si quieres que la animación se repita al subir
});

// --- SECCIÓN INTRO ---
sr.reveal('.first h1', { delay: 300, origin: 'top' });
// sr.reveal('.second #text', { delay: 500 });
sr.reveal('.second #data', { delay: 700, distance: '20px' });
sr.reveal('.second #data', { delay: 700, distance: '20px' });

// --- SECCIÓN CASAMENTO (H & B) ---
sr.reveal('.casamento h1', { origin: 'left', distance: '100px' });
sr.reveal('#ring-img', { delay: 400, scale: 0.5 });
sr.reveal('.casamento p', { delay: 600 });
sr.reveal('.cal-img', { interval: 200, rotate: { x: 0, y: 90, z: 0 } });

// --- SECCIÓN LOCATION ---
sr.reveal('.ceremonia', { interval: 300, origin: 'right' });
sr.reveal('.celebracion', { interval: 300, origin: 'left' });
sr.reveal('.location-autobus', { delay: 400, viewFactor: 0.5 });

// --- SECCIÓN CONFIRMACIÓN ---
sr.reveal('.confirm form', { 
    duration: 1500,
    scale: 0.9,
    opacity: 0 
});

// --- GALERÍA ---
sr.reveal('.gallery-img img', { 
    interval: 150, 
    origin: 'bottom',
    distance: '40px' 
});const music = document.getElementById("wedding-music");
const musicBtn = document.getElementById("music-btn");
const musicText = document.getElementById("music-text");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add("playing");
        musicText.innerText = "Pausar Música";
        musicBtn.querySelector('i').className = 'bx bx-pause-circle';
    } else {
        music.pause();
        musicBtn.classList.remove("playing");
        musicText.innerText = "Reproducir Música";
        musicBtn.querySelector('i').className = 'bx bx-music';
    }
});

// Opcional: Intentar reproducir automáticamente si el navegador lo permite
window.addEventListener('load', () => {
    music.volume = 0.5; // Volumen moderado
});



