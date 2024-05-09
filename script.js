'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//set score 0 and hidden dice
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let totalScore0 = 0;
let totalScore1 = 0;

const changePlayer = function (){
  //set text current score jdi 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function(){
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. check if rolled 1: if true , switch to next player
  if(dice !== 1){
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
  else{
    // switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');

    changePlayer();
  }
});

btnHold.addEventListener('click', function () {
  // get the active player
  //add current to player score
   
  if(activePlayer === 0){
    totalScore0 += currentScore;
    score0.textContent = totalScore0;
    if(totalScore0 >= 100){
      player0El.classList.add('player--winner');
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }
    else{
      changePlayer();
    }
  }
  
  else if(activePlayer === 1){
    totalScore1 += currentScore;
    score1.textContent = totalScore1;
    if(totalScore1 >= 100){
      player1El.classList.add('player--winner');
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }
    else{
      changePlayer();
    }
  }
});

 btnNew.addEventListener('click', function(){
  score0.textContent = 0;
  score1.textContent = 0;
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  totalScore0 = 0;
  totalScore1 = 0;

  document.getElementById(`current--${activePlayer}`).textContent = 0;

  btnHold.disabled = false;
  btnRoll.disabled = false;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
 });





