//Kort animation
gsap.registerPlugin(ScrollTrigger); //Register scrolltrigger plugin fra GSAP

gsap.utils.toArray(".program").forEach(function (program, index) { //Laver et array som går igennem alle .program kort og med forEach metoden tilføjer det gsap animationen til hver enkelt kort
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
