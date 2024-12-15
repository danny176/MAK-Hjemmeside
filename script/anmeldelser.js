// Array of client reviews
const reviews = [
    {
        name: "Jens",
        quote: "Jeg havde aldrig trænet før, men med Mohammad's hjælp følte jeg mig tryg fra dag et.",
        stars: 4,
        image: "images/transformation.png"
    },
    {
        name: "Maria",
        quote: "Mohammad's personlige tilgang har fuldstændig forandret min måde at tænke træning på.",
        stars: 5,
        image: "images/transformation.png"
    },
    {
        name: "Lars",
        quote: "Utroligt professionel træner der virkelig forstår at motivere og guide.",
        stars: 4,
        image: "images/transformation.png"
    }
];

// Current review index
let currentReviewIndex = 0;

// Function to update review content
function updateReview() {
    const currentReview = reviews[currentReviewIndex];
    
    // Update desktop version
    const desktopQuote = document.querySelector('.sektion-anmeldelser .anmeldelser-citat');
    const desktopName = document.querySelector('.sektion-anmeldelser .anmeldelser-tekst p:last-child');
    const desktopImage = document.querySelector('.sektion-anmeldelser .anmeldelser-billede');
    const desktopStars = document.querySelector('.sektion-anmeldelser .anmeldelser-stjerner');

    // Update mobile version
    const mobileQuote = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-citat-mobil');
    const mobileName = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-tekst-mobil p:last-child');
    const mobileImage = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-billede-mobil');
    const mobileStars = document.querySelector('.sektion-anmeldelser-mobil .anmeldelser-stjerner');

    // Update quote
    if (desktopQuote) desktopQuote.textContent = `"${currentReview.quote}"`;
    if (mobileQuote) mobileQuote.textContent = `"${currentReview.quote}"`;

    // Update name
    if (desktopName) desktopName.textContent = `Navn / ${currentReview.name}`;
    if (mobileName) mobileName.textContent = `Navn / ${currentReview.name}`;

    // Update image
    if (desktopImage) desktopImage.src = currentReview.image;
    if (mobileImage) mobileImage.src = currentReview.image;

    // Update stars
    function createStarIcons(stars) {
        let starHtml = '';
        for (let i = 0; i < 5; i++) {
            starHtml += `<img src="ikoner/${i < stars ? 'udfyldtstjerne' : 'tomstjerne'}.svg" alt="Stjerne">`;
        }
        return starHtml;
    }

    if (desktopStars) desktopStars.innerHTML = createStarIcons(currentReview.stars);
    if (mobileStars) mobileStars.innerHTML = createStarIcons(currentReview.stars);
}

// Function to cycle to next review
function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReview();
}

// Function to cycle to previous review
function previousReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
}

// Initialize the review on page load
document.addEventListener('DOMContentLoaded', () => {
    updateReview();

    // Optional: Add event listeners for navigation if you want to add navigation buttons
    const nextButton = document.querySelector('.next-review-button');
    const prevButton = document.querySelector('.prev-review-button');

    if (nextButton) nextButton.addEventListener('click', nextReview);
    if (prevButton) prevButton.addEventListener('click', previousReview);

    // Optional: Auto-rotate reviews every 5 seconds
    setInterval(nextReview, 5000);
});