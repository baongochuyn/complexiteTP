const fs = require('fs');
const input = fs.readFileSync('adventofcode.com_2022_day_3_input.txt', 'utf-8'); 
const rucksacks = input.trim().split('\n');

//définir les valeurs de chaque carataire
function getItemPriority(item) {
  if (item >= 'a' && item <= 'z') {
    // de 1 à 26
    return item.charCodeAt(0) - 'a'.charCodeAt(0) + 1; 
  } else if (item >= 'A' && item <= 'Z') {
    // de 27 à 52
    return item.charCodeAt(0) - 'A'.charCodeAt(0) + 27; 
  }
  return 0;
}

let total = 0;
for (const rucksack of rucksacks) {
  const compartments = rucksack.trim().split('');
  
  //couper par 2
  const firstCompartment = new Set(compartments.slice(0, compartments.length / 2));
  const secondCompartment = new Set(compartments.slice(compartments.length / 2));
  
  // chercher des comman caractaires et leur calculer.
  for (const item of firstCompartment) {
    if (secondCompartment.has(item)) {
      const priority = getItemPriority(item);
      if (priority > 0) {
        total += priority;
      }
    }
  }
}

console.log(total);
