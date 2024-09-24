const container = document.querySelector('.container');
const btn = document.querySelector('.btn');


const grid = () => {
    
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
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

const newGrid = (num) => {
  const input = prompt('Enter a number for the amount of squares on each side. Max: 100');
  
  num =  Number(input * input);

  if(Number(input) <= 100) {
    container.innerHTML = '';

    for(let i  = 0; i < num; i++) {    
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    }
  }
};

grid();
btn.addEventListener('click', newGrid);