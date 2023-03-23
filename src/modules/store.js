// Store Class: Handle Storage

class Store {
    static getScores= () => {
      let scores;
      if (localStorage.getItem('scores') === null) {
        scores = [];
      } else {
        scores = JSON.parse(localStorage.getItem('scores'));
      }

      return scores;
    }

    static addScore = (score) => {
      const scores = Store.getScores();
      score.index = (scores.length) + 1;
      scores.push(score);
      localStorage.setItem('scores', JSON.stringify(scores));
    }
}

export default Store;