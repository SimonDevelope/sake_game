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
  let canvW = 20;
  let canvH = 14;

  let canvX = (board.width - canvW) / 2;
  let canvY = (board.height - canvH) / 2;
  console.log(canvX);
  console.log(canvY);
  let rightBtn = false;
  let leftBtn = false;
  let upBtn = false;
  let downBtn = false;

  // 공 그리기 test
  const drawSnake = () => {
    canvAttr.beginPath();
    canvAttr.rect(canvX, canvY, canvW, canvH);
    canvAttr.fillStyle = '#ffffff';
    canvAttr.fill();
    canvAttr.closePath();
  };

  // 공 움직이기 test
  const keyDownHandler = (e) => {
    if (e.keyCode == 39) {
      rightBtn = true;
    }
    if (e.keyCode == 37) {
      leftBtn = true;
    }
    if (e.keyCode == 40) {
      downBtn = true;
    }
    if (e.keyCode == 38) {
      upBtn = true;
    }
  };
  const keyUpHandler = (e) => {
    if (e.keyCode == 39) {
      rightBtn = false;
    }
    if (e.keyCode == 37) {
      leftBtn = false;
    }
    if (e.keyCode == 40) {
      downBtn = false;
    }
    if (e.keyCode == 38) {
      upBtn = false;
    }
  };

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);

  const ballStatus = () => {
    canvAttr.clearRect(canvX, canvY, canvW, canvH);
    if (rightBtn) {
      canvX += 10;
    }
    if (leftBtn) {
      canvX -= 10;
    }
    if (downBtn) {
      canvY += 7;
    }
    if (upBtn) {
      canvY -= 7;
    }
    drawSnake();
  };

  setInterval(ballStatus, 10);

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
