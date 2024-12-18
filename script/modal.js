// Variabler - fra HTML 
const modal = document.getElementById("modaltak"); //Selve modallet 
const knap = document.getElementById("sendknap"); //Send knappen
const luk = document.getElementsByClassName("lukknap")[0]; //Luk knappen
const modaltekst = document.getElementById("tekstmodal"); // Tekst i modalet
const firstnameInput = document.getElementById("firstname"); // Fornavn input
const lastnameInput = document.getElementById("lastname"); // Efternavn input
const emailInput = document.getElementById("email"); // E-mail input
const phoneInput = document.getElementById("phone"); // Telefon input
const subjectInputs = document.querySelectorAll("input[name='subject']"); // Radioknapper til emner
const messageInput = document.getElementById("message"); // Besked input

// Klik på send, og modalet bliver åbnet
knap.onclick = function (event) {

    event.preventDefault(); // Forhindr standardformularindsendelse

  // Tjek om formularen er korrekt udfyldt
  if (!validateForm()) {
    alert("Udfyld venligst alle felterne korrekt."); // Fejlmeddelelse hvis felterne ik er udfyldt
    return;
  }

  // Hent brugerens fornavn fra input-feltet
  const firstname = firstnameInput.value;

  // Opdater modalets tekst med brugerens navn
  modaltekst.innerHTML = `Tak for din besked, ${firstname}! <br><br>
  Jeg vender tilbage hurtigst muligt indenfor 1-3 hverdage.`;

  // Vis modalet
  modal.style.display = "block";
};

// Klik på luk, og modalet bliver lukket
luk.onclick = function () {
  modal.style.display = "none";

  // Ryd formularen, så brugeren kan starte forfra, og navnet ikke bliver husket 
  document.querySelector("form").reset();
};

// Funktion til at validere formularen
function validateForm() {
  // Tjek om alle felter i formularen er udfyldt
  if (
    firstnameInput.value.trim() === "" ||
    lastnameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    phoneInput.value.trim() === "" ||
    messageInput.value.trim() === "" ||
    !Array.from(subjectInputs).some((input) => input.checked) // Tjek om mindst en radioknap er valgt
  ) {
    return false; // Validering fejler, hvis et felt mangler at blive udfyldt
  }

  // Tjek om e-mailen har et gyldigt format
  if (!validateEmail(emailInput.value)) {
    alert("Indtast venligst en gyldig e-mailadresse."); // Fejlmeddelelse til e-mail
    return false;
  }

  return true; // Valideringen er godkendt
}

// Funktion til at validere e-mailformat
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simpelt e-mailmønster
  return emailRegex.test(email);
}