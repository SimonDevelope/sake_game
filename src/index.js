import './style/style.scss';
import './style/reset.scss';

const fieldArray = [];
// for (let i = 1; i <= 100; i++) {
//   fieldArray.push(i);
// }
// console.log(fieldArray);

const component = () => {
  const bgBoard = document.createElement('div');
  const innerBoard = document.createElement('div');
  const board = document.createElement('canvas');
  const canvAttr = board.getContext('2d');
  board.width = window.innerWidth;
  board.height = window.innerHeight;
  let canvX = 10;
  let canvY = 10;
  let canvW = 15;
  let canvH = 10;
  let rightBtn = false;
  let leftBtn = false;
  let upBtn = false;
  let downBtn = false;

  // 공 그리기 test
  const drawSnake = () => {
    canvAttr.rect(canvX, canvY, canvW, canvH);
    canvAttr.fillStyle = '#ffffff';
    canvAttr.fill();
  };

  // 공 움직이기 test
  const keyDownHandler = (e) => {
    if (e.keyCode == 39) {
      rightBtn = true;
      canvX += 15;
    }
    if (e.keyCode == 37) {
      leftBtn = true;
      canvX -= 15;
    }
    if (e.keyCode == 40) {
      downBtn = true;
      canvY += 10;
    }
    if (e.keyCode == 38) {
      upBtn = true;
      canvY -= 10;
    }
  };

  document.addEventListener('keydown', keyDownHandler, false);

  const ballStatus = () => {
    drawSnake();
  };

  setInterval(ballStatus, 1);

  console.log(board.width);
  console.log(board.height);
  bgBoard.classList.add('total-view-port');
  innerBoard.classList.add('inner-view-port');
  board.classList.add('board-attr');

  bgBoard.appendChild(innerBoard);
  innerBoard.appendChild(board);

  return bgBoard;
};

document.body.appendChild(component());
