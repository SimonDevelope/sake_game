import './style/reset.scss';
import './style/style.scss';

export interface element {
  [key: string]: string;
}

const componenet = () => {
  const bgBoard = document.createElement('div');
  const innerBoard = document.createElement('div');
  bgBoard.classList.add('total-view-port');
  innerBoard.classList.add('inner-view-port');
  bgBoard.appendChild(innerBoard);

  let field: element[] = [];

  const fieldDraw = () => {
    for (let i = 0; i <= 23; i++) {
      field[i] = {};
      const row = document.createElement('div');
      const rows = innerBoard.appendChild(row);
      rows.classList.add(`${i}`);
      rows.setAttribute('id', 'row');

      for (let j = 0; j <= 20; j++) {
        field[i][j] = i + ',' + j;
        const col = document.createElement('div');
        col.classList.add(field[i][j]);
        col.setAttribute('id', 'column');
        rows.appendChild(col);
      }
    }
  };
  fieldDraw();
  console.log(field);
  return bgBoard;
};

document.body.appendChild(componenet());
