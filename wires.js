const canvasEle = document.getElementById('canvas');
const context = canvasEle.getContext('2d');
let startPosition = {x: 0, y: 0};
let endPosition = {x: 0, y: 0};
let lineCoordinates = {x: 0, y: 0};
let isDrawStart = false;
const bgCanvas = document.getElementById('canvasbg');
const bgContext = bgCanvas.getContext('2d');
const wires = {wire1: false, wire2: false, wire3: false, wire4: false};
const wiresDone = function() {
	if (wires.wire1 && wires.wire2 && wires.wire3 && wires.wire4) {
		allTasks.wires = true;
		document.getElementById("wires").remove();
		document.getElementById("storageicon").remove();
		document.getElementById("map").style.display = "block";
		winCheck();
	}
}


const getClientOffset = (event) => {
	const {pageX, pageY} = event.touches ? event.touches[0] : event;
	const x = pageX - canvasEle.offsetLeft;
	const y = pageY - canvasEle.offsetTop;

	return {
		x,
		y
	} 
}

let lineColour;

const drawLine = () => {
	context.beginPath();
	context.lineWidth = 10;
	context.strokeStyle = lineColour;
	context.moveTo(startPosition.x, startPosition.y);
	context.lineTo(lineCoordinates.x, lineCoordinates.y);
	context.stroke();
}

const mouseDownListener = (event) => {
	startPosition = getClientOffset(event);
	isDrawStart = true;
}

const mouseMoveListener = (event) => {
	if(!isDrawStart) return;
	clearCanvas();
	lineCoordinates = getClientOffset(event);
	lineColour = "white";
	drawLine();
}

const mouseupListener = (event) => {
	endPosition = getClientOffset(event);
	isDrawStart = false;
	console.log(startPosition);
	console.log(endPosition);
	// Wire 1 check
	// Check mouse down location is within wire start
	if(startPosition.x > 240 && startPosition.x < 280 && startPosition.y > 80 && startPosition.y < 115) {
		// Remove the white line
		clearCanvas();
		// Check mouse up position is within wire end
		if(endPosition.x > 505 && endPosition.x < 565 && endPosition.y > 215 && endPosition.y < 250 && !wires.wire1) {
			// Draw a straight green line
			bgContext.beginPath();
			bgContext.lineWidth = 10;
			bgContext.strokeStyle = "lime";
			bgContext.moveTo(265, 97);
			bgContext.lineTo(520,233);
			bgContext.stroke();
			// Set wire1 to be done
			wires.wire1 = true;
			// Check if all wires are done
			wiresDone();
		}
	}
	// Wire 2 check
	else if(startPosition.x > 240 && startPosition.x < 280 && startPosition.y > 145 && startPosition.y < 185) {
		clearCanvas();
		if(endPosition.x > 505 && endPosition.x < 565 && endPosition.y > 80 && endPosition.y < 115 && !wires.wire2) {
			bgContext.beginPath();
			bgContext.lineWidth = 10;
			bgContext.strokeStyle = "lime";
			bgContext.moveTo(265, 165);
			bgContext.lineTo(520,97);
			bgContext.stroke();
			wires.wire2 = true;
			wiresDone();
		}
	}
	// Wire 3 check
	else if(startPosition.x > 240 && startPosition.x < 280 && startPosition.y > 215 && startPosition.y < 250) {
		clearCanvas();
		if(endPosition.x > 505 && endPosition.x < 565 && endPosition.y > 145 && endPosition.y < 185 && !wires.wire3) {
			bgContext.beginPath();
			bgContext.lineWidth = 10;
			bgContext.strokeStyle = "lime";
			bgContext.moveTo(265,233);
			bgContext.lineTo(520,165);
			bgContext.stroke();
			wires.wire3 = true;
			wiresDone();
		}
	}
	// Wire 4 check
	else if(startPosition.x > 240 && startPosition.x < 280 && startPosition.y > 280 && startPosition.y < 315) {
		clearCanvas();
		if(endPosition.x > 505 && endPosition.x < 565 && endPosition.y > 280 && endPosition.y < 315 && !wires.wire4) {
			bgContext.beginPath();
			bgContext.lineWidth = 10;
			bgContext.strokeStyle = "lime";
			bgContext.moveTo(265,299);
			bgContext.lineTo(520,299);
			bgContext.stroke();
			wires.wire4 = true;
			wiresDone();
		}
	}
	else {
		document.getElementById("wires").remove();
		death();
	}  
}

const clearCanvas = () => {
	context.clearRect(0, 0, canvasEle.width, canvasEle.height);
}

const hoverQuestions = (event) => {
	let coords = getClientOffset(event);
	if(coords.x > 240 && coords.x < 280 && coords.y > 80 && coords.y < 115) {

	}
}

canvasEle.addEventListener('mousedown', mouseDownListener);
canvasEle.addEventListener('mousemove', mouseMoveListener);
canvasEle.addEventListener('mousemove', hoverQuestions);
canvasEle.addEventListener('mouseup', mouseupListener);

canvasEle.addEventListener('touchstart', mouseDownListener);
canvasEle.addEventListener('touchmove', mouseMoveListener);
canvasEle.addEventListener('touchend', mouseupListener);