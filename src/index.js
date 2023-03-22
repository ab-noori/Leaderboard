import generateJoke from './generateJoke.js';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');

laughImg.src = laughing;

generateJoke();

const jokeBtn = document.getElementById('jokBtn');
jokeBtn.addEventListener('click', generateJoke);