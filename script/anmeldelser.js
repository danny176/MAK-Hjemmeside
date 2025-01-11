// Array med kundevurderinger
const kundeAnmeldelser = [
    {
        navn: "Jens",
        citat: "Jeg havde aldrig trænet før, men med Mohammad's hjælp følte jeg mig tryg fra dag et.",
        stjerner: 4,
        billede: "images/transformation.png"
    },
    {
        navn: "Susanne", 
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

    // Opdater citater, tilføjer gåseøjne til teksten 
    if (desktopCitat) desktopCitat.textContent = '"' + aktuelAnmeldelse.citat + '"';
    if (mobilCitat) mobilCitat.textContent = '"' + aktuelAnmeldelse.citat + '"';

    // Opdater navne
    if (desktopNavn) desktopNavn.textContent = aktuelAnmeldelse.navn;
    if (mobilNavn) mobilNavn.textContent = aktuelAnmeldelse.navn;

    // Opdater billeder
    if (desktopBillede) desktopBillede.src = aktuelAnmeldelse.billede;
    if (mobilBillede) mobilBillede.src = aktuelAnmeldelse.billede;

    // Funktion til at oprette stjerne-ikoner *Kig videre på mandag
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

// Funktion til at gå til næste anmeldelse, Sørger for at anmeldeserne kører i ring *Kig på mandag //Forenklet metode af et loop, samme værdier hele vejen ikke behov for kompleks loop
function næsteAnmeldelse() {
    // Brug modulo-operator for at cykle gennem arrayet // Tager review index og plusser med 1 for at gå videre til næste, giver plus 1% så den ved at hvor den er nået og når den rammer 4% skal den gå tilbage til først, % bruges for at modulo virker
    anmeldelsesReviewIndex = (anmeldelsesReviewIndex + 1) % kundeAnmeldelser.length;
    opdaterAnmeldelse();
}

// Begynder når siden indlæses
document.addEventListener('DOMContentLoaded', () => {
    // Vis første anmeldelse med det samme
    opdaterAnmeldelse();

    // Automatisk rotation af anmeldelser hver 5. sekund
    setInterval(næsteAnmeldelse, 5000);
});