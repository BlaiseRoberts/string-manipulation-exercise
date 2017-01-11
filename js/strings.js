//Variables
var testString = document.getElementById("text");
var result = document.getElementById("result")
var magic = document.getElementById("magic")

//Event handlers
magic.addEventListener("click", check)
magic.addEventListener("click",reversal)
magic.addEventListener("click",alphabits)
magic.addEventListener("click",palindrome)


//Press Enter in text input "clicks" magic button
testString.onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = magic.click();
    }
}


//Functions
function getString() {
	testString = document.getElementById("text").value;
}

function check() {
	getString();
	var validInput = /[a-z ]/i
	for (var i = 0; i < testString.length; i++) {
		if (testString[i].match(validInput)) {
			continue;
		} else {
			alert("Please enter only letters, no numbers or puncuation.");
			window.location.reload();
			break;
		}
	}	
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


