import * as THREE from 'three';

const canvascontainer = document.getElementById("canvas-container");
const canvReference = document.getElementById("frame-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, canvascontainer.offsetWidth / canvascontainer.offsetHeight, 0.1, 10000 );
camera.position.z = 1200;
camera.position.x = 600;

camera.lookAt( scene.position );

scene.background = new THREE.Color( 0xffffff );

const renderer = new THREE.WebGLRenderer({
    antialias:true,
    canvas: canvReference
});

renderer.setSize(canvascontainer.offsetWidth, canvascontainer.offsetHeight );
renderer.setAnimationLoop( animate );

// Materials
const material = new THREE.MeshBasicMaterial( { color: 0xA49E77 } );
const materialDark = new THREE.MeshBasicMaterial( { color: 0x474430 } );
//
const horzBeamGeom = new THREE.BoxGeometry( 1000, 40, 40 );
const vertBeamGeom = new THREE.BoxGeometry( 40, 1000, 40 );

// OBJECTS
const horzBeamT = new THREE.Mesh( horzBeamGeom, material );
const horzBeamB = new THREE.Mesh( horzBeamGeom, material );

const vertBeamL = new THREE.Mesh( vertBeamGeom, materialDark );
const vertBeamR = new THREE.Mesh( vertBeamGeom, materialDark );

// Shadows
horzBeamT.receiveShadow = true;
horzBeamB.receiveShadow = true;
vertBeamL.receiveShadow = true;
vertBeamR.receiveShadow = true;


scene.add( horzBeamT );
scene.add( horzBeamB );

scene.add( vertBeamL );
scene.add( vertBeamR );

horzBeamT.position.y = 500 - 20;
horzBeamB.position.y = -500 + 20;

vertBeamL.position.x = 500 + 20;
vertBeamR.position.x = -500 - 20;

function changeObjectPosX(object, width, leftRight) {
	object.position.x = (leftRight == 'r') ? +(width/2) +20 : -(width/2) -20;
}

function changeObjectPosY(object, height, topBot) {
	object.position.y = (topBot == 't') ? +(height/2) -20 : -(height/2) +20;
}


//const horzBeamGeom = new THREE.BoxGeometry( 1000, 40, 40 );
//const vertBeamGeom = new THREE.BoxGeometry( 40, 1000, 40 );
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
  changeObjectPosX(vertBeamL, event.target.value, 'r')
  changeObjectPosX(vertBeamR, event.target.value, 'l')

  changeObjectWidth(horzBeamT,horzBeamGeom,  event.target.value)
  changeObjectWidth(horzBeamB,horzBeamGeom,  event.target.value)
});

const heightInput = document.querySelector("#frame-height");
heightInput.addEventListener("change", (event) => {
	console.log('height change');
	changeObjectPosY(horzBeamT, event.target.value, 't')
	changeObjectPosY(horzBeamB, event.target.value, 'b')

	changeObjectHeight(vertBeamL,vertBeamGeom,  event.target.value)
	changeObjectHeight(vertBeamR,vertBeamGeom,  event.target.value)
});


function animate() {
	renderer.render( scene, camera );
}
