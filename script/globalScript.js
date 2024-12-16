//Navigation animation til links med GSAP og Splittext lib

const staggerLinks = document.querySelectorAll(".stagger-link"); //Laver en variabed som vælger alle elementer der har .stagger-link class.

staggerLinks.forEach((link) => {
  const textElement = link.querySelector(".stagger-link-text"); //En NodeList der indeholder alle links med klassen .stagger-link. Bruges til at finde den relevante del af linket (den tekst, der skal animeres). Laver en varibel textElement, så de funde tekst elementer kan bruges i animationen

  // Opdeler teksten til bogstaver der kan animeres
  const splitText = new SplitType(textElement, { types: "chars" });

  // Laver en GSAP timeline der skal styre animationen
  const tl = gsap.timeline({ paused: true });

  // Flytter teksten op af Y-aksen, og putter en stack effekt på bogstaverne
  tl.to(splitText.chars, {
    y: "-150%", // Flyt hver bogstav -150% op af Y-aksen
    duration: 0.3,
    stagger: 0.01, // Hvert bogstavs animation er forsinket med 0.1 sekund, så det giver en rullende effekt
    ease: "power4.inOut", //Easing effekt
    overwrite: true, //Effekten bliver startet forfra når du forlader hover stadiet og hurtigt bevæger dig tilbage
  });

  // Mouse enter event til at starte GSAP timeline animationen
  link.addEventListener("mouseenter", () => {
    tl.play();
  });

  // Mouse leave event afspiller GSAP timeline animationen baglæns
  link.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

//Hero billede parallax effect
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const herobillede = document.querySelector(".herobillede img");
  const speed = 0.5; // Hastigheden
  herobillede.style.transform = `translateY(${scrollPosition * speed}px)`;
});

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
