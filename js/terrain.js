// terrain.js
import * as THREE from 'three';
import { scene } from './scene.js';

function generateTerrain() {
    const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.MeshStandardMaterial({ color: 0x556B2F, wireframe: true });
    const terrain = new THREE.Mesh(geometry, material);

    scene.add(terrain);
}

export { generateTerrain };
