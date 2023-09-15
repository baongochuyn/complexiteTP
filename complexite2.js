const fs = require('fs');

const person1Score = {
  'A': 1, // Rock
  'B': 2, // Paper
  'C': 3, // Scissors
};
const person2Score = {
  'X': 1, // Rock
  'Y': 2, // Paper
  'Z': 3, // Scissors
};

const input = fs.readFileSync('adventofcode.com_2022_day_2_input.txt', 'utf-8');
const lines = input.split('\n');

let total = 0; 
function calculateRoundScore(person1, person2) {
  const score1 = person1Score[person1];
  const score2 = person2Score[person2];
  
  if (score2 === score1) {
    return 3 + score2; // Draw
  } else if ((score2 + 1) % 3 === score1) {
    return 6 + score2; // Win
  } else {
    return score2; // Loss
  }
}

for (const line of lines) {
  const [person1, person2] = line.trim().split(' ');
  // Si il y a encore la réponse, il faut continuer à calculer
  if (person2) {
    const roundScore = calculateRoundScore(person1, person2);
    total += roundScore;
  }
}

console.log(`Your total score following the strategy guide is ${total}.`);
