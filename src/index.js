import './styles/main.scss';
import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayScores);

document.querySelector('#add-form').addEventListener('submit', (e) => {
  // prevent default submit
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  UI.getNewScore(name, score);
});

document.querySelector('#refresh').addEventListener('click', UI.refreshScores);