import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Camera from '/js/modules/camera.js';
import Mesh from '/js/modules/Mesh.js';

export default class app {
    constructor(props) {
        this.$canvas = props.$canvas;
        this.$canvasContainer = props.$canvasContainer;

        this.setConfig();
        this.setDebug();      
        this.setRenderer();
  
        this.setObjects()
  
        this.setCamera();

        this.setLights();

        this.animate();
    }

    setConfig() {
        this.config = {};
        this.config.debug = window.location.hash === '#debug';
    }

    setDebug() {
        if (this.config.debug) {
            this.debug = new GUI({ width: 300 });
        }
    }

    setRenderer() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xE8E8E8 );

        this.renderer = new THREE.WebGLRenderer({
            antialias:true,
            canvas: this.$canvas,
        });

        this.renderer.setSize(this.$canvasContainer.offsetWidth, this.$canvasContainer.offsetHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    setCamera() {
        this.camera = new Camera({
            $canvas: this.$canvas,
            $canvasContainer:  this.$canvasContainer,
            $scene: this.scene
        });

        this.renderer.render(this.scene, this.camera.instance);
    }

    setLights() {
        this.light = new THREE.AmbientLight( 0xffffff, 5); // soft white light
        this.scene.add( this.light );
    }

    setObjects() {
        this.horzBeamT =  new Mesh({
            $matColor : 0xA49E77,
            $meshWidth : 1000,
            $meshHeight : 40,
            $meshDepth : 40,
        });

        this.horzBeamB =  new Mesh({
            $matColor : 0xA49E77,
            $meshWidth : 1000,
            $meshHeight : 40,
            $meshDepth : 40,
        });

        this.vertBeamL =  new Mesh({
            $matColor :  0x474430,
            $meshWidth : 40,
            $meshHeight : 1000,
            $meshDepth : 40,
        });

        this.vertBeamR =  new Mesh({
            $matColor :  0x474430,
            $meshWidth : 40,
            $meshHeight :1000,
            $meshDepth : 40,
        });

        this.scene.add( this.horzBeamT.mesh );
        this.scene.add( this.horzBeamB.mesh );
        this.scene.add( this.vertBeamL.mesh );
        this.scene.add( this.vertBeamR.mesh );

        this.horzBeamT.mesh.position.y = 500 - 20;
        this.horzBeamB.mesh.position.y = -500 + 20;

        this.vertBeamL.mesh.position.x = 500 + 20;
        this.vertBeamR.mesh.position.x = -500 - 20;
    }

    animate() {
        this.renderer.render( this.scene, this.camera.instance );
    }
}

