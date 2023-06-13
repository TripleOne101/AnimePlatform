
'use strict';

console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"),
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "35%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "35vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
							duration: 0.8,
							opacity: 0,
							pointerEvents: "none",
						})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();



// Card // 

let moviesArr = []
function movies(Id, Name, desc, category, type, image, backImage) {
	this.Id = Id;
	this.Name = Name;
	this.desc = desc;
	this.category = category
	this.type = type;
	this.image = image;
	this.backImage = backImage;
	moviesArr.push(this)

}


let amime1 = new movies(1, "MAGIC AND MUSCLES", "In this magical world, one is easily identified as having magical abilities by a distinctive mark on their face. Those unable to practice magic are swiftly", "ACTION, COMEDY, FANTASY", "anime", "./assets/duaCard1.png", "");
let amime2 = new movies(2, "HELL’S PARADDISE", "In this magical world, one is easily identified as having magical abilities by a distinctive mark on their face. Those unable to practice magic are swiftly", "ACTION, COMEDY, FANTASY", "anime", "./assets/duaCard2.png", "");
let amime3 = new movies(3, "ATTACK ON TITAN", "In this magical world, one is easily identified as having magical abilities by a distinctive mark on their face. Those unable to practice magic are swiftly", "ACTION, COMEDY, FANTASY", "anime", "./assets/duaCard3.png", "");
let amime4 = new movies(4, "maskman", "gggggggggggggggggggggggggggg", "drama", "anime", "./assets/6.png", "");
let amime5 = new movies(5, "naruto", "gggggggggggggggggggggggggggg", "drama", "anime", "./assets/charcter.png", "");
let amime6 = new movies(6, "naruto", "gggggggggggggggggggggggggggg", "drama", "anime", "./assets/charcter.png", "");


console.log("The Array drinsk added by user JS format => ", moviesArr);
// convert JS to JSON 
let jsonObjArray = JSON.stringify(moviesArr);
window.localStorage.setItem("movies", jsonObjArray);



// read the json Array From LS 
let jsonArray = window.localStorage.getItem("movies");
// convert the JSON to JS 
let objArray = JSON.parse(jsonArray);
console.log("Array after read From LS before the re-intantiation => ", objArray);

if (objArray == null) {
	console.log("The LS is Empty");
} else {
	// drinksArray = objArray;
	// console.log("Global Drinks Array => ", drinksArray);

	// Re-instantiation >> to get back the methods and prototype  

	for (let i = 0; i < objArray.length; i++) {
		let movie = new movies(objArray[i].Id, objArray[i].desc, objArray[i].category, objArray[i].type, objArray[i].image);

	}
	console.log("Global movies Array After the re-instantiation => ", moviesArr);

}





function openme(id) {
	var movieid = id;

	sessionStorage.setItem("movieid", movieid);

	window.open("details.html", "_self");
}

const FavIdArr = [];
function addToFav(id) {

	if (!(FavIdArr.includes(id))) {
		FavIdArr.push(id);
	}

	let local = localStorage.setItem("favId", JSON.stringify(FavIdArr));

}

function allData() {


	let jsonArray = window.localStorage.getItem("movies");
	// convert the JSON to JS 
	let objArray = JSON.parse(jsonArray);

	for (let i = 0; i < 3 ; i++) {


		var cardContainer = document.getElementById('cardContainer')
		// if(value.isComplete == 0){
		cardContainer.innerHTML += `
		<div class="card_down" onclick="openme(${objArray[i].Id})">
		<div class="card-image_down">
			<img src="${objArray[i].image}" alt="duaaHammo" width="345" height="345" />
		</div>
		<div class="category_down">${objArray[i].Name}</div>
		<div class="author_down">${objArray[i].category}</div>
		<div class="heading_down">${objArray[i].desc}
		</div>
	</div>

           `
		// }

	}


}
allData()