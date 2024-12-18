// Parallax effekt for vores hero billeder

// Lyt efter scroll-begivenhed på vinduet og kør parallax-effekten, når der scroller
function mediaQuerries (x) {
  if (x.matches) {
    window.removeEventListener("scroll", parallaxEffect);
  }
  else {
    window.addEventListener("scroll", parallaxEffect);
  }
}

function parallaxEffect() {
  // Hent den nuværende scroll-position på siden
  const scrollPosition = window.scrollY;

  // Vælg hero-billedet (billedet inde i .herobillede containeren)
  const herobillede = document.querySelector(".herobillede img");

  // Sæt hastigheden for parallax-effekten
  const speed = 0.5; // Hastigheden af bevægelsen i forhold til scrollen

  // Ændre billedets position baseret på scroll-positionen og hastigheden
  herobillede.style.transform = `translateY(${scrollPosition * speed}px)`;
}

// Opret en MediaQueryList til at tjekke skærmstørrelsen
const x = window.matchMedia("(max-width: 500px)");

// Lyt efter ændringer i MediaQueryList
x.addEventListener("change", mediaQuerries);

// Initial kontrol for at sætte korrekt tilstand
mediaQuerries(x);


