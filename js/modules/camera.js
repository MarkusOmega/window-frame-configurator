import * as THREE from 'three';

export default class Camera {
    constructor(props) {
        this.$canvas = props.$canvas;
        this.$canvasContainer = props.$canvasContainer;
        this.$scene = props.$scene;

        this.setInstance();
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera( 75, this.$canvasContainer.offsetWidth / this.$canvasContainer.offsetHeight, 0.1, 10000 );
        this.instance.position.z = 1200;
        this.instance.position.x = 600;

        this.instance.lookAt( this.$scene.position );
    }
}