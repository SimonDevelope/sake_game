import './style/style.scss';
import './style/reset.scss';

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

  for (let i = 0; i < 20; i++) {
    field[i] = [];
    const tr = document.createElement('tr');
    const rows = innerBoard.appendChild(tr);
    tr.classList.add('tr');
    for (let j = 0; j < 20; j++) {
      field[i][j] = i + ',' + j;
      const td = document.createElement('td');
      td.classList.add('td');
      td.innerHTML = `${field[i][j]}`;
      rows.appendChild(td);
    }
  }

  // for (let rows = 0; rows < 10; rows++) {
  //   for (const el of field[rows]) {
  //     field.map(() => {
  //       return (innerBoard.innerHTML = `<div value=${el} class='el'><div>`);
  //     });
  //   }
  // }

  return bgBoard;
};

document.body.appendChild(component());
