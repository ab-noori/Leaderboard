// UI Class: Handle UI Tasks
import Score from './score.js';
import Store from './store.js';

class UI {
  static displayScores = () => {
    const scores = Store.getScores();
    scores.forEach((score) => UI.addScoreToList(score));
  }

  static getNewScore= () => {
    const name = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;
    // valitdate empty form
    if (name !== '' && score !== '') {
      // making object of Score class
      const newScore = new Score(name, score);

      // add Score to UI
      UI.addScoreToList(newScore);

      // add score to store
      Store.addScore(newScore);

      // clear fields
      UI.clearFields();
    }
  }

  static addScoreToList = (score) => {
    const list = document.querySelector('#score-list');
    const li = document.createElement('li');

    const span = document.createElement('span');

    span.innerHTML = `${score.name} : ${score.score}`;

    li.appendChild(span);
    list.appendChild(li);
  }

  static clearFields = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

export default UI;