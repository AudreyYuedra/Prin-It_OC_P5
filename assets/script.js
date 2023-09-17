/*** Liste des slides du carrousel ***/
/*const slides = [
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
];*/

const imageSlide = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"]
const tagSlide = [
	"Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"
]


/*** Récupération id des élèments du fichier html ***/
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const dotSlide = document.getElementById("dotSlide");	// conteneur bullets points
let images = document.getElementsByClassName("banner-img");
let tag = document.getElementsByClassName("banner p");

/*** Variables ***/
//let i = 0;
let currentImg = imageSlide[0];
let currentTagLine = tagSlide[0];

/*** Ajouter les bullet points au carrousel ***/
function addDots (index) {
	console.log("add new dot", index);

	let newDot = document.createElement("div");			// créer un nouvel élèment "div" pour dot
	dotSlide.appendChild(newDot);						// placer "div" dans élèment "dotSlide"
	newDot.classList.add("dot");						// ajouter sélecteur css ".dot" à "div"

	if (index === currentImg) {							// SI slide affichée sur le site
		newDot.classList.add("dot_selected");			// ajouter class ".dot_selected" à "div"
	} else {											// SINON 
		newDot.classList.remove("dot_selected");		// enlever class ".dot_selected" à "div"
	}
}

for (let i = 0; i < imageSlide.length; i++) {			// répétition création "div" selon nb slides
	addDots(i);
}

/*** Comportement du carrousel ***/
function showSlider () {		//POSE PROB MAIS JE SAIS PAS POURQUOI !!!!
	images = currentImg;
	tag.innerHTML = currentTagLine;
}

function nextImage() {									// avancer d'une image par click
	currentImg++;
	if (currentImg >= imageSlide.length) {
		currentImg = 0;
	}
	
	currentTagLine++;
	if (currentTagLine >= tagSlide.length) {
		currentTagLine = 0;
	}

	showSlider();
}

function previousImg() {								// reculer d'une image par click
	currentImg--;
	if (currentImg <= imageSlide.length) {
		currentImg = 3;
	}

	currentTagLine--;
	if (currentTagLine <= tagSlide.length) {
		currentTagLine = 3;
	}

	showSlider();
}

/*** Navigation du carrousel ***/						// évènement au click
// Flèche de droite
arrowRight.addEventListener("click", function() {
    nextImage(currentImg, currentTagLine);
	console.log("Vous avez cliqué sur la flèche droite.");
})
// Flèche de gauche
arrowLeft.addEventListener("click", function() {
    previousImg(currentImg, currentTagLine);
	console.log("Vous avez cliqué sur la flèche gauche.");
})
