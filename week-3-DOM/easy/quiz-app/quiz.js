import { quizData } from './data.js';

const divel = document.createElement('div');
divel.innerHTML = quizData[0].question;
const buttonEl = document.createElement('button');
buttonEl.innerHTML = quizData[0].a;
const parEl = document.getElementById("questions");
parEl.appendChild(divel);
parEl.appendChild(buttonEl);