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
const banner = document.getElementsByClassName("banner-img");
const tagLine = document.getElementsByClassName("banner > p");


//********** VARIABLES **********

let counter = 0;
let arrayLength = slides.length;

//let currentImg = slides[0].image;
//let currentTagLine = slides[0].tagLine;


// ********** FUNCTIONS **********

// Ajouter les bullet points au carrousel
function addDots(index) {
	console.log("add new dot", index);

	// créer un nouvel élèment "div" pour dot
	let newDot = document.createElement("div");
	// placer "div" dans élèment "dotSlide"
	dotSlide.appendChild(newDot);
	// ajouter sélecteur css ".dot" à "div"
	newDot.classList.add("dot");

	// SI slide affichée sur le site
	if (index === 0) {
		// ajouter class ".dot_selected" à "div"
		newDot.classList.add("dot_selected");
	} 
	
	
	/*else {											// SINON 
		newDot.classList.remove("dot_selected");		// enlever class ".dot_selected" à "div"
	}*/
}
// Déplacer le slide à gauche
function goPrevious() {
	counter --;
	//enlever la class "dot_selected" du dot d'origine
	dot[counter].classList.remove("dot_selected");

	if (counter === -1) {
		counter = arrayLength -1;
	}

	//lien dossier images avec numérotation du slide
	banner.src = "./assets/images/slideshow/" + slides[counter].image;
	//lien tableau tagLine avec numérotation du slide
	tagLine.innerHTML = slides[counter].tagLine;
	//ajouter class "dot-selected" au nouveau dot affiché
	dot[counter].classList.add("dot-selected");
}
// Déplacer le slide à droite
function goPrevious() {
	counter ++;
	//enlever la class "dot_selected" du dot d'origine
	dot[counter].classList.remove("dot_selected");

	if (counter === arrayLength) {
		counter = 0;
	}

	//lien dossier images avec numérotation du slide
	banner.src = "./assets/images/slideshow/" + slides[counter].image;
	//lien tableau tagLine avec numérotation du slide
	tagLine.innerHTML = slides[counter].tagLine;
	//ajouter class "dot-selected" au nouveau dot affiché
	dot[counter].classList.add("dot-selected");
}
//Activer le mouvement du slide au click sur les flèches
function moveSlide() {
	//liens paramètres slide d'origine
	banner.src = "./assets/images/slideshow/" + slides[0].image;
	tagLine.innerHTML = slides[0].tagLine;
	dot[0].classList.add("dot-selected");

	arrowLeft.addEventListener("click", goPrevious);
	arrowRight.addEventListener("click", goNext);
	console.log("Vous avez cliqué sur la flèche.")
}

/*function changeDots (index) {
	let index = addDots(index);						// récupérer l'index - 
	console.log("dot recuperation");			// console.log
	index++;									// ajouter index +1
	console.log("index dot +1");									// console.log
	getElementsByClassName("dot_selected");	// getclassname + 
	if (index++) {

	}					//appliquer la classe dot_selected
	//for () {}					// appliquer check entre 0 et 4

}*/

/*** Comportement du carrousel ***/
/*
function next() {	
								// avancer d'une image par click
	currentImg++;
	console.log()
	if (currentImg >= slides.length) {
		currentImg = 0;
	}
	
	currentTagLine++;
	if (currentTagLine >= slides.length) {
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
*/
/*** Navigation du carrousel ***/						// évènement au click
// Flèche de droite

// Flèche de gauche
/*arrowLeft.addEventListener("click", function() {
    previousImg(currentImg, currentTagLine);
	console.log("Vous avez cliqué sur la flèche gauche.");
})*/


// ********** OTHERS **********

// Répétition création "div" selon le nombre de slides
for (let i = 0; i < slides.length; i++) {			
	addDots(i);
}