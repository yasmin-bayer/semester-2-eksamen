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

    document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("juiceModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalIngredients = document.getElementById("modalIngredients");
    const closeBtn = document.querySelector(".close");

    // Juice data
    const juiceData = {
    "Appelsin": {
    image: "produkter/appelsin2.png",
    name: "Appelsin Juice",
    volume: "20cl",
    ingredients: "100 % økologisk frisk appelsinjuice – fra koncentrat. Frugtindhold 100%. Pasteuriseret.",
},
    "Æble": {
    image: "produkter/æble2.png",
    name: "Æble Juice",
    volume: "20cl",
    ingredients: "100 % økologisk frisk æblejuice – fra koncentrat. Frugtindhold 100%. Pasteuriseret."
},
        "Hyldeblomst": {
            image: "produkter/hyldeblomst2.png",
            name: "Hyldeblomst Juice",
            volume: "20cl",
            ingredients: "Vand, økologisk sukker, citronsyre, økologisk citronsaft, naturlig aroma (frisk hyldeblomst ekstrakt), økologisk karamelsirup."
        },

        "Rabarber": {
            image: "produkter/rabarber2.png",
            name: "Rabarber Juice",
            volume: "20cl",
            ingredients: "Økologisk sukker, økologisk frisk rabarber, økologisk sort gulerodssaft, økologisk citronsyre og vand."
        },
        "Ananas": {
            image: "produkter/ananas.png",
            name: "Ananas Juice",
            volume: "1 l",
            ingredients: "100% ananas fremstillet af frisk presset ananas. Pasteuriseret."
        },
        "Multi": {
            image: "produkter/multi.png",
            name: "Multi Juice",
            volume: "1 l",
            ingredients: "Æble, Mango, Banan, Passionsfrugt, Kiwi & Citron - Æblejuice fra koncentrat (86,1%), mangopuré fra koncentrat (4,8%), bananjuice fra koncentrat (4,2%), bananpuré (3,2%), passionsfrugtsaft fra koncentrat (0,7 %), kiwipuré (0,6%), citronsaft fra koncentrat (0,4%)."
        },

    };

    // Event listeners på alle "Læs mere" knapper
    document.querySelectorAll(".juice-card .read-more").forEach(button => {
    button.addEventListener("click", () => {
    const card = button.closest(".juice-card");
    const flavor = card.dataset.flavor;
    const data = juiceData[flavor];

    modalImage.src = data.image;
    modalImage.alt = data.name;
    modalTitle.innerHTML = `${data.name} <span>${data.volume}</span>`;
    modalIngredients.textContent = data.ingredients;

    modal.style.display = "block";
});
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

// Med hjælp fra ChatGPT til at lave pop up vinduet for appelsin juice//
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



