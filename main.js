const field = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const text = document.querySelector('h1');
const root = document.querySelector('.root');
const conteiner = document.querySelector('.conteiner');
let gameOver = false;

const up = document.querySelector('.up');
const right = document.querySelector('.right');
const bottom = document.querySelector('.bottom');
const left = document.querySelector('.left');

const curPos = { x: 0, y: 0 };

function render() {
  let cell = [];
  let str = '';
  for (const row of field) {
    // console.log(row);
    for (cell of row) {
      // console.log(cell);
      if (cell === 1) {
        str = `${str}<div class="visited"></div>`;
      } else if (cell === 2) {
        str = `${str}<div class="passed"></div>`;
      } else {
        str = `${str}<div></div>`;
      }
    }
  }

  /*
   for (cell; cell === 1; cell++) {
    str.style.background-color = 'red';
  }
*/

  /*
  if (cell === 0 && curPos.x > 0) {
    str = `${str}<div class = "passed"></div>`
  }
  */

  if (curPos.x === 4 && curPos.y === 0) {
    right.classList.add('visitedButt');
    up.classList.add('visitedButt');
  } else if (curPos.x === 0 && curPos.y === 0) {
    up.classList.add('visitedButt');
    left.classList.add('visitedButt');
  } else if (curPos.x === 0 && curPos.y === 4) {
    bottom.classList.add('visitedButt');
    left.classList.add('visitedButt');
  } else if (curPos.x === 4 && curPos.y === 4) {
    bottom.classList.add('visitedButt');
    right.classList.add('visitedButt');
  }
  conteiner.innerHTML = str;
}

function move(x, y) {
  if (
    (curPos.x === 4 && x === 1)
        || (curPos.x === 0 && x === -1)
        || (curPos.y === 4 && y === 1)
        || (curPos.y === 0 && y === -1)
        || gameOver
  ) {
    return;
  }

  field[curPos.y][curPos.x] = 2;
  curPos.x += x;
  curPos.y += y;
  const cellType = field[curPos.y][curPos.x];
  if (cellType === 2) {
    gameOver = true;
    root.style.border = '10px solid red';
    text.style.color = 'red';
    render();
  }
  field[curPos.y][curPos.x] = 1;

  up.classList.remove('visitedButt');
  right.classList.remove('visitedButt');
  bottom.classList.remove('visitedButt');
  left.classList.remove('visitedButt');

  render();
}

up.addEventListener('click', () => {
  move(0, -1);
});
right.addEventListener('click', () => {
  move(1, 0);
});
bottom.addEventListener('click', () => {
  move(0, 1);
});
left.addEventListener('click', () => {
  move(-1, 0);
});

render();
