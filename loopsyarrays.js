//Sum of Resistors in Series
 
//Calculate the sum of all resistors connected in series.
//Examples:
//- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
//- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
//- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

//Note: This approach uses the absolute value of each resistance to ensure all values are positive.
function sumResistance(resistances) {
    let totalResistance = 0;
    for (let resistance of resistances) {
      totalResistance += Math.abs(resistance);
    }
    return `${totalResistance} ohms`;
  }
  
  console.log(sumResistance([-1, 5, 6, 3]));
  console.log(sumResistance([14, 3.5, 6])); 
  console.log(sumResistance([8, 15, 100])); 
  console.log(sumResistance([19, 35, 45])); 
  console.log(sumResistance([199, 3, 85])); 

//Number divided into halves
 
//Given a number, return the number divided into its halves in an array.
 
//Examples:
//- `numDiv(4)` should return `[2, 2]`.
//- `numDiv(10)` should return `[5, 5]`.
 
function numDiv(number) {
  let half = number / 2;
  return [half, half];
}

console.log(numDiv(4));
console.log(numDiv(10)); 
console.log(numDiv(55));
console.log(numDiv(43));
console.log(numDiv(33));

//Secret Society

//Find the name of a secret society based on the first letter of each member's name.
 
//Examples:
//- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
//- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
//- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 
function secretName(names) {
  let initials = '';
  for (let name of names) {
    initials += name.charAt(0);
  }
  return initials;
}

// Ejemplos:
console.log(secretName(['Esperanza', 'Franco', 'Nia'])); 
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); 
console.log(secretName(['Harry', 'Ron', 'Hermione']));
console.log(secretName(['Rafael', 'Marco', 'Hortencia','Ricardo','Fabiola']));



//Online status
 
//Display online status for a list of users.

//Example:
//- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
function onlineStatus(users) {
  if (users.length === 0) return "no users online";
  if (users.length === 1) return `${users[0]} online`;
  if (users.length === 2) return `${users[0]} and ${users[1]} online`;
  
  return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}

// Ejemplo:
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['Dragonboy00', 'Noia098', 'KalzIfEx','RanDYorToN','mIKERLangelo222']));



//Array of Multiples
 
//Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
/*Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

function arrayMultiplos(number, length) {
  let multiples = [];
  for (let i = 1; i <= length; i++) {
    multiples.push(number * i);
  }
  return multiples;
}

console.log(arrayMultiplos(2, 10)); 
console.log(arrayMultiplos(17, 6)); 
console.log(arrayMultiplos(9, 14)); 
console.log(arrayMultiplos(80, 6)); 


//Positive dominance in Array
 
//Write a function to determine if an array is positively dominant.
//An array is positively dominant when the majority of its elements are positive.
 
//Example:
//- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 
function positiveDom(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  for (let num of arr) {
    if (num > 0) positiveCount++;
    if (num < 0) negativeCount++;
  }
  return positiveCount > negativeCount;
}

console.log(positiveDom([-1, -3, -5, 4, 6767])); 
console.log(positiveDom([9, 80, -9, 9, 9967]));
console.log(positiveDom([9, 50, -9, -9, 1967]));

//Antipodal Average
 
/* Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 */

//Example:
//- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.

function antipodalAverage(arr) {
  let mid = Math.floor(arr.length / 2);
  let result = [];
  for (let i = 0; i < mid; i++) {
    let sum = (arr[i] + arr[arr.length - 1 - i]) / 2;
    result.push(sum);
  }
  return result;
}

// Ejemplo:
console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));
console.log(antipodalAverage([18, 28, 93, 95, 122, 69, 78 ,78])); 
console.log(antipodalAverage([1, 20, 993, 495, 22, 869, 878 ,788 ,78])); 
