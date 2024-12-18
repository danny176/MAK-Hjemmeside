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

  // Stopper bounce effect på mobil og returnere til starts position
  if (currentScrollY < 0) {
    window.scrollTo(0, 0);
    return;
  }

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
