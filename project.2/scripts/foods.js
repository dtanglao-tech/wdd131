const foods = [

{
    name: "Kwek-Kwek",

    category: "savory",

    image: "images/kwek-kwek.jpg",

    description:
    "Deep-fried quail eggs coated in orange batter."
},

{
    name: "Fish Balls",

    category: "savory",

    image: "images/fishballs.jpg",

    description:
    "Popular fried fish balls served with sauces."
},

{
    name: "Isaw",

    category: "savory",

    image: "images/isaw.jpg",

    description:
    "Grilled chicken or pork intestines."
},

{
    name: "Banana Cue",

    category: "sweet",

    image: "images/banana-cue.jpg",

    description:
    "Caramelized skewered bananas."
},

{
    name: "Taho",

    category: "merienda",

    image: "images/taho.jpg",

    description:
    "Soft tofu with arnibal syrup and sago pearls."
}

];

const foodContainer =
document.querySelector("#foodContainer");

function displayFoods(foodList) {

    foodContainer.innerHTML = "";

    foodList.forEach(food => {

        foodContainer.innerHTML += `

        <article class="food-card">

            <img
                src="${food.image}"
                alt="${food.name}"
                loading="lazy">

            <div class="card-content">

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <button
                    class="favorite-btn"
                    onclick="saveFavorite('${food.name}')">

                    Favorite

                </button>

            </div>

        </article>

        `;

    });

}

function saveFavorite(foodName) {

    localStorage.setItem(
        "favoriteFood",
        foodName
    );

    alert(`${foodName} added to favorites!`);

}

displayFoods(foods);

document
.querySelector("#allBtn")
.addEventListener("click", () => {

    displayFoods(foods);

});

document
.querySelector("#savoryBtn")
.addEventListener("click", () => {

    const savoryFoods =

    foods.filter(food =>
        food.category === "savory"
    );

    displayFoods(savoryFoods);

});

document
.querySelector("#sweetBtn")
.addEventListener("click", () => {

    const sweetFoods =

    foods.filter(food =>
        food.category === "sweet"
    );

    displayFoods(sweetFoods);

});

document
.querySelector("#meriendaBtn")
.addEventListener("click", () => {

    const meriendaFoods =

    foods.filter(food =>
        food.category === "merienda"
    );

    displayFoods(meriendaFoods);

});

document.querySelector("#currentyear")
.textContent =
new Date().getFullYear();

document.querySelector("#lastModified")
.textContent =
`Last Modified: ${document.lastModified}`;