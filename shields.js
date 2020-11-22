const correctShields = ["shields1","shields2","shields4","shields5","shields7"];
const shieldsElements = document.getElementsByClassName("shieldsButtons");
let currentShields = [];

const checkShields = function() {
	const attribute = this.getAttribute("id");
	if(correctShields.includes(attribute)){
		if(!currentShields.includes(attribute)){
			currentShields.push(attribute);
			this.innerHTML += "&#10003";
		}
		if(currentShields.length == correctShields.length){
			allTasks.shields = true;
			document.getElementById("shields").remove();
			document.getElementById("shieldsicon").remove();
			document.getElementById("map").style.display = "block";
			winCheck();
		}
	}
	else{
		document.getElementById("shields").remove();
		death();
	}
};

for (let i = 0; i < shieldsElements.length; i++) {
    shieldsElements[i].addEventListener('click', checkShields, false);
}