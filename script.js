const container = document.querySelector('#container')
const height = document.getElementById('container').clientHeight;
const width = document.getElementById('container').clientWidth;
const reset = document.querySelector('#reset');
const grid = document.querySelector('.grid');

buildGrid(10)



function buildGrid(size) {
    size = prompt("Enter number 10-100");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div")
            grid.style.height = height/size - 2 + "px";
            grid.style.width = width/size - 2 + "px";
            grid.classList.add('grid');
            grid.addEventListener('mouseover', colorIn)
            container.appendChild(grid);
        }
    }
    return grid;
}

reset.addEventListener('click', () => {
    window.location.reload();
    // const gridItems = document.querySelectorAll('#container > div');
    // gridItems.forEach((Item) => {
    //     Item.style.backgroundColor = 'white';
    // })
});

function colorIn() {
    div = this;
    div.style.backgroundColor = "black";
}