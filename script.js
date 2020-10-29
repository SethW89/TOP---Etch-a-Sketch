const canvas = document.getElementById('canvas');
let randomColors = false;
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
    // Note: target identifies only this unique cell, not them all. 
    // Set cell background color to black. 
    // e.target.style.backgroundColor = "black" also works
    if (randomColors) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}`
        return null;
    }
    e.target.style['background-color'] = 'black';
}
createGrid(16, 16);

function clearGrid() {
    // Get array of cells
    let cells = document.getElementsByClassName('cell');
    cells = Array.from(cells);
    // set each cell to white
    cells.forEach((cells) => {
        // could use 
        // cells.style['background-color'] = 'white';
        cells.style.backgroundColor = "white";
    })
}

// Create function to clear using the arrow syntax
document.getElementById("clearGrid").addEventListener('click', (e) => {
    clearGrid();
});
document.getElementById("choseGridSize").addEventListener('click', (e) => {
    let size = prompt("Select a grid size. Must be no greater than 100.", "16")
    if (size > 100) {
        return null;
    }
    createGrid(size, size);
});
document.getElementById("randomColors").addEventListener('click', e => {
    randomColors = true;
})
