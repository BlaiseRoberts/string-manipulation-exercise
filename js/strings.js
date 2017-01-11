//Variables
var testString = "";
var result = document.getElementById("result")
var magic = document.getElementById("magic")

//Event handlers
// magic.addEventListener("click", check)
magic.addEventListener("click",reversal)
magic.addEventListener("click",alphabits)
magic.addEventListener("click",palindrome)

//Functions
function getString() {
	testString = document.getElementById("text").value;
}



function reversal() {
	getString();
	result.innerHTML = testString.split("").reverse().join("");
}

function alphabits() {
	getString();
	testString = testString.toLowerCase();
	result.innerHTML = result.innerHTML+"<br>"+testString.split("").sort().join("");
}

function palindrome() {
	getString();
	testString = testString.toLowerCase().replace(/ /g, "");
	if (testString === testString.split("").reverse().join("")){
		result.innerHTML = result.innerHTML+"<br>"+"This is a palindrome!";
	} else {
		result.innerHTML = result.innerHTML+"<br>"+"This is NOT a palindrome!";
	}
}


