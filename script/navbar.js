// Når man scroller ned fra toppen af siden, så ændres baggrundsfarven på navbar samt at navbar bliver skjult og vist kun når man scroller op igen
function mediaQuerries (x) {
  if (x.matches) {
    window.removeEventListener("scroll");
  }
  else {
    window.addEventListener("scroll");
  }
}

// Opret en MediaQueryList til at tjekke skærmstørrelsen
const x = window.matchMedia("(max-width: 500px)");

// Lyt efter ændringer i MediaQueryList
x.addEventListener("change", mediaQuerries);

// Initial kontrol for at sætte korrekt tilstand
mediaQuerries(x);

// Holder styr på sidste scroll-position
let lastScrollY = 0;

document.addEventListener("scroll", function () {
  // Finder navbar-elementet, som skal ændres, når brugeren scroller
  const navbar = document.querySelector(".nav-container");
  // Finder alle elementer med klassen "stagger-link-text", dvs. overskrifterne der skal ændre farve
  const staggerLinks = document.querySelectorAll(".stagger-link-text");
  // Finder logo-elementet inde i firma-navn-div'en
  const logo = document.querySelector(".firma-navn img");
  // Definerer det punkt (200 pixels ned), hvor ændringerne skal træde i kraft
  const changePoint = 200;
  // Finder burgermenu, som skal ændres til sort, når brugeren scroller
  const burgerIcon = document.querySelector("burger-icon");
  // Tilføjer den sorte burgermenu
  const burgerMenuIcon = document.querySelector(".burger-icon");

  // Henter den aktuelle scroll-position
  const currentScrollY = window.scrollY;

   // Skjuller eller visser navbar afhængigt af scroll-retning
   if (currentScrollY > lastScrollY) {
    // Bruger scroller ned, skjul navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Bruger scroller op, vis navbar
    navbar.style.transform = "translateY(0)";
  }

   // Hvis brugeren har scrollet forbi ændringspunktet (changePoint)
   if (currentScrollY > changePoint) {
    // Tilføjer klassen "scrolled" til navbar for at ændre dens baggrund
    navbar.classList.add("scrolled");
    // Tilføjer klassen "text-dark" til hver "stagger-link-text" for at ændre deres tekstfarve til sort
    staggerLinks.forEach((link) => link.classList.add("text-dark"));
    // Ændrer logoets kilde (src) til et sort logo
    logo.src = "/images/maklogosort2.svg";
    // Skifter til sort burgermenu-ikon
    burgerMenuIcon.src = "/ikoner/burgermenuSort.png";
    
  } else {
    // Fjerner klassen "scrolled", så navbaren får sin oprindelige baggrund igen
    navbar.classList.remove("scrolled");
    // Skifter tilbage til de hvide overskrifter
    staggerLinks.forEach((link) => link.classList.remove("text-dark"));
    // Skifter tilbage til det hvide logo
    logo.src = "/images/maklogo.svg";
    // Skifter tilbage til originalt burgermenu-ikon
    burgerMenuIcon.src = "/ikoner/hamburger.svg";
  }

  // Opdater sidste scroll-position
  lastScrollY = currentScrollY;
});
