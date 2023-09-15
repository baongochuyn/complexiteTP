const fs = require('fs');

const input = fs.readFileSync('adventofcode.com_2022_day_4_input.txt', 'utf-8'); 
const assignmentPairs = input.trim().split('\n');

function checkIsOverLapping(range1, range2) {
  const [start1, end1] = range1.split('-').map(Number);
  const [start2, end2] = range2.split('-').map(Number);
    
  isOverLapping = false;
    if((start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1)){
        isOverLapping = true;
    }
  return isOverLapping;
}
let count = 0;
for (const pair of assignmentPairs) {
  const [range1, range2] = pair.split(',').map(str => str.trim());
  if (checkIsOverLapping(range1, range2) || checkIsOverLapping(range2, range1)) {
    count++;
  }
}
console.log(count);
