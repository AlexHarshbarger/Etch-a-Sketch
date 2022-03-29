const container = document.querySelector('#container')
const height = document.getElementById('container').clientHeight;
const width = document.getElementById('container').clientWidth;
const reset = document.querySelector('#reset');
const grid = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const draw = document.querySelector('#draw');
let option = 0;

eraser.onclick = () => {
    return option = 1;
};

draw.onclick = () => {
    return option = 0;
}

function changeMode(e) {
    if (option == 0) {
        div = this; 
        div.style.backgroundColor = "black";
    } else {
        div = this;
        div.style.backgroundColor = "white";
    }
}

function buildGrid(size) {
    size = prompt("Enter number 10-100");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div")
            grid.style.height = height/size + "px";  //add - 2 if border radius is added to individual grids
            grid.style.width = width/size + "px";
            grid.classList.add('grid');
            grid.addEventListener('mouseover', changeMode)
            container.appendChild(grid);
        }
    }
    return grid;
}

reset.addEventListener('click', () => {
    window.location.reload();
});



clear.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('#container > div');
    gridItems.forEach((Item) => {
        Item.style.backgroundColor = 'white';
    })
    return option = 0;
})

eraser.addEventListener('click', () => {
    return option = 1;
})










buildGrid()