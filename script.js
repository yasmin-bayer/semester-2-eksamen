// Med hjælp fra ChatGPT//
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".juice-card");
// Med hjælp fra ChatGPT//
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Fjern aktiv klasse fra alle knapper
        buttons.forEach(b => b.classList.remove("active"));
        // Tilføj aktiv klasse til den valgte
        btn.classList.add("active");

        const selectedFlavor = btn.dataset.flavor;

        // Vis/skjul produkter baseret på smag
        cards.forEach(card => {
            if (card.dataset.flavor === selectedFlavor) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// Med hjælp fra ChatGPT//
    document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("juiceModal");
    const readMore = document.querySelector(".read-more");
    const closeBtn = document.querySelector(".close");

    readMore.addEventListener("click", () => {
    modal.style.display = "block";
});

    closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

    window.addEventListener("click", (e) => {
    if (e.target === modal) {
    modal.style.display = "none";
}
});
});


