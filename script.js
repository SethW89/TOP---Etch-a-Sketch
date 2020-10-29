const canvas = document.getElementById('canvas');

// Make grid with dynamic size
function createGrid(rows, cols) {
    // Overwrite the CSS style to fit new grid
    canvas.style['grid-template-columns'] = `repeat(${rows}, 1fr)`;
    canvas.style['grid-template-rows'] = `repeat(${cols}, 1fr)`;
    // For each cell we need to create it and give it the appropriate initial style
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        // Add an event listener to the cell. When the mouse is over it it should change color.
        cell.addEventListener("mouseenter", colorCell);
        cell.addEventListener("touchstart", colorCell);
        //cell.style['backgroundColor'] = 'white';
        canvas.appendChild(cell).className = 'cell';
    }

}
function colorCell(e) {
    console.log('ChangeCellCOlor!');
    // Note: target identifies only this unique cell, not them all. 
    e.target.style['background-color'] = 'black';
}
createGrid(16, 16);
