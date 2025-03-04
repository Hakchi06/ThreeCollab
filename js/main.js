// Archivo principal de la aplicación

import { initScene, scene, camera, renderer } from './scene.js';
import { initControls, updateControls } from './controls.js';
import {generateTerrain, updateTerrainHeight } from './terrain.js';
import { createSlider } from './components/slider.js';

// Variables para el bucle de animación
let animationId, heightMultiplier = 10;

// Función para iniciar la aplicación
function init() {

    // Crear el slider para la magnitud de la altura
    const heightSlider = createSlider('heightMultiplier', 0, 10, 0.1, heightMultiplier, (value) => {
        heightMultiplier = value;
        updateTerrainHeight(heightMultiplier);
    });

    // Agregar el slider a la interfaz de usuario
    document.body.appendChild(heightSlider);

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