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
];
// Récupération id des élèments du fichier html
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const dotSlide = document.getElementById("dotSlide");	// conteneur bullets points
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".banner p");


//********** VARIABLES **********

let counter = 0;


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

		console.log("dot " + i + " affiché")	//ici valeur index utilisé
	}
}

//*** Déplacer le slide à gauche
function dotPrevious (index) {
	//lien récupération dot
	const dots = document.querySelectorAll(".dot");	//const car plusieurs élèments

	//.dot_selected annulé
	dot[counter].classList.remove("dot_selected");
	counter--;
	if (counter < 0) {
		//on boucle sur le denrier élèment
		counter = slides.length -1;
	}
	//nouveau dot ajout .dot_selected
	dot[counter].classList.add("dot_selected");

	console.log("dot " + counter + " affiché");
}

function imgPrevious() {
	bannerImg.src = "./assets/images/slideshow/" + slides[counter].image;

	console.log("image " + slides[counter].image + " affiché");
}

function tagLinePrevious () {
	tagLine.innerHTML = slides[counter].tagLine;

	console.log("tagLine " + slides[counter].tagLine + " affiché");
}

function showPrevious() {
	dotPrevious()
	imgPrevious()
	tagLinePrevious()
}

//*** Déplacer le slide à droite
function dotNext (index) {
	//récupération élément dot
	const dots = document.querySelectorAll(".dot");
	
	dots[counter].classList.remove("dot_selected");
	counter++;
	if (counter >= slides.length) {
		//on boucle au premier élèment
		counter = 0;
	}

	//ajout calss
	dots[counter].classList.add("dot_selected");

	console.log("dot " + counter + " affiché");
}

function imgNext() {
	bannerImg.src = "./assets/images/slideshow/" + slides[counter].image;

	console.log("image " + slides[counter].image + " affiché");
}

function tagLineNext () {
	tagLine.innerHTML = slides[counter].tagLine;

	console.log("tagLine " + slides[counter].tagLine + " affiché");
}

function showNext() {
	dotNext();
	imgNext();
	tagLineNext();
}


// ********** MAIN **********

//*** Répétition création "div" selon le nombre de slides
for (let i = 0; i < slides.length; i++) {			
	addDots(i)
}

//*** Activer le mouvement du slide au click sur les flèches
arrowLeft.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche !")
	showPrevious()
});
arrowRight.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite !")
	showNext()
});