var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');

	if(mySrc === "img/amber-alert-race-2011-2015.png") {
		myImage.setAttribute ('src', "img/missing-person-category-chart.png");
	} else {
		myImage.setAttribute ('src', "img/amber-alert-race-2011-2015.png");
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'The Missing Minorities Network, ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'The Missing Minorities Network, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}