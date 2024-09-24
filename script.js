const container = document.querySelector('.container');
const btn = document.querySelector('.btn');


const grid = (size = 16) => {
    const containerSize = 256;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height  = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    }
};

const randomColor = () => {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';

};

const newGrid = () => {
  const input = prompt('Enter a number for the amount of squares on each side. Max: 100');
  const gridSize = Number(input);

  if(gridSize <= 100 && gridSize > 0) {
    container.innerHTML = '';
    grid(gridSize);
    }
    else {
        alert('Please Enter a number between 1 and 100');
    }
};

grid();
btn.addEventListener('click', newGrid);