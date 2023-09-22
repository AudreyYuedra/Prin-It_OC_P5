// *********** CONSTANTS **********

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
// Récupération id des élèments du fichier html
const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")
const dotSlide = document.getElementById("dotSlide")	// conteneur bullets points
const bannerImg = document.getElementsByClassName("banner-img")
const tagLine = document.getElementsByClassName("banner > p")


//********** VARIABLES **********

let counter = 0


// ********** FUNCTIONS **********

//*** Ajouter les bullet points au carrousel
function addDots(i) {
	console.log("add new dot", i)

	// créer un nouvel élèment "div" pour dot
	let dot = document.createElement("div")
	// placer "div" dans élèment "dotSlide"
	dotSlide.appendChild(dot)
	// ajouter sélecteur css ".dot" à "div"
	dot.classList.add("dot")

	// SI slide d'origine affichée sur le site
	if (i === 0) {
		// ajouter class ".dot_selected" à "div"
		dot.classList.add("dot_selected")

		console.log("dot " + counter + " affiché")
	} 	/*else {											// SINON 
		newDot.classList.remove("dot_selected");		// enlever class ".dot_selected" à "div"
	}*/
}

//*** Déplacer le slide à gauche
function dotPrevious (index) {
	//lien récupération dot
	dot[counter] = slides[counter]

	index --
	//nouveau dot ajout .dot_selected
	dot[counter --].classList.add("dot_selected")
	//.dot_selected annulé
	dot[counter].classList.remove("dot_selected")

	console.log("dot " + counter + " affiché")
}

function imgPrevious() {
	bannerImg.src = "./assets/images/slideshow/" + slides[counter].image

	slides.image --
	console.log("image " + slides[counter].image + " affiché")
}

function tagLinePrevious () {
	tagLine.innerHTML = slides[counter].tagLine

	slides.tagLine --
	console.log("tagLine " + slides[counter].tagLine + " affiché")
}

function showPrevious() {
	counter --
	dotPrevious()
	imgPrevious()
	tagLinePrevious()

	counter --
	//défilement infini
	if (counter === -1) {
		counter = slides[3]
	}
}

//*** Déplacer le slide à droite
function dotNext (index) {
	//lien récupération dot
	dot[counter] = slides[counter]

	index ++
	//nouveau dot ajout .dot_selected
	dot[counter ++].classList.add("dot_selected")
	//.dot_selected annulé
	dot[counter].classList.remove("dot_selected")

	console.log("dot " + counter + " affiché")
}

function imgNext() {
	bannerImg.src = "./assets/images/slideshow/" + slides[counter].image

	slides.image ++
	console.log("image " + slides[counter].image + " affiché")
}

function tagLineNext () {
	tagLine.innerHTML = slides[counter].tagLine

	slides.tagLine ++
	console.log("tagLine " + slides[counter].tagLine + " affiché")
}

function showNext() {
	counter ++
	dotNext()
	imgNext()

	//défilement infini
	if (counter >= slides.length) {
		counter = 0
	}
}


// ********** MAIN **********

//*** Répétition création "div" selon le nombre de slides
for (let i = 0; i < slides.length; i++) {			
	addDots(i)
}

//***
const dot = document.querySelectorAll(".dot")


//*** Activer le mouvement du slide au click sur les flèches
arrowLeft.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche !")
	showPrevious()
});
arrowRight.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite !")
	showNext()
});