const fs = require('fs');

const input = fs.readFileSync('adventofcode.com_2022_day_1_input.txt', 'utf-8');

const lines = input.split('\n');

let maxCalories = 0; 
let currentCalories = 0; 

for (const line of lines) {
  const trimmedLine = line.trim();

  if (trimmedLine.length > 0) {
    //Si la ligne n'est pas vide
    currentCalories += parseInt(trimmedLine);
  } else {
    // Si la ligne est vide
    if (currentCalories > maxCalories) {
      maxCalories = currentCalories;
    }
    currentCalories = 0;
  }
}
if (currentCalories > maxCalories) {
  maxCalories = currentCalories;
}

console.log(`The Elf carrying the most Calories is carrying a total of ${maxCalories} Calories.`);
