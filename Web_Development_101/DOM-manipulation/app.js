// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const exercise = document.createElement('div');
exercise.classList.add('exercise');

const addRed = document.createElement('p');
addRed.textContent = 'Hey I’m red!';
addRed.style.color = 'red';

const addBlue = document.createElement('h3');
addBlue.textContent = 'I am a blue h3!';
addBlue.style.color = 'blue';

const exerciseTwo = document.createElement('div');
exerciseTwo.classList.add('exerciseTwo');
exerciseTwo.style = 'border: 3px solid black; background: teal';

const addh1 = document.createElement('h1');
addh1.textContent = 'I am in a div';

const addp = document.createElement('p');
addp.textContent = 'ME TOO!';

exercise.appendChild(addRed);
exercise.appendChild(addBlue);
exerciseTwo.appendChild(addh1);
exerciseTwo.appendChild(addp);
container.appendChild(content);
container.appendChild(exercise);
container.appendChild(exerciseTwo);
