
/********************
 * CODING CHALLENDE 1
 */

var massMark = 2700; 
var massJohn = 1800;
var heightMark = 4;
var heightJohn = 4;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

var isMarkBmitHigher = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmitHigher);
