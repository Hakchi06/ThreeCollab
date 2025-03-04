// Archivo scene.js - Configuración de la escena Three.js

import * as THREE from 'three';

// Variables para la escena, cámara y renderizador
let scene, camera, renderer;

// Función para inicializar la escena
function initScene() {
    // Crear la escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);

    // Crear la cámara
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 50, 100);

    // Crear el renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Agregar el canvas al contenedor
    const container = document.getElementById('canvas-container');
    container.appendChild(renderer.domElement);

    // Agregar luces
    addLights();

    // Manejar el redimensionamiento de la ventana
    window.addEventListener('resize', onWindowResize, false);
}

// Función para agregar luces a la escena
function addLights() {
    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
}

// Función para manejar el redimensionamiento de la ventana
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

export { scene, camera, renderer, initScene };