function createSlider(id, min, max, step, value, callback) {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = `${id}: ${value}`;
    label.style.display = 'inline-block';
    label.style.width = '150px'; // Ancho fijo para el label
    label.style.textAlign = 'left'; // Alinear el texto si es necesario
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = id;
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = value;

    // Actualizamos el valor mostrado al mover el slider
    slider.addEventListener('input', (event) => {
        label.textContent = `${id}: ${event.target.value}`;
        if (callback) callback(event.target.value);
    });

    sliderContainer.appendChild(label);
    sliderContainer.appendChild(slider);

    return sliderContainer;
}

export { createSlider };
