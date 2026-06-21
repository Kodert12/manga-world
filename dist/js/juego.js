const juegos = {
    gta6: {
        titulo: "Grand Theft Auto VI",
        descripcion: "Mundo abierto de Rockstar Games.",
        lanzamiento: "2026",
        genero: "Acción / Mundo Abierto",
        plataformas: "PC, PS5, Xbox Series X/S",
        video: "https://www.youtube.com/embed/QdBZY2fkU-0"
    },

    God: {
        titulo: "God of War Laufey",
        descripcion: "Nueva historia después de la saga principal.",
        lanzamiento: "2026",
        genero: "RPG",
        plataformas: "PC, PS5",
        video: "https://www.youtube.com/embed/Rnxogjj1n_8"
    }
};

const modal = document.getElementById("juegoModal");

document.querySelectorAll(".juego").forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;
        const juego = juegos[id];

        if (!juego) return; // evita errores

        document.getElementById("modalTitulo").textContent = juego.titulo;
        document.getElementById("modalDescripcion").textContent = juego.descripcion;
        document.getElementById("modalLanzamiento").textContent = juego.lanzamiento;
        document.getElementById("modalGenero").textContent = juego.genero;
        document.getElementById("modalPlataformas").textContent = juego.plataformas;

        document.getElementById("modalVideo").src = juego.video;
    });
});

// 🔥 IMPORTANTE: limpiar modal al cerrar
modal.addEventListener("hidden.bs.modal", () => {
    document.getElementById("modalVideo").src = "";
    document.getElementById("modalTitulo").textContent = "";
    document.getElementById("modalDescripcion").textContent = "";
    document.getElementById("modalLanzamiento").textContent = "";
    document.getElementById("modalGenero").textContent = "";
    document.getElementById("modalPlataformas").textContent = "";
});