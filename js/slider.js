import { repairs } from "./data.js";
import { removeCurrentClass, removeAllCurrentClass} from "./helpers.js";

//*variables
	//constans DOM
	const arrowBack = document.getElementById('arrowBack');
	const arrowNext = document.getElementById('arrowNext');
	const arrowBackMobile = document.getElementById('arrowBackMobile');
	const arrowNextMobile = document.getElementById('arrowNextMobile');
	const repairTabs = document.getElementById('repairTabs');
	const repairImage = document.getElementById('repairImage');
	const repairDetails = document.querySelectorAll('.parameters__text');
	const repairSwitch = document.getElementById('repairSwitch');

	//variables of data array
	let index = 0;
	let paramCity = repairDetails[0];
	let paramSquare = repairDetails[1];
	let paramTime = repairDetails[2];
	let paramCost = repairDetails[3];

	//create DOM elements and nodes
		createElements()

	//constans from created elements
	const dots = document.querySelectorAll('.switch__dot');
	const tabsTitle = document.querySelectorAll('.tabs__name');

	//show all slide elements
		showDataSlide(index)

	//behaviour of buttons
		arrowNext.addEventListener('click', switchSlide)
		arrowBack.addEventListener('click', switchSlide)
		arrowBackMobile.addEventListener('click', switchSlide)
		arrowNextMobile.addEventListener('click', switchSlide)

//*functions
//create DOM elements and nodes
function createElements() {
	repairs.forEach((element, index) => {
		//create Title tabs
			let tab = document.createElement('h3');
			let tabTitle = document.createTextNode(element.titleTab);
				repairTabs.prepend(tab);
				tab.classList = 'title tabs__name';
				tab.id = `tabTitles${index}`;
				tab.append(tabTitle);
				repairTabs.insertBefore(tab, repairImage);

		//create dots navigation
			let dot = document.createElement('div');
				dot.classList = 'switch__dot';
				dot.id = `dot${index}`;
				repairSwitch.insertBefore(dot, arrowNext);

		//set event on created elements
				tab.onclick = (e) => {
					removeAllCurrentClass(tabsTitle, 'tabs__name_active')
					removeAllCurrentClass(dots, 'switch__dot_active')
					showDataSlide(index)
				};
				dot.onclick = (e) => {
					removeAllCurrentClass(dots, 'switch__dot_active')
					removeAllCurrentClass(tabsTitle, 'tabs__name_active')
					showDataSlide(index)
				};
		}
	)
}

//show slide data on page
function showDataSlide(index) {
	//show repair image
		let imageTemplate =
				`<img
					class="tabs__image-block_image"
					src=${repairs[index].srcImage}
					alt=${repairs[index].altImage}
					width="100%">`;
			repairImage.innerHTML = imageTemplate;

	//fill repair details
			paramCity.innerHTML = repairs[index].city;
			paramSquare.innerHTML = repairs[index].square;
			paramTime.innerHTML = repairs[index].time;
			paramCost.innerHTML = repairs[index].cost;

	// set active class
			dots[index].classList.add('switch__dot_active');
			tabsTitle[index].classList.add('tabs__name_active')
}

//switch slide with buttons
function switchSlide(e) {
	//remove class on button click
		removeCurrentClass(index,
							dots, 'switch__dot_active',
							tabsTitle, 'tabs__name_active');
	//behaviour Next buttons
		if (e.target == arrowNext || e.target == arrowNextMobile) {
			if (index === repairs.length - 1){
				index = 0;
			} else {
				index++;
			}
		}
	//behaviour Back buttons
		else if (e.target == arrowBack || e.target == arrowBackMobile) {
			if (index === 0) {
				index = repairs.length - 1;
			} else {
				index--;
			}
		}
	//show another slide
		showDataSlide(index);
}
