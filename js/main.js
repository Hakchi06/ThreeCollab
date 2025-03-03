// Archivo main.js - Código principal de la aplicación

// Variables para el bucle de animación
let animationId;

// Función para iniciar la aplicación
function init() {
    // Inicializar la escena
    initScene();
    
    // Inicializar los controles
    initControls();
    
    // Comenzar el bucle de animación
    animate();
}

// Función para animar la escena
function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Rotar los objetos
    if (window.cube) {
        window.cube.rotation.x += 0.01;
        window.cube.rotation.y += 0.01;
    }
    
    if (window.sphere) {
        window.sphere.rotation.y += 0.01;
    }
    
    if (window.torusKnot) {
        window.torusKnot.rotation.x += 0.01;
        window.torusKnot.rotation.y += 0.01;
    }
    
    // Actualizar los controles
    updateControls();
    
    // Renderizar la escena
    renderer.render(scene, camera);
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);