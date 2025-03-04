// terrain.js
import * as THREE from 'three';
import { scene } from './scene.js';
import { generateHeightMap } from './utils.js';

let terrain, geometry, heightMultiplier = 10; //altura inicial del terreno

function generateTerrain() {
    const width = 100; // Ancho del terreno
    const height = 100; // Altura del terreno
    const segments = 100; // Número de segmentos (mayor número = más detalles)

    geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const material = new THREE.MeshStandardMaterial({ color: 0x88cc44, wireframe: false });
    terrain = new THREE.Mesh(geometry, material);

    //Orientacion del plano 
    terrain.rotation.x = -Math.PI / 2;

    scene.add(terrain);

    //Aplicacion de mapa de altura
    applyHeightMap(geometry, segments + 1, segments + 1);
}


function applyHeightMap(geometry, width, height) {
    let heightMap = generateHeightMap(width, height);

    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
        const x = (i / 3) % width;
        const y = Math.floor(i / 3 / width);

        // Modificamos la altura de los vértices usando el mapa de alturas
        positions[i + 2] = heightMap[y * width + x] * heightMultiplier;  // Ajustamos la magnitud de las alturas
    }

    geometry.attributes.position.needsUpdate = true;  // Indicamos que las posiciones de los vértices han cambiado
    geometry.computeVertexNormals();  // Recalculamos las normales para el sombreado adecuado
}

function updateTerrainHeight(heightMultiplier) {
    const segments = Math.sqrt(geometry.attributes.position.count) - 1;
    let heightMap = generateHeightMap(segments + 1, segments + 1);

    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
        const x = i % (segments + 1);
        const y = Math.floor(i / (segments + 1));
        position.setZ(i, heightMap[y * (segments + 1) + x] * heightMultiplier);
    }

    geometry.attributes.position.needsUpdate = true; // Indicar que los datos han cambiado
    geometry.computeVertexNormals(); // Recalcular las normales
}

export { generateTerrain, updateTerrainHeight };