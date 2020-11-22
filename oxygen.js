const correctOxygen = "10257";
const oxygenElements = document.getElementsByClassName("oxygenButtons");

const checkOxygen = function(){
	let oxygenCount = 0;
	const attribute = this.getAttribute("id");
	const panel = document.getElementById("oxygenDisplay");
	if(attribute == "oxygenConfirm"){
		if(panel.innerHTML == correctOxygen) {
			allTasks.oxygen = true;
			document.getElementById("oxygen").remove();
			document.getElementById("oxygenicon").remove();
			document.getElementById("map").style.display = "block";
			winCheck();
		}
		else {
			document.getElementById("oxygen").remove();
			death();
		}
	}
	else if(attribute == "oxygenDelete"){
		panel.innerHTML = panel.innerHTML.slice(0,panel.innerHTML.length-1);
	}
	else {
		if(panel.innerHTML.length <= 4) {
			panel.innerHTML += attribute.charAt(attribute.length-1);
		}
	}
}


for (let i = 0; i < oxygenElements.length; i++) {
    oxygenElements[i].addEventListener('click', checkOxygen, false);
}