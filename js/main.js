import * as THREE from 'three';
import App from '/js/modules/App.js';

window.App = new App({
	$canvas: document.getElementById("frame-canvas"),
	$canvasContainer: document.getElementById("canvas-container"),

	$widthInput : document.querySelector("#frame-width"),
	$heightInput: document.querySelector("#frame-height"),
});

function changeObjectPosX(object, width, leftRight) {
	object.position.x = (leftRight == 'r') ? +(width/2) +20 : -(width/2) -20;
}

function changeObjectPosY(object, height, topBot) {
	object.position.y = (topBot == 't') ? +(height/2) -20 : -(height/2) +20;
}

function changeObjectWidth(object, width) {
	object.geometry.dispose();

	object.geometry = new THREE.BoxGeometry(width, 40, 40)
}

function changeObjectHeight(object, height) {
	object.geometry.dispose();

	object.geometry = new THREE.BoxGeometry(40, height, 40);
}

const formSubmitButton = document.querySelector("#form-submit-button");

formSubmitButton.addEventListener("click", (event) => {
	event.preventDefault()
	const widthInput = document.querySelector("#frame-width");
	const heightInput = document.querySelector("#frame-height");

	changeObjectPosX(window.App.vertBeamL.mesh, widthInput.value, 'r')
	changeObjectPosX(window.App.vertBeamR.mesh, widthInput.value, 'l')

	changeObjectWidth(window.App.horzBeamT.mesh,  widthInput.value)
	changeObjectWidth(window.App.horzBeamB.mesh,  widthInput.value)

	changeObjectPosY(window.App.horzBeamT.mesh, heightInput.value, 't')
	changeObjectPosY(window.App.horzBeamB.mesh, heightInput.value, 'b')

	changeObjectHeight(window.App.vertBeamL.mesh, heightInput.value)
	changeObjectHeight(window.App.vertBeamR.mesh, heightInput.value)

	window.App.animate();
});