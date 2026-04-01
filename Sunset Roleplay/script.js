// Kopírování IP do schránky
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("IP adresa zkopírována: " + text);
    }).catch(err => {
        alert("Chyba při kopírování: " + err);
    });
}

// Hamburger menu pro mobil
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});