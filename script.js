// variables
const DEFAULT_SIZE_GRID = 16;
const DEFAULT_COLOR_BACK = `white`;
const DEFAULT_COLOR = `black`;
let CURRENT_SIZE_GRID = 16;
let CURRENT_COLOR_MODE = 'normal';

// selectors
const grid = document.getElementById("grid");
const sizeSlider = document.getElementById("sizeSlider");
const sizeStatus = document.getElementById("sizeStatus");
const clear = document.getElementById("clear");
const rainbow = document.getElementById("rainbow");

// interaction
sizeSlider.onmousemove = (e) => {updateSizeStatus(e.target.value)};
sizeSlider.onchange = (e) => {updateSizeGrid(e.target.value)};
clear.onclick = (e) => {clearGrid(e)}; 
rainbow.onclick = (e) => {setmode('rainbow')};

//mode
function setmode(newMode) {
  activateButton(newMode);
  changeMode(newMode);
}

function changeMode(newMode) {
  if (CURRENT_COLOR_MODE === 'rainbow') {
    CURRENT_COLOR_MODE = 'normal';
  } else if (CURRENT_COLOR_MODE === 'normal'){
    CURRENT_COLOR_MODE = newMode;
  }
}


//color
function changeColor(e) {
  if (CURRENT_COLOR_MODE === "normal") {
    e.target.style.backgroundColor = DEFAULT_COLOR;
  } else if (CURRENT_COLOR_MODE === "rainbow") {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;    
  }
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

function refreshGrid(){
  grid.innerHTML = ``;
  grid.style.backgroundColor = DEFAULT_COLOR_BACK;
};

function updateSizeStatus(value) {
  sizeStatus.innerHTML = `Size Selection: ${value} x ${value}`;
};

function updateSizeGrid(value) {
  refreshGrid()
  updateSizeStatus(value)
  setupGrid(value)
};

function clearGrid(e) {
  refreshGrid();
  setupGrid(CURRENT_SIZE_GRID);
}

// button
function activateButton(newMode) {
  if (CURRENT_COLOR_MODE === 'normal') {
    rainbow.classList.add('active');
  } else if (CURRENT_COLOR_MODE === 'rainbow') {
    rainbow.classList.remove('active');
  }
}

window.onload = function(){
    setupGrid(DEFAULT_SIZE_GRID);
};