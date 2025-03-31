document.addEventListener("DOMContentLoaded", function () {
    alert("Bienvenido a la página sobre Ataques Ransomware by Tiffany. Aprende a protegerte.");

    const form = document.getElementById("contacto-form");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        mensajeExito.style.display = "block";
        setTimeout(() => {
            mensajeExito.classList.add("mostrar");
        }, 10);

        form.reset();

        setTimeout(() => {
            mensajeExito.classList.remove("mostrar");
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 400);
        }, 5000);
    });

    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            color: { value: ["#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 2
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    });
});
