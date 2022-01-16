import './style/style.scss';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = 'hellow simon';
  element.classList.add('hellow');
  return element;
};

document.body.appendChild(component());
