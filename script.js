const container = document.querySelector('.container');

// creating 16x16 square divs
const grid = () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div =  document.createElement('div');

            // Set the div's class to "grid-item" for styling
            div.classList.add('grid-item');

            // Append the div to the container
            container.appendChild(div);
        }
        
    }
    const randomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    div.style.backgroundColor = randomColor();
}


grid();