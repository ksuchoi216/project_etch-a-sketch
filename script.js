// variables
const DEFAULT_SIZE_GRID = 16;
const DEFAULT_COLOR_BACK = `white`;
const DEFAULT_COLOR = `black`;
let CURRENT_SIZE_GRID = 16;

// selectors
const grid = document.getElementById("grid");
const sizeSlider = document.getElementById("sizeSlider");
const sizeStatus = document.getElementById("sizeStatus");
const clear = document.getElementById("clear");

// simple method
sizeSlider.onmousemove = (e) => {updateSizeStatus(e.target.value)};
sizeSlider.onchange = (e) => {updateSizeGrid(e.target.value)};
clear.onclick = (e) => {clearGrid(e)}; 

function clearGrid(e) {
  refreshGrid();
  setupGrid(CURRENT_SIZE_GRID);
}

function updateSizeStatus(value) {
  sizeStatus.innerHTML = `Size Selection: ${value} x ${value}`;
};

function updateSizeGrid(value) {
  refreshGrid()
  updateSizeStatus(value)
  setupGrid(value)
};

function refreshGrid(){
  grid.innerHTML = ``;
  grid.style.backgroundColor = DEFAULT_COLOR_BACK;
};

function changeColor(e) {
  e.target.style.backgroundColor = DEFAULT_COLOR;
};

// grid functions
function setupGrid(size){
    // console.log(grid);
    // grid.innerHTML = `This is ${size}`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.backgroundColor = DEFAULT_COLOR_BACK;
    CURRENT_SIZE_GRID = size;

    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement(`div`);
      gridElement.classList.add(`eachGrid`);
      gridElement.addEventListener('mouseover', changeColor);
      grid.appendChild(gridElement);
    }

};


window.onload = function(){
    setupGrid(DEFAULT_SIZE_GRID);
};