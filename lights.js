const correctLights = ["lights1","lights3","lights4"];
const lightsElements = document.getElementsByClassName("lightsQ");
let currentLights = [];

const checkLights = function() {
	const lightsCount = 0;
	const attribute = this.getAttribute("id");
	if(correctLights.includes(attribute)){
		if(!currentLights.includes(attribute)){
			currentLights.push(attribute);
			document.getElementById("lightsIndicator"+attribute.charAt(attribute.length-1)).style.display="block";
		}
		if(currentLights.length == correctLights.length){
			allTasks.lights = true;
			document.getElementById("lights").remove();
			document.getElementById("lightsicon").remove();
			document.getElementById("map").style.display = "block";
			winCheck();
		}
	}
	else{
		document.getElementById("lights").remove();
		death();
	}
};

for (let i = 0; i < lightsElements.length; i++) {
    lightsElements[i].addEventListener('click', checkLights, false);
}