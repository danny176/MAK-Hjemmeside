//Forside animation

//Kort animation
gsap.registerPlugin(ScrollTrigger); //Register scrolltrigger plugin fra GSAP

gsap.utils.toArray(".program").forEach(function (program, index) {
  //Laver et array som går igennem alle .program kort og med forEach metoden tilføjer det gsap animationen til hver enkelt kort
  gsap.from(program, {
    x: 100, // Starter animationen ude til højre med 100px på X-aksen
    opacity: 0, // Starter usynlig
    duration: 0.4, // Animationen på hver kort tager 400ms
    ease: "power2.out", //Tilføjer en easing kurve for at gøre animationen mere naturlig
    delay: index * 0.2, // Der kommer et lille delay på hver animation af 200ms
    scrollTrigger: {
      trigger: program, // Animationen skal starter når containeren, som indeholder .program classen er synlig i brugerens viewport
      start: "top 80%", // Animationen starter når 20% af toppen af .program containeren/boksen er synlig
      toggleActions: "play none none none", // Animationen bliver afspilet ved scroll, ingen gentagelse af animation
    },
  });
});

//Process animation
gsap.utils.toArray(".process-trin").forEach(function (program, index) {
  //Laver et array som går igennem alle .program kort og med forEach metoden tilføjer det gsap animationen til hver enkelt kort
  gsap.from(program, {
    x: 100, // Starter animationen ude til højre med 100px på X-aksen
    opacity: 0, // Starter usynlig
    duration: 0.4, // Animationen på hver kort tager 400ms
    ease: "power2.out", //Tilføjer en easing kurve for at gøre animationen mere naturlig
    delay: index * 0.2, // Der kommer et lille delay på hver animation af 200ms
    scrollTrigger: {
      trigger: ".process-forløb", // Animationen skal starter når containeren, som indeholder .program classen er synlig i brugerens viewport
      start: "top 80%", // Animationen starter når 20% af toppen af .program containeren/boksen er synlig
      toggleActions: "play none none none", // Animationen bliver afspilet ved scroll, ingen gentagelse af animation
    },
  });
});

//Kontakt animation
document.addEventListener("DOMContentLoaded", () => {
  const kontaktSektion = document.querySelector(".kontakt-sektion");


  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
 
          kontaktSektion.classList.add("animate");

          
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, 
      threshold: 0.5, 
    }
  );

  
  observer.observe(kontaktSektion);
});

//Animation til anmeldelse sektion
gsap.from(".anmeldelser-tekst", {
  x: -100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.4, // Animationen tager 400ms
  ease: "power2.out", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".anmeldelser-tekst", // Animationen starter, når elementet er synligt i viewport
    start: "top 80%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

//Animation til introduktions teksten
gsap.from(".intro-tekst", {
  y: 200, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.4, // Animationen tager 400ms
  ease: "power3.out", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".intro-billede-box", // Animationen starter, når elementet er synligt i viewport
    start: "top 80%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

//ANIMATION TIL PROGRAMMER SIDE

gsap.from(".program1", {
  y: 100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.7, // Animationen tager 400ms
  ease: "back.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".program1", // Animationen starter, når elementet er synligt i viewport
    start: "top 70%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

gsap.from(".program2", {
  y: 100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.7, // Animationen tager 400ms
  ease: "back.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".program2", // Animationen starter, når elementet er synligt i viewport
    start: "top bottom", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

gsap.from(".program3", {
  y: 100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.7, // Animationen tager 400ms
  ease: "back.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".program3", // Animationen starter, når elementet er synligt i viewport
    start: "top bottom", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

//ANIMATION TIL OM MIG SIDE

gsap.from(".sektion2", {
  y: 100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.6, // Animationen tager 400ms
  ease: "power4.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".sektion2", // Animationen starter, når elementet er synligt i viewport
    start: "top 95%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

gsap.from(".sektion3", {
  x: -100, // Starter animationen ude til højre med 100px på X-aksen
  opacity: 0, // Starter usynlig
  duration: 0.6, // Animationen tager 400ms
  ease: "power2.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".sektion3", // Animationen starter, når elementet er synligt i viewport
    start: "top 95%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

//ANIMATION TIL KONTAKT SIDE

//Kontakt animation
document.addEventListener("DOMContentLoaded", () => {
  const kontaktSektion = document.querySelector(".kontakt-sektion");


  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
 
          kontaktSektion.classList.add("animate");

          
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, 
      threshold: 0.5, 
    }
  );

  
  observer.observe(kontaktSektion);
});

