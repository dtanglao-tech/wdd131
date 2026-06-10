const streetFoods = [
    {
        id: "kwek-kwek",
        name: "Kwek-Kwek",
        category: "savory",
        tags: ["Deep-Fried", "Classic"],
        desc: "Hard-boiled quail eggs wrapped in crisp orange batter and flash-fried to street side perfection.",
        sauces: {
            sweet: "Thick caramelized starch syrup layered with sweet soy accents and hints of crushed garlic.",
            spicy: "The signature brown sauce glaze infused with chopped siling labuyo (wild bird's eye chili peppers).",
            vinegar: "Tangy fermented palm vinegar packed with minced red onion cubes and smashed garlic bulbs."
        }
    },
    {
        id: "fish-balls",
        name: "Fish Balls",
        category: "savory",
        tags: ["Deep-Fried", "Merienda"],
        desc: "Crispy fried rounds of pulled fish meat, pulled sizzling hot directly out of street side woks onto skewers.",
        sauces: {
            sweet: "Smooth caramelized golden starch glaze—the classic street cart coating.",
            spicy: "A pungent hot variant of sweet brown sauce carrying an intense spicy kick.",
            vinegar: "Spiced garlic native white vinegar marinade designed to cut down fatty sensations."
        }
    },
    {
        id: "taho",
        name: "Taho",
        category: "sweet",
        tags: ["Sweet", "Breakfast"],
        desc: "Warm layers of ultra-soft silken tofu sweetened with rich caramelized arnibal brown sugar syrup and sago pearls.",
        sauces: {
            sweet: "Pure premium sugarcane reduction, simmered slow for clean molasses notes.",
            spicy: "Not recommended! Hot chili profiles conflict heavily with sweet tofu profiles.",
            vinegar: "Avoid completely. Sour profiles curdle fresh soy milk protein structures instantly."
        }
    }
];

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("food-grid")) {
        initFoodFinder();
    }
    if (document.getElementById("sauce-simulator")) {
        initSauceStation();
    }
});

function initFoodFinder() {
    const grid = document.getElementById("food-grid");
    const filters = document.querySelectorAll(".filter-btn");

    function renderCards(dataset) {
        grid.innerHTML = "";
        dataset.forEach(item => {
            const cardHTML = `
                <article class="food-card">
                    <span class="card-badge">${item.category.toUpperCase()}</span>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="tag-row">
                        ${item.tags.map(t => `<span class="tag">#${t}</span>`).join("")}
                    </div>
                </article>
            `;
            grid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    renderCards(streetFoods);

    filters.forEach(button => {
        button.addEventListener("click", (e) => {
            filters.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            
            const category = e.target.getAttribute("data-category");
            if (category === "all") {
                renderCards(streetFoods);
            } else {
                renderCards(streetFoods.filter(f => f.category === category));
            }
        });
    });
}

function initSauceStation() {
    const foodSelect = document.getElementById("food-select");
    const sauceSelect = document.getElementById("sauce-select");
    const outputText = document.getElementById("sauce-result-text");
    const form = document.getElementById("preference-form");
    const feedback = document.getElementById("saved-preference");

    const saved = localStorage.getItem("favCombo");
    if (saved) {
        feedback.textContent = `Saved Combo: ${saved}`;
    }

    function calculatePairing() {
        const food = streetFoods.find(f => f.id === foodSelect.value);
        if (food) {
            outputText.innerHTML = `<strong>${food.name} + ${sauceSelect.value.toUpperCase()}:</strong> ${food.sauces[sauceSelect.value]}`;
        }
    }

    foodSelect.addEventListener("change", calculatePairing);
    sauceSelect.addEventListener("change", calculatePairing);
    calculatePairing();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const outputString = `${foodSelect.options[foodSelect.selectedIndex].text} in ${sauceSelect.options[sauceSelect.selectedIndex].text}`;
        localStorage.setItem("favCombo", outputString);
        feedback.textContent = `Saved Combo: ${outputString}`;
    });
}