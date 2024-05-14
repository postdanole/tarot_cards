const tarotDeck = [
    { name: "Der Narr", imgName: "Der_Narr.jpg", meaning: "Unbeschwertheit, Freiheit, Spontaneität" },
    { name: "Der Magier", imgName: "Der_Magier.jpg", meaning: "Kreativität, Willenskraft, Manifestation" },
    { name: "Die Hohepriesterin", imgName: "Die_Hohepriesterin.jpg", meaning: "Intuition, Geheimnisse, Passivität" },
    { name: "Die Herrscherin", imgName: "Die_Herrscherin.jpg", meaning: "Weiblichkeit, Fülle, Empfänglichkeit" },
    { name: "Der Herrscher", imgName: "Der_Herrscher.jpg", meaning: "Autorität, Struktur, Kontrolle" },
    { name: "Der Hierophant", imgName: "Der_Hierophant.jpg", meaning: "Tradition, Glauben, Konventionen" },
    { name: "Die Liebenden", imgName: "Die_Liebenden.jpg", meaning: "Liebe, Beziehungen, Entscheidungen" },
    { name: "Der Wagen", imgName: "Der_Wagen.jpg", meaning: "Entschlossenheit, Fortschritt, Kontrolle" },
    { name: "Die Gerechtigkeit", imgName: "Die_Gerechtigkeit.jpg", meaning: "Gerechtigkeit, Ausgleich, Gesetz" },
    { name: "Der Eremit", imgName: "Der_Eremit.jpg", meaning: "Einsamkeit, Introspektion, Weisheit" },
    { name: "Das Rad des Schicksals", imgName: "Das_Rad_Des_Schicksals.jpg", meaning: "Schicksal, Zyklen, Glück" },
    { name: "Die Kraft", imgName: "Die_Kraft.jpg", meaning: "Stärke, Mut, Selbstkontrolle" },
    { name: "Der Gehängte", imgName: "Der_Gehaengte.jpg", meaning: "Loslassen, Opfer, Perspektivenwechsel" },
    { name: "Der Tod", imgName: "Der_Tod.jpg", meaning: "Transformation, Ende, Neuanfang" },
    { name: "Die Mäßigkeit", imgName: "Die_Maessigkeit.jpg", meaning: "Ausgeglichenheit, Anpassung, Harmonie" },
    { name: "Der Teufel", imgName: "Der_Teufel.jpg", meaning: "Versuchung, Materialismus, Illusion" },
    { name: "Der Turm", imgName: "Der_Turm.jpg", meaning: "Krise, Zerstörung, Befreiung" },
    { name: "Der Stern", imgName: "Der_Stern.jpg", meaning: "Hoffnung, Inspiration, Spiritualität" },
    { name: "Der Mond", imgName: "Der_Mond.jpg", meaning: "Illusionen, Ängste, Unbewusstes" },
    { name: "Die Sonne", imgName: "Die_Sonne.jpg", meaning: "Freude, Erfolg, Vitalität" },
    { name: "Das Gericht", imgName: "Das_Gericht.jpg", meaning: "Urteil, Auferstehung, Rechtfertigung" },
    { name: "Die Welt", imgName: "Die_Welt.jpg", meaning: "Fülle, Vollendung, Erfüllung" }
];

const deckContainer = document.getElementById('deck');
const drawCardsBtn = document.getElementById('drawCardsBtn');
let drawnCards = 0;

drawCardsBtn.addEventListener('click', () => {
    if (drawnCards < 4) {
        drawnCards++;
        drawCard();
    } else {
        const confirmed = confirm("Du hast bereits vier Karten gezogen! Möchtest du erneut ziehen?");
        if (confirmed) {
            drawnCards = 0;
            deckContainer.innerHTML = ''; 
        }
    }
});

function drawCard() {
    if (tarotDeck.length === 0) {
        alert("Du hast bereits alle Karten gezogen!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck.splice(randomIndex, 1)[0];

    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'fade-in');

    const cardNameElement = document.createElement('div');
    cardNameElement.classList.add('card-name');
    cardNameElement.textContent = card.name;

    const cardImage = document.createElement('img');
    cardImage.src = `cards_img/${card.imgName}`;
    cardImage.alt = card.name;

    const meaningElement = document.createElement('div');
    meaningElement.classList.add('card-meaning');
    meaningElement.textContent = card.meaning;

    cardElement.appendChild(cardNameElement);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(meaningElement);

    deckContainer.appendChild(cardElement);
}
