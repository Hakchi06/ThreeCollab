// Archivo scene.js - Configuración de la escena Three.js

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164.0/build/three.module.js';

// Variables para la escena, cámara y renderizador
let scene, camera, renderer;

// Función para inicializar la escena
function initScene() {
    // Crear la escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Crear la cámara
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 5;

    // Crear el renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Agregar el canvas al contenedor
    const container = document.getElementById('canvas-container');
    container.appendChild(renderer.domElement);

    // Agregar luces
    addLights();
    
    // Agregar objetos a la escena
    addObjects();

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

// Función para agregar objetos a la escena
function addObjects() {
    // Crear geometrías básicas
    const geometry1 = new THREE.BoxGeometry(1, 1, 1);
    const geometry2 = new THREE.SphereGeometry(0.8, 32, 32);
    const geometry3 = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);

    // Crear materiales
    const material1 = new THREE.MeshStandardMaterial({ color: 0x3498db });
    const material2 = new THREE.MeshStandardMaterial({ color: 0xe74c3c });
    const material3 = new THREE.MeshStandardMaterial({ color: 0x2ecc71 });

    // Crear mallas
    const cube = new THREE.Mesh(geometry1, material1);
    cube.position.x = -2;
    scene.add(cube);

    const sphere = new THREE.Mesh(geometry2, material2);
    sphere.position.x = 0;
    scene.add(sphere);

    const torusKnot = new THREE.Mesh(geometry3, material3);
    torusKnot.position.x = 2;
    scene.add(torusKnot);

    // Agregar el cubo, la esfera y el torusKnot al objeto window para poder animarlos
    window.cube = cube;
    window.sphere = sphere;
    window.torusKnot = torusKnot;
}

// Función para manejar el redimensionamiento de la ventana
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}