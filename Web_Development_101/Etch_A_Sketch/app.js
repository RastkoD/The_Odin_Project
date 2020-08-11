const main = document.querySelector('body');
const mainDiv = document.createElement('div');

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener('click', reset);

main.appendChild(resetButton);
main.appendChild(mainDiv);
main.style.backgroundColor = '#CCD6DD';
mainDiv.style.display = 'flex';
mainDiv.style.flexWrap = 'wrap';
mainDiv.style.height = '400px';
mainDiv.style.width = '400px';
mainDiv.style.margin = 'auto';

function makeGrid(n) {
  let divPercent = 100 / n;
  let gridPercent = `${divPercent}%`;
  for (let i = 0; i < n * n; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.style.height = gridPercent;
    gridDiv.style.width = gridPercent;
    gridDiv.style.boxSizing = 'border-box';
    gridDiv.style.backgroundColor = '#E1E8ED';
    gridDiv.style.border = '1px solid #CCD6DD';
    gridDiv.style.borderRadius = '6px';

    gridDiv.addEventListener(
      'mouseover',
      () => (gridDiv.style.backgroundColor = randomColor())
    );
    mainDiv.appendChild(gridDiv);
  }
}

function randomColor() {
  let randColor = '#';
  let hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    randColor += hexValue[Math.floor(Math.random() * 16)];
  }

  return randColor;
}

function reset() {
  divs = document.getElementsByName('div');
  for (let i = 0; i < divs.lenght; i++) {
    divs[i].style.backgroundColor = 'gray';
  }
  let squares = prompt('How many squares would you like?', '4');
  mainDiv.innerHTML = '';
  makeGrid(squares);
}

makeGrid(4);
