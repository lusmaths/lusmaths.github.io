const correctOrder = ["manifolds4","manifolds6","manifolds8","manifolds2","manifolds1","manifolds7","manifolds10","manifolds3","manifolds5","manifolds9"];
let manifoldsCounter = 0;
const manifoldsElements = document.getElementsByClassName("manifoldsButtons");

const checkManifolds = function() {
	const attribute = this.getAttribute("id");
	if(correctOrder[manifoldsCounter] == attribute){
		manifoldsCounter++;
		this.style.background = "lime";
		this.innerHTML = manifoldsCounter;
		if(manifoldsCounter==10){
			allTasks.manifolds = true;
			document.getElementById("manifolds").remove();
			document.getElementById("reactoricon").remove();
			document.getElementById("map").style.display = "block";
			winCheck();
		}
	}
	else{
		document.getElementById("manifolds").remove();
		death();
	}
};

for (let i = 0; i < manifoldsElements.length; i++) {
    manifoldsElements[i].addEventListener('click', checkManifolds, false);
}