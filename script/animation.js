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

//Animation til kontakt CTA

gsap.fromTo(".kontakt-sektion", 
  {
    y: 50, // Starter nedenfor
    opacity: 0,
  }, 
  {
    y: 0, // Flyt til sin oprindelige position
    opacity: 1,
    duration: 0.4, // Animationen tager 2 sekunder
    ease: "back.out", // Tilføjer bounce back easing
    repeat: -1, // Gentag for evigt
    repeatDelay: 5, // Vent 5 sekunder før gentagelse
    scrollTrigger: {
      trigger: ".kontakt-sektion", // Animation starter, når denne er i viewport
      start: "top 90%", // Start animationen, når toppen er 90% synlig
      toggleActions: "play none none none", // Spil animationen én gang når synlig
    },
  }
);

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

gsap.from(".billede-kontaktform", {
  y: 100, // Starter animationen nede fra
  opacity: 0, // Starter usynlig
  duration: 0.6, // Animationen tager 400ms
  ease: "power2.inOut", // Tilføjer en easing kurve
  scrollTrigger: {
    trigger: ".billede-kontaktform", // Animationen starter, når elementet er synligt i viewport
    start: "top 95%", // Starter animationen, når 20% af toppen er synlig
    toggleActions: "play none none none", // Spil animationen én gang
  },
});

gsap.fromTo(".vikon", 
  {
    y: 50, // Starter nedenfor
  }, 
  {
    y: 0, // Flyt til sin oprindelige position
    duration: 1, // Animationen tager 2 sekunder
    ease: "bounce.out", // Tilføjer bounce back easing
    repeat: -1, // Gentag for evigt
    repeatDelay: 5, // Vent 5 sekunder før gentagelse
    scrollTrigger: {
      trigger: ".vikontekst", // Animation starter, når denne er i viewport
      start: "top 90%", // Start animationen, når toppen er 90% synlig
      toggleActions: "play none none none", // Spil animationen én gang når synlig
    },
  }
);

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