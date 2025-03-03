// Archivo controls.js - Controles e interacciones

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164.0/build/three.module.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.164.0/examples/jsm/controls/OrbitControls.js';
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