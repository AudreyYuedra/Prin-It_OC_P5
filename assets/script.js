// Liste des slides du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération les id du carrousel
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let dotSlide = document.getElementById("dots")


// Changer le slide au click des flèches
arrowLeft.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche.")
})

arrowRight.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite.")
})

// Ajouter les bullet points au carrousel
function addDots (index) {
	console.log("add new dot", index)
	/* (premier instruction crer variable newdots qui créer 
		un élément div à l'intérieur de dotsSlide)*/
		/*bien utiliser appendChild puis createElement div*/
		/*faire un check condition index0 change attribut par .selected dans newDots*/
}

for (var i = 0; i< slides.length; i++) {
	addDots(i)
}

















// Lier les dots aux bons slides


// Ajouter une classe à dot quand le slide est affiché


/*arrowLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche gauche.")
})*/
