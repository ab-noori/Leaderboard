// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios.get('https://icanhazdadjoke.com/', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke;
  });
};

export default generateJoke;
