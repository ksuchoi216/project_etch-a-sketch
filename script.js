// variables
const DEFAULT_SIZE_GRID = 16;

// selectors
const grid = document.getElementById("grid")






// grid functions
function setupGrid(size){
    // console.log(grid);
    // grid.innerHTML = `This is ${size}`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement(`div`);
      gridElement.classList.add(`eachGrid`);
    //   gridElement.style.borderj='2px solid aqua';
    //   gridElement.innerHTML = '*';
      grid.appendChild(gridElement);
    }

};


window.onload = function(){
    setupGrid(DEFAULT_SIZE_GRID);
};