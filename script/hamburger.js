//HAMBURGER MENU MED SLIDE

// Opretter variabler fra HTML ved hjælp af deres klasser
const menuButton = document.querySelector(".hambruger-menu-knap"); // Knap der åbner/lukker menuen
const rightLinks = document.querySelector(".right-links"); // Elementet med menu-links
const burgerIcon = document.querySelector(".burger-icon"); // Hamburger-ikonet
const closeIcon = document.querySelector(".close-icon"); // Luk-ikonet

// Denne funktion styrer visning af mobilmenuen
function toggleMenu() {
  // Tjek om 'active'-klassen allerede er tilføjet, eller om den skal fjernes
  if (rightLinks.classList.contains("active")) {
    // Hvis 'active'-klassen allerede er der, fjernes den for at lukke menuen
    rightLinks.classList.remove("active");
    burgerIcon.style.display = "block"; // Vis hamburger-ikonet igen
    closeIcon.style.display = "none"; // Skjul luk-ikonet
    document.body.classList.remove("lock-scroll"); // Tillad scrolling igen
  } else {
    // Hvis 'active'-klassen ikke er der, tilføjes den for at åbne menuen
    rightLinks.classList.add("active");
    burgerIcon.style.display = "none"; // Skjul hamburger-ikonet
    closeIcon.style.display = "block"; // Vis luk-ikonet
    document.body.classList.add("lock-scroll"); // Lås scroll på siden
  }
}

// Tilføj en klik-begivenhed til menu-knappen/hamburger ikonet, som aktivere min funktion der viser og skjuler navigations menuen.
menuButton.addEventListener("click", toggleMenu);
