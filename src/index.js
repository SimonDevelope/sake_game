import './style/reset.scss';
import './style/style.scss';


// for (let i = 1; i <= 100; i++) {
//   fieldArray.push(i);
// }
// console.log(fieldArray);

const component = () => {
  const bgBoard = document.createElement('div');
  const innerBoard = document.createElement('table');
  bgBoard.classList.add('total-view-port');
  innerBoard.classList.add('inner-view-port');
  bgBoard.appendChild(innerBoard);

  const field = [];
  const snake = [];

  const snakeInit = () => {
    snake.push(0);
    const snakeBody = document.createElement('td');
    snakeBody.setAttribute('id', 'snake');
    const test = document.getElementsByTagName('tr');
    const test2 = document.getElementById('2');
    const test3 = document.getElementsByClassName('3, 14');
    console.log(test3);
    test3.innerText = `${snake}`;
    console.log(test2);
    console.log(test);

    return snakeBody;
  };

  snakeInit();
  console.log(snake);

  const fieldDraw = () => {
    for (let i = 0; i < 20; i++) {
      field[i] = [];
      const tr = document.createElement('tr');
      const rows = innerBoard.appendChild(tr);
      // rows.setAttribute('class', `${i}`);
      rows.classList.add(`${i}`);
      rows.setAttribute('id', 'tr');

      for (let j = 0; j < 20; j++) {
        field[i][j] = i + ',' + j;
        const td = document.createElement('td');
        // td.setAttribute('class', `${field[i][j]}_td`);
        td.classList.add(`${field[i][j]}`);
        td.setAttribute('id', 'td');
        rows.appendChild(td);
      }
    }
  };

  fieldDraw();

  return bgBoard;
};

document.body.appendChild(component());
