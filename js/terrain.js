// terrain.js
import * as THREE from 'three';
import { scene } from './scene.js';
import { generateHeightMap } from './utils.js';

function generateTerrain() {
    const width = 100; // Ancho del terreno
    const height = 100; // Altura del terreno
    const segments = 100; // Número de segmentos (mayor número = más detalles)

    const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const material = new THREE.MeshStandardMaterial({ color: 0x88cc44, wireframe: false });
    const terrain = new THREE.Mesh(geometry, material);

    //Aplicacion de mapa de altura
    applyHeightMap(geometry, segments + 1, segments + 1);

    //Orientacion del plano 
    terrain.rotation.x = -Math.PI / 2;

    scene.add(terrain);
}


function applyHeightMap(geometry, width, height) {
    let heightMap = generateHeightMap(width, height);

    geometry.vertices.forEach((vertex, i) => {
        let x = i % width;
        let y = Math.floor(i / width);

        // Modificamos la altura de los vértices usando el mapa de alturas
        vertex.z = heightMap[y * width + x] * 10;  // Ajustamos la magnitud de las alturas
    });

    geometry.computeVertexNormals();  // Recalculamos las normales para el sombreado adecuado
}

export { generateTerrain };
