const nouveauTitre = document.createElement("h1");
nouveauTitre.innerHTML = "L'apprentissage du Javascript c'est difficile";

const elementAremplacer = document.querySelector("h1");

const parent = document.querySelector("body");

parent.replaceChild(nouveauTitre, elementARemplacer);

console.log(nouveauTitre);
