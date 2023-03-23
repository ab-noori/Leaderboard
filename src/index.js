import './styles/main.scss';
import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayScores);

document.querySelector('#add-form').addEventListener('submit', (e) => {
  // prevent default submit
  e.preventDefault();

  UI.getNewScore();
});
