import * as SimplexNoise from 'https://cdn.jsdelivr.net/npm/simplex-noise@2.4.0/simplex-noise.min.js';

const simplex = SimplexNoise();

function generateHeightMap(width, height, scale = 0.1) {
    let data = [];
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let value = simplex.noise2D(x * scale, y * scale);
            data.push(value);  // Guardamos el valor de la altura
        }
    }
    return data;
}

export { generateHeightMap };