// Parallax effekt for vores hero billeder
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

// Lyt efter scroll-begivenhed på vinduet og kør parallax-effekten, når der scroller
window.addEventListener("scroll", parallaxEffect);

