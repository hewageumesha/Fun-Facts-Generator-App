const facts = [
   "Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that is still edible!",
   "Bananas are berries, but strawberries are not.",
   "Octopuses have three hearts and blue blood.",
   "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
   "Wombat poop is cube-shaped.",
   "Sharks are older than trees. Sharks have existed for about 400 million years!",
   "A group of flamingos is called a 'flamboyance'.",
   "The Eiffel Tower can grow more than six inches in summer due to heat expansion.",
   "A single cloud can weigh more than a million pounds.",
   "There are more stars in the universe than grains of sand on Earth."
];

const factBox = document.getElementById("fact-box");
const btn = document.getElementById("generate-btn");

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factBox.textContent = facts[randomIndex];
}

btn.addEventListener("click", getRandomFact);

