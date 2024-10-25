import * as THREE from 'three';
import App from '/window-frame-configurator/js/modules/App.js';

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

function changeObjectWidth(object, geometry, width) {
	geometry.dispose();

	object.geometry = new THREE.BoxGeometry(width, 40, 40)
}

function changeObjectHeight(object, geometry, height) {
	geometry.dispose();

	object.geometry = new THREE.BoxGeometry(40, height, 40);
}

const widthInput = document.querySelector("#frame-width");
widthInput.addEventListener("change", (event) => {
  console.log('width change');
  changeObjectPosX(window.App.vertBeamL, event.target.value, 'r')
  changeObjectPosX(window.App.vertBeamR, event.target.value, 'l')

  //changeObjectWidth(horzBeamT,horzBeamGeom,  event.target.value)
  //changeObjectWidth(horzBeamB,horzBeamGeom,  event.target.value)
});

const heightInput = document.querySelector("#frame-height");
heightInput.addEventListener("change", (event) => {
	console.log('height change');
	changeObjectPosY(window.App.horzBeamT, event.target.value, 't')
	changeObjectPosY(window.App.horzBeamB, event.target.value, 'b')

	//changeObjectHeight(vertBeamL,vertBeamGeom,  event.target.value)
	//changeObjectHeight(vertBeamR,vertBeamGeom,  event.target.value)
});
