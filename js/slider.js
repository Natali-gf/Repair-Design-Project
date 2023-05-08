import { repairs } from "./data.js";

const arrowBack = document.getElementById('arrowBack');
const arrowNext = document.getElementById('arrowNext');
const repairTabs = document.getElementById('repairTabs');
const repairImage = document.getElementById('repairImage');
const repairDetails = document.querySelectorAll('.parameters__text');

arrowNext.onclick = counterNextSlide;
arrowBack.onclick = counterPreviousSlide;
let index = 0;



repairs.forEach(element => {
	console.log(element.titleTab);
	let tabsTemplate =
		`<h3 class="title tabs__name">${element.titleTab}</h3>`
		repairTabs.innerHTML +=tabsTemplate;
})

function counterNextSlide() {
	if (index === repairs.length - 1) {
		index = -1;
	}
	index++;
	showSlide();
}

function counterPreviousSlide() {
	if (index === 0) {
		index = repairs.length;
	}
	index--;
	showSlide();
}

showSlide();
function showSlide() {
	let imageTemplate =
		`<img class="tabs__image-block_image" src=${repairs[index].srcImage} alt="">`;
		repairImage.innerHTML = imageTemplate;
		repairDetails[0].innerHTML = repairs[index].city;
		repairDetails[1].innerHTML = repairs[index].square;
		repairDetails[2].innerHTML = repairs[index].time;
		repairDetails[3].innerHTML = repairs[index].cost;
};