// Archivo main.js - Código principal de la aplicación

import { initScene, scene, camera, renderer } from './scene.js';
import { initControls, updateControls } from './controls.js';
import {generateTerrain } from './terrain.js';

// Variables para el bucle de animación
let animationId;

// Función para iniciar la aplicación
function init() {
    // Inicializar la escena
    initScene();
    
    // Inicializar los controles
    initControls();

    // Generar el terreno
    generateTerrain();
    
    // Comenzar el bucle de animación
    animate();
}

// Función para animar la escena
function animate() {
    animationId = requestAnimationFrame(animate);
    updateControls();
    
    // Renderizar la escena
    renderer.render(scene, camera);
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);