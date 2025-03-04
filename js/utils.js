import { createNoise2D } from 'simplex-noise';

function generateHeightMap(width, height, scale = 0.1) {
    let data = [];
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let value = createNoise2D(x * scale, y * scale);
            data.push(value);  // Guardamos el valor de la altura
        }
    }
    return data;
}

export { generateHeightMap };