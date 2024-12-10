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

//Burger menu
const menuButton = document.querySelector(".hambruger-menu-knap");
const rightLinks = document.querySelector(".right-links");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

// Gør mobil menu synlig ved at give den en active class, som flytter menuen fra venstre ind i midten af viewporten
menuButton.addEventListener("click", () => {
  rightLinks.classList.toggle("active"); // Fjerne eller tilføj 'active' class

  // Skift mellem luk og hambruger ikoner
  if (rightLinks.classList.contains("active")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    document.body.classList.add("lock-scroll"); // Lås scroll så hamburger menu er fixed
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    document.body.classList.remove("lock-scroll"); // Lås scroll op igen når hamburger menu er lukket
  }
});

// Gsap animation for rundede hjørner
window.addEventListener('load', () => {  // Lytter efter, at hele siden er indlæst, før animationen starter
  gsap.to('.herobillede img', {  // Vælger alle billeder indenfor '.herobillede' containeren og forbereder animationen
    borderBottomLeftRadius: '10%',  // Sætter den nederste venstre radius til 10% af billedets størrelse, skaber en let kurve
    borderBottomRightRadius: '10%',  // Sætter den nederste højre radius til 10% af billedets størrelse, skaber en let kurve
    duration: 1,  // Definerer varigheden af animationen til 1 sekund
    delay: 0.4,  // Angiver en forsinkelse på 0.4 sekunder efter at siden er fuldt indlæst, før animationen starter
    ease: 'bounce.out',  // Bestemmer animationens easing, 'bounce.out' skaber en hoppende effekt.
  });
});
