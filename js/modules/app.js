import * as THREE from 'three';
import Camera from '/js/modules/camera.js';

export default class app {
    constructor(props) {
        this.$canvas = props.$canvas;
        this.$canvasContainer = props.$canvasContainer;

        this.setConfig();
        this.setDebug();

        this.setRenderer();

        this.addObjects();
        this.setCamera();
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
        this.scene.background = new THREE.Color( 0xffffff );


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

        this.renderer.render(this.scene, this.camera.camera);
    }

    addObjects() {
        const material = new THREE.MeshBasicMaterial( { color: 0xA49E77 } );
        const materialDark = new THREE.MeshBasicMaterial( { color: 0x474430 } );

        const horzBeamGeom = new THREE.BoxGeometry( 1000, 40, 40 );
        const vertBeamGeom = new THREE.BoxGeometry( 40, 1000, 40 );

        // OBJECTS
        this.horzBeamT = new THREE.Mesh( horzBeamGeom, material );
        this.horzBeamB = new THREE.Mesh( horzBeamGeom, material );

        this.vertBeamL = new THREE.Mesh( vertBeamGeom, materialDark );
        this.vertBeamR = new THREE.Mesh( vertBeamGeom, materialDark );

        // Shadows
        this.horzBeamT.receiveShadow = true;
        this.horzBeamB.receiveShadow = true;
        this.vertBeamL.receiveShadow = true;
        this.vertBeamR.receiveShadow = true;


        this.scene.add( this.horzBeamT );
        this.scene.add( this.horzBeamB );

        this.scene.add( this.vertBeamL );
        this.scene.add( this.vertBeamR );

        this.horzBeamT.position.y = 500 - 20;
        this.horzBeamB.position.y = -500 + 20;

        this.vertBeamL.position.x = 500 + 20;
        this.vertBeamR.position.x = -500 - 20;
    }
}

