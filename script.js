const canvas = document.getElementById('canvas');
let randomColors = false;
let shade = false;
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
        canvas.appendChild(cell).className = 'cell';
    }

}
function colorCell(e) {
    // Note: target identifies only this unique cell, not them all. 
    // Set cell background color to black. 
    // e.target.style.backgroundColor = "black" also works
    if (randomColors) {
        // Provide a random RGB value.
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}`
    }
    else if (shade) {
        // We will edit a of RGBA(). 
        choseShade(e);
    } else {
        e.target.style['background-color'] = 'black';
    }
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
        // I should use RGBA for shade, but it's significantly more work.
        cells.style.opacity = "1.1";
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
    clearGrid();
});
document.getElementById("randomColors").addEventListener('click', e => {
    clearGrid();
    shade = false;
    randomColors ? randomColors = false : randomColors = true;
})
document.getElementById("shade").addEventListener('click', e => {
    clearGrid();
    randomColors = false;
    shade ? shade = false : shade = true;
})

function choseShade(e) {
    // Set color to black
    e.target.style.backgroundColor = "black";
    // grab current opacity
    let currOpacity = e.target.style.opacity;
    if (currOpacity > 1) {
        e.target.style.opacity = 0.2;
        return null;
    }
    else if (currOpacity < 1) {
        e.target.style.opacity = (parseFloat(currOpacity) + 0.2);
    }

}