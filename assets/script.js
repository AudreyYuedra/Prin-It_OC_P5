/*** Liste des slides du carrousel ***/
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

/*** Récupération id des élèments du fichier html ***/
const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")
const dotSlide = document.getElementById("dotSlide")	// conteneur bullets points
const images = document.getElementsByClassName("banner-img")

/*** Variables ***/
let currentImg = 0
let currentTagLine = 0

/*** Ajouter les bullet points au carrousel ***/
function addDots (index) {		// !!!! les bullets ne sont pas visibles sur le site (étape 3 non terminée) !!!!
	console.log("add new dot", index)

	let newDot = document.createElement("div")		// créer un nouvel élèment "div" pour dot
	dotSlide.appendChild(newDot)              		// placer "div" dans élèment "dotSlide"
	newDot.classList.add("dot")						// ajouter sélecteur css ".dot" à "div"

	if (index === currentImg) {                   	// SI slide affichée sur le site
		newDot.classList.add("dot_selected")  		// ajouter class ".dot_selected" à "div"
	} else {								   		// SINON 
		newDot.classList.remove("dot_selected")		// enlever class ".dot_selected" à "div"
	}
}

for (let i = 0; i < slides.length; i++) {			// répétition création "div" selon nb slides
	addDots(i)
}

/*** Comportement du carrousel ***/
function nextImage() {
	currentImg = currentImg + 1
	if (currentImg >= slides.length) {
		currentImg = 0
	}
	currentTagLine = currentTagLine + 1 
	if (currentTagLine >= slides.length) {
		currentTagLine = 0
	}
}

function previousImg() {
	slides[image] = currentImg - 1
	if (currentImg <= slides.length) {
		currentImg = 3
	}
	slides[tagLine] = currentTagLine - 1
	if (currentTagLine <= slides.length) {
		currentTagLine = 3
	}
}

/*** Navigation du carrousel ***/					// évènement au click
// Flèche de droite
arrowRight.addEventListener("click", function() {
    nextImage();
	console.log("Vous avez cliqué sur la flèche droite.")
})
// Flèche de gauche
arrowLeft.addEventListener("click", function() {
    previousImg();
	console.log("Vous avez cliqué sur la flèche gauche.")
})

