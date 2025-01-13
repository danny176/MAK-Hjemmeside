// Parallax effekt for vores hero billeder

// Lyt efter scroll-begivenhed på vinduet og kør parallax-effekten, når der scroller // Fjerne parralax effekt på mobilen fordi det ikke virkede
function mediaQuerries(x) {
  if (x.matches) {
    window.removeEventListener("scroll", parallaxEffect);
  } else {
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

  // Ændre billedets position baseret på scroll-positionen og hastigheden. Gør sådan at billedet bevæger sig op af Y-aksen, langsommere end brugeren scroller, da vores speed værdi er 0.5
  herobillede.style.transform = `translateY(${scrollPosition * speed}px)`; //translateY(${scrollPosition * speed}px) er en CSS værdi med udregning i midten. Kaldes en interpolation, det beregner et tal baseret på værdierne af de anvendte variabler. 
}

//Beregningen af scrollPosition * speed bliver 200 * 0.5 = 100. Dvs at værdien bliver herobillede.style.transform = translateY(100px)

// Opret en MediaQueryList til at tjekke skærmstørrelsen
const x = window.matchMedia("(max-width: 500px)");

// Lyt efter ændringer i MediaQueryList
x.addEventListener("change", mediaQuerries); //TJekker om den skal tilføje eller fjerne parallax effect, baseret på skræmstørrelsen

// Initial kontrol for at sætte korrekt tilstand
mediaQuerries(x);
