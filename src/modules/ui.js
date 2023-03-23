import Score from './score.js';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yAzAJFJQSZLJxVm1Hh1T/scores/';

class UI {
  static displayScores = async () => {
    const scores = await (await fetch(api)).json();
    scores.result.forEach((score) => UI.addScoreToList(score));
  }

  static getNewScore = () => {
    const user = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;
    // valitdate empty form
    if (user !== '' && score !== '') {
      // making object of Score class
      const newScore = new Score(user, score);

      // add Score to UI
      UI.addScoreToList(newScore);

      // Add data to API
      UI.postData(user, score);

      // clear fields
      UI.clearFields();
    }
  }

  static addScoreToList = (score) => {
    const list = document.querySelector('#score-list');
    const li = document.createElement('li');

    const span = document.createElement('span');

    span.innerHTML = `${score.user} : ${score.score}`;

    li.appendChild(span);
    list.appendChild(li);
  }

  static postData = async (user, score) => {
    const res = await fetch(api,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user, score }),
      });
    const data = await res.json();
    return data.result;
  }

  static clearFields = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }

  static refreshScores = async () => {
    window.location.reload();
  };
}

export default UI;