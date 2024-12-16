// Array med kundevurderinger
const kundeAnmeldelser = [
    {
        navn: "Jens",
        citat: "Jeg havde aldrig trænet før, men med Mohammad's hjælp følte jeg mig tryg fra dag et.",
        stjerner: 4,
        billede: "images/transformation.png"
    },
    {
        navn: "Maria", 
        citat: "Mohammad's personlige tilgang har fuldstændig forandret min måde at tænke træning på.",
        stjerner: 5,
        billede: "images/transformationsbilledetre.png"
    },
    {
        navn: "Lars",
        citat: "Utroligt professionel træner der virkelig forstår at motivere og guide.",
        stjerner: 4,
        billede: "images/transformationsbilledeto.png"
    }
];

// Variabel til at holde styr på den aktuelle anmeldelses index
let anmeldelsesReviewIndex = 0;

// Funktion til at opdatere anmeldelsesindholdet
function opdaterAnmeldelse() {
    // Hent den afbenyttede anmeldelse fra arrayet
    const aktuelAnmeldelse = kundeAnmeldelser[anmeldelsesReviewIndex];
    
    // Vælg elementer til desktop-visning
    const desktopCitat = document.querySelector('.sektion-anmeldelser .anmeldelser-citat');
    const desktopNavn = document.querySelector('.sektion-anmeldelser .anmeldelser-tekst p:last-child');
    const desktopBillede = document.querySelector('.sektion-anmeldelser .anmeldelser-billede');
    const desktopStjerner = document.querySelector('.sektion-anmeldelser .anmeldelser-stjerner');

    // Vælg elementer til mobil-visning
    const mobilCitat = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-citat-mobil');
    const mobilNavn = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-tekst-mobil p:last-child');
    const mobilBillede = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-billede-mobil');
    const mobilStjerner = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-stjerner');

    // Opdater citater
    if (desktopCitat) desktopCitat.textContent = '"' + aktuelAnmeldelse.citat + '"';
    if (mobilCitat) mobilCitat.textContent = '"' + aktuelAnmeldelse.citat + '"';

    // Opdater navne
    if (desktopNavn) desktopNavn.textContent = aktuelAnmeldelse.navn;
    if (mobilNavn) mobilNavn.textContent = aktuelAnmeldelse.navn;

    // Opdater billeder
    if (desktopBillede) desktopBillede.src = aktuelAnmeldelse.billede;
    if (mobilBillede) mobilBillede.src = aktuelAnmeldelse.billede;

    // Funktion til at oprette stjerne-ikoner
    function opretStjerneIkoner(stjerner) {
        let stjerneHtml = '';
        // Opret 5 stjerner, hvor nogle er udfyldt baseret på anmeldelsesstjerners antal
        for (let i = 0; i < 5; i++) {
            stjerneHtml += '<img src="ikoner/' + (i < stjerner ? 'udfyldtstjerne' : 'tomstjerne') + '.svg" alt="Stjerne">';
        }
        return stjerneHtml;
    }

    // Opdater stjerner
    if (desktopStjerner) desktopStjerner.innerHTML = opretStjerneIkoner(aktuelAnmeldelse.stjerner);
    if (mobilStjerner) mobilStjerner.innerHTML = opretStjerneIkoner(aktuelAnmeldelse.stjerner);
}

// Funktion til at gå til næste anmeldelse
function næsteAnmeldelse() {
    // Brug modulo-operator for at cykle gennem arrayet
    anmeldelsesReviewIndex = (anmeldelsesReviewIndex + 1) % kundeAnmeldelser.length;
    opdaterAnmeldelse();
}

// Funktion til at gå til forrige anmeldelse
function forrigeAnmeldelse() {
    // Brug modulo-operator for at cykle gennem arrayet baglæns
    anmeldelsesReviewIndex = (anmeldelsesReviewIndex - 1 + kundeAnmeldelser.length) % kundeAnmeldelser.length;
    opdaterAnmeldelse();
}

// Initialisering når siden indlæses
document.addEventListener('DOMContentLoaded', () => {
    // Vis første anmeldelse med det samme
    opdaterAnmeldelse();

    // Valgfri: Tilføj event listeners til navigationsknapper
    // const næsteKnap = document.querySelector('.next-review-button');
    // const forrigeKnap = document.querySelector('.prev-review-button');

    // Tilføj klik-events hvis knapperne eksisterer
    // if (næsteKnap) næsteKnap.addEventListener('click', næsteAnmeldelse);
    // if (forrigeKnap) forrigeKnap.addEventListener('click', forrigeAnmeldelse);

    // Automatisk rotation af anmeldelser hver 5. sekund
    setInterval(næsteAnmeldelse, 5000);
});