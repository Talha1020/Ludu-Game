'use strict';
let totalScore = [0, 0];
let activePlayer = 0;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

btnRoll.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png `;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

btnHold.addEventListener('click', function () {
  let i = activePlayer;
  totalScore[i] += currentScore;
  let totalScoreGame = document.getElementById(`score--${activePlayer}`);
  totalScoreGame.textContent = totalScore[i];
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
});

btnNew.addEventListener('click', function () {
  currentScore = 0;

  totalScore = [0, 0];
  let totalScoreGame0 = document.getElementById(`score--0`);
  totalScoreGame0.textContent = totalScore[0];
  let totalScoreGame1 = document.getElementById(`score--1`);
  totalScoreGame1.textContent = totalScore[1];

  document.getElementById(`current--0`).textContent = currentScore;

  document.getElementById(`current--1`).textContent = currentScore;
  activePlayer = 0;
  dice.classList.add('hidden');
});
