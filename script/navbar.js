// Når man scroller ned fra toppen af siden, så ændres baggrundsfarven på navbar 


document.addEventListener("scroll", function () {
    // Finder navbar-elementet, som skal ændres, når brugeren scroller
    const navbar = document.querySelector(".nav-container");
    // Finder alle elementer med klassen "stagger-link-text", dvs. overskrifterne der skal ændre farve
    const staggerLinks = document.querySelectorAll(".stagger-link-text");
    // Finder logo-elementet inde i firma-navn-div'en
    const logo = document.querySelector(".firma-navn img"); 
    // Definerer det punkt (250 pixels ned), hvor ændringerne skal træde i kraft
    const changePoint = 250;
    // Finder burgermenu, som skal ændres til sort, når brugeren scroller
    const burgerIcon = document.querySelector("burger-icon");
    // Tilføjer den sorte burgermenu
    const burgerMenuIcon = document.querySelector(".burger-icon"); 
    // Finder burgermenu-ikonet
    const closeMenuIcon = document.querySelector(".close-icon");
  

    // Hvis brugeren har scrollet 250 px, så træder ændringen i kraft
    if (window.scrollY > changePoint) {

    // Tilføjer klassen "scrolled" til navbar for at ændre dens baggrund
    navbar.classList.add("scrolled");

    // Tilføjer klassen "text-dark" til hver "stagger-link-text" for at ændre deres tekstfarve til sort
    staggerLinks.forEach(link => link.classList.add("text-dark")); 
    
    // Ændrer logoets kilde (src) til et sort logo
    logo.src ="/images/maklogoSort.svg"; 

    // Skifter til sort burgermenu-ikon
    burgerMenuIcon.src = "/ikoner/burgermenuSort.png"; 
    
    // Skifter lukkeikonet
    closeMenuIcon.src = "/ikoner/closeIconSort.png"; 


    } 
    
    else {
     // Fjerner klassen "scrolled", så navbaren får sin oprindelige baggrund igen
    navbar.classList.remove("scrolled");
    // Skifter tilbage til de hvide overskrifter
    staggerLinks.forEach(link => link.classList.remove("text-dark")); 
    // Skifter tilbage til det hvide logo
    logo.src = "/images/maklogo.svg"; 
    // Skifter tilbage til originalt burgermenu-ikon
    burgerMenuIcon.src = "/ikoner/hamburger.svg"; 
    // Skifter tilbage til originalt lukkeikon
    closeMenuIcon.src = "/ikoner/closeicon.svg"; 
  }
}
  );
  
  
  
  