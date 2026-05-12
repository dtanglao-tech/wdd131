const year = document.getElementById("currentyear");
const modified = document.getElementById("modifiedDate");

year.textContent = new Date().getFullYear();
modified.textContent = document.lastModified;