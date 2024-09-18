const container = document.querySelector('.container');

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

grid();
