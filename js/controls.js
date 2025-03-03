// Archivo controls.js - Controles e interacciones
import { OrbitControls } from 'OrbitControls';
import { camera, renderer } from './scene.js';

let controls;

// Función para inicializar los controles
function initControls() {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;
}

// Función para actualizar los controles en cada fotograma
function updateControls() {
    if (controls) {
        controls.update();
    }
}

export { initControls, updateControls };