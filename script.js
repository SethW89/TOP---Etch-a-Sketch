const canvas = document.getElementById('canvas');

// Make grid with dynamic size
function createGrid(rows, cols) {
    // Overwrite the CSS style to fit new grid
    canvas.style['grid-template-columns'] = `repeat(${rows}, 1fr)`;
    canvas.style['grid-template-rows'] = `repeat(${cols}, 1fr)`;
    // For each cell we need to create it and give it the appropriate initial style
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        canvas.appendChild(cell).className = 'cell';
    }

}
createGrid(16, 16);