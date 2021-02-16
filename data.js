function charMain() {
	let button = document
		.getElementById("submit")
		.addEventListener("click", data);

	let name;
	let gender;
	let race;
	let rank;

	function data(e) {
		e.preventDefault();
		name = document.getElementById("name").value;
		console.log("Name: " + name);
		gender = document.getElementById("gender").value;
		console.log("Gender: " + gender);
		race = document.getElementById("race").value;
		console.log("Race: " + race);
		rank = document.getElementById("rank").value;
		console.log("Class: " + rank);
	}

	//Name

	let nameInput = document.getElementById("name");
	let nameDiv = document.querySelector(".name");

	nameInput.addEventListener("input", showName);

	function showName() {
		nameDiv.innerHTML = nameInput.value;
	}

	//gender

	let genderImage = document.querySelector("#gImg");

	function genderChange() {
		gender = document.getElementById("gender").value;
		genderImage.src = "./image/" + gender + ".png";
	}
	document.getElementById("gender").addEventListener("input", genderChange);

	//race

	let raceImage = document.querySelector("#rImg");

	function raceChange() {
		race = document.getElementById("race").value;
		raceImage.src = "./image/" + race + ".png";
	}
	document.getElementById("race").addEventListener("input", raceChange);

	//class

	let classImage = document.querySelector("#cImg");

	function classChange() {
		rank = document.getElementById("rank").value;
		classImage.src = "./image/" + rank + ".png";
	}
	document.getElementById("rank").addEventListener("input", classChange);
}

window.addEventListener("load", charMain);
