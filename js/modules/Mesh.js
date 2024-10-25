import * as THREE from 'three';

export default class Mesh {
    constructor(props) {
        this.$scene = props.$scene;

        this.$matColor = props.$matColor;
        this.meshWidth = props.$meshWidth;
        this.meshHeight = props.$meshHeight;
        this.meshDepth = props.$meshDepth;

        this.material = this.setMaterial(this.$matColor);
        this.geometry = this.setGeometry(this.meshWidth, this.meshHeight, this.meshDepth);

        this.setMesh()
    }

    setMaterial($color) {
       return new THREE.MeshBasicMaterial( { color: $color } );
    }

    setGeometry($width, $height, $depth) {
        return new THREE.BoxGeometry( $width, $height, $depth );
    }

    setMesh() {
        this.mesh = new THREE.Mesh( this.geometry, this.material );
    }

    setShadow() {
        this.mesh.receiveShadow = true;
    }
}