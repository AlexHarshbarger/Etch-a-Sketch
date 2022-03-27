const container = document.querySelector('#container')
const height = document.getElementById('container').clientHeight;
const width = document.getElementById('container').clientWidth;

buildGrid()

function buildGrid(size) {
    size = prompt("Enter number 10-100");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div')
            grid.style.height = height/size - 2 + "px";
            grid.style.width = width/size - 2 + "px";
            grid.classList.add('grid');
            container.appendChild(grid)
        }
    }
}
