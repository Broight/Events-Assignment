//? Defining constants
//document.body.style.transition = "all 1s ease 1s";
// 1. Select and define a constant for the button with an id of "toggleBtn"
const bttn = document.getElementById("toggleBtn");
// 2. Select and define a constant for the div with a class of "hero-image"
const imag = document.querySelector("div .hero-image");
// 3. Select and define a constant for the h1 with a class of "hero-h1"
const hh1 = document.querySelector(".hero-h1");
// 4. Select and define a constant for the checkbox input with a class of "enableToggleCheckbox"
const check = document.getElementById("enableToggleCheckbox");

//img.classList.remove(".hero-image")

var toggleImg = function() {
	imag.classList.toggle("hero-image");
	imag.style = "background-color: #40372C";
	
	if (hh1.innerHTML === "My Hero") {
		hh1.innerHTML = "Secret"
	} else {
		hh1.innerHTML = "My Hero"
	}
	
	console.log("Hey");
}

//? Toggle the background
// 5. Add an event listener with a type of click and an anonymous callback function to the toggle button
bttn.addEventListener("click", toggleImg);
// 6. Inside the callback function, toggle the style background between the image "boy.jpg" and "#40372C"
// 7. Inside the callback function, toggle the h1 text to say "My Hero" when the background image is shown, and "Secret" when the color is shown
// 8. (Bonus) Add the code to center the background image and prevent the background from repeating

var toggleTwo = function() {
	if (check.checked == true) {
		bttn.removeAttribute("disabled");
		console.log("Button Toggleable");
	} 
	
	if (check.checked == false) {
		bttn.setAttribute("disabled", true);
		console.log("Button Not Toggleable");
	}
	
}

//? Toggle the toggle button
// 9. Add another event listener with a type of change and an anonymous callback function to the checkbox input
check.addEventListener("click", toggleTwo);
// 10. If the checkbox is not checked, enable the disabled attribute on the toggle button
// 11. If the checkbox is checked, disable the disabled attribute on the toggle button
