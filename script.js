const container = document.querySelector('#container')
const height = document.getElementById('container').clientHeight;
const width = document.getElementById('container').clientWidth;
const reset = document.querySelector('#reset');
const grid = document.querySelectorAll('.grid');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const draw = document.querySelector('#draw');
const random = document.querySelector('#random');
let option = 0;
let totalColored = 0;
draw.style.backgroundColor = "gray"

buildGrid(30)

eraser.onclick = () => {
    eraser.style.backgroundColor = "gray";
    draw.style.backgroundColor = "beige";
    random.style.backgroundColor = "beige";
    return option = 1;
};

draw.onclick = () => {
    draw.style.backgroundColor = "gray";
    random.style.backgroundColor = "beige";
    eraser.style.backgroundColor = "beige";
    return option = 0;
}

random.onclick = () => {
    draw.style.backgroundColor = "beige";
    eraser.style.backgroundColor = "beige";
    random.style.backgroundColor = "gray";
    return option = 2;
}

reset.onclick = () => {
    eraser.style.backgroundColor = "beige";
    draw.style.backgroundColor = "beige";
    random.style.backgroundColor = "beige";
    remake()
}

clear.onclick = () => {
    const gridItems = document.querySelectorAll('#container > div');
    gridItems.forEach((Item) => {
        Item.style.backgroundColor = 'white';
    random.style.backgroundColor = "beige";
    eraser.style.backgroundColor = "beige";
    draw.style.backgroundColor = "gray"
    })
    return option = 0;
}

function changeMode(e) {
    if (option == 0) {
        div = this; 
        div.style.backgroundColor = "black";
    } else if (option == 1) {
        div = this;
        div.style.backgroundColor = "white";
    } else if (option == 2) {
        div = this;
        div.style.backgroundColor = randomColor();
        totalColored += 1;
    }
}

function buildGrid(size) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const grid = document.createElement("div")
                grid.style.height = height/size + "px";
                grid.style.width = width/size + "px";
                grid.addEventListener('mouseover', changeMode)
                container.appendChild(grid);
                } 
            }
}

function remake() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    size = prompt("Enter number 10-100");
    buildGrid(size)
    draw.style.backgroundColor = "gray"
    return option = 0;
}

function randomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}