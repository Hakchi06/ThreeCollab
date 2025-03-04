
function generateHeightMap(width, height, scale = 0.1) {
    let simplex = new SimplexNoise();  // Esto ahora debería funcionar
    let data = [];
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let value = simplex.noise2D(x * scale, y * scale);  // Usamos la función noise2D
            data.push(value);  // Guardamos el valor de la altura
        }
    }
    return data;
}

export { generateHeightMap };
