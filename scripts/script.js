let myHeading=document.querySelector('h1');
myHeading.textContent = 'Hello, world';
//myHeading=document.querySelector('h2');
var paragraph=document.querySelector('.prap');
paragraph.textContent = generateHeader('Viet Nam','Ho Chi Minh');
function generateHeader(firstPart, secondPart) {
	let result = firstPart + '---' + secondPart;
	return result;

}
let allSite = document.querySelector('img').onclick = function() {
	alert('Stop poking me');
}
function alertMe() {
	alert('onclick attribute');
}
