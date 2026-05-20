const title = document.querySelector("h1");

title.addEventListener("click", function () {
    alert("Welcome to the Temple Album!");
});

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});