const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".juice-card");

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

