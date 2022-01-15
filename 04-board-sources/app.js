const board = document.querySelector('#board');
const colors = ['#ffffd2','#fcbad3','#aa96da','#a8d8ea']
const SQUARE__COUNT = 500;

for (let i = 0; i < SQUARE__COUNT; i++) {
    const square = document.createElement("div");
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);

}

function setColor(element) {
    let color = getRandomColor(colors)
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(colors) {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
