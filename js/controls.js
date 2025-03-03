// Archivo controls.js - Controles e interacciones

let controls;

// Función para inicializar los controles
function initControls() {
    // Crear controles de órbita
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Añade inercia a los controles
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