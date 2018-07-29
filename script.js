/*
var firstName = 'Bryan';
console.log(firstName);

var lastName = 'Leano';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Customer Support Representative';
console.log(job);

// these are the variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if =23;
*/

/*
var firstName = 'Bryan';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty eight'; 
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName, lastName);
*/

/******************************
* Basic Operators
*/

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); 

// typeof Operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*********************
* Operator Precedence
*//*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6
console.log(x, y);

// Other Operators
x *= 2;
console.log(x); 
x += 10;
console.log(x);
x--;
console.log(x);
*/

/********************
 * CODING CHALLENDE 1
 */

 /*
var heightMark, heightJohn, massJohn, massMark;
heightMark = 72;
heightJohn = 68;
massJohn = 10000;
massMark = 13500;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var isMarkBmiHigher = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + isMarkBmiHigher);
*/

/***********************
 * If / else Statements
 */

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon');
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

// var isMarkBmiHigher = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's? " + isMarkBmiHigher);
*/

/***************************
 * Boolean Logic
 */

 /*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + 'is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/************************
 * The Tenerary Operator and Switch Statements
 */

/*
var firstName = 'John';
var age = 14;

// Terneray Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


if (age >= 18) {
  console.log(firstName + ' drinks beer.');
} else {
  console.log(firstName + ' drinks juice');
} 

// Switch Statement
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber in Lisbon');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break;
  default:
    console.log(firstName + ' does something else');
}

age = 40;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + 'is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
} 
*/

/*************************
 * Truthy and Falsy Value and Equality Operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: values not falsy
 
/*
var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality Operators

if (height === '23') {
  console.log('The == operator does type coercion!');
} */

/****************************
 * CODING CHALLENGE 2
 */

 /*
var teamJohnScore1 = 89;
var teamJohnScore2 = 120;
var teamJohnScore3 = 103;

var teamMarkScore1 = 116;
var teamMarkScore2 = 94;
var teamMarkScore3 = 123;

var teamJohnScoreAvg = (teamJohnScore1 + teamJohnScore2 + teamJohnScore3) / 3;
var teamMarkScoreAvg = (teamMarkScore1 + teamMarkScore2 + teamMarkScore3) / 3;

if (teamJohnScoreAvg > teamMarkScoreAvg) {
  console.log('John\'s team wins! ' + teamJohnScoreAvg);
} else if (teamJohnScoreAvg === teamMarkScoreAvg) {
  console.log('It\'s a tie! ' + teamJohnScoreAvg);
} else {
  console.log('Mark\'s team wins! ' + teamMarkScoreAvg);
}

var teamJohnScore1 = 100;
var teamJohnScore2 = 100;
var teamJohnScore3 = 100;

var teamMarkScore1 = 100;
var teamMarkScore2 = 100;
var teamMarkScore3 = 100;

var teamMaryScore1 = 100;
var teamMaryScore2 = 100;
var teamMaryScore3 = 100;

var teamJohnScoreAvg = (teamJohnScore1 + teamJohnScore2 + teamJohnScore3) / 3;
var teamMarkScoreAvg = (teamMarkScore1 + teamMarkScore2 + teamMarkScore3) / 3;
var teamMaryScoreAvg = (teamMaryScore1 + teamMaryScore2 + teamMaryScore3) / 3;

if (teamJohnScoreAvg > teamMarkScoreAvg && teamJohnScoreAvg > teamMaryScoreAvg) {
  console.log('John\'s team wins! ' + teamJohnScoreAvg);
} else if (teamMaryScoreAvg > teamJohnScoreAvg && teamMaryScoreAvg > teamMarkScoreAvg) {
  console.log('Mary\'s team wins! ' + teamMaryScoreAvg);
} else if (teamJohnScoreAvg === teamMarkScoreAvg && teamJohnScoreAvg === teamMaryScoreAvg) {
  console.log('It\'s a tie! ' + teamJohnScoreAvg);
} else {
  console.log('Mark\'s team wins! ' + teamMarkScoreAvg);
} */

/******************************
 * Functions
 *//*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
  console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane'); */

/*************************
 * Function Statements and Expressions
 */

// Function Declaration
// function whatDoYouDo(job, firstName) {}

 // Function Expression

/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'John'));
console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('retired', 'John')); */

/***********************
 * Arrays
 */

 // Initialize new array
 /*
var names = ['John', 'Mark', 'Jane'];
var years = [1990, 1969, 1948];

console.log(names[1]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner); */

/****************************
 * CODING CHALLENGE 3
 */

/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.20;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.10;
  }
  return percentage * bill;
} 

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues); */

/********************************
 * Objects and Properties
 */

 // Object literal
 /*
 var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false
 };

 console.log(john.job);

 john.job = 'designer';
 console.log(john);

 // new Object Syntax
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane["lastName"] = 'Smith';
 console.log(jane); */

 /*************************
  * Objects and Methods
  */
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/****************************
 * CODING CHALLENGE 4
 */

 /*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 10800,
  height: 60,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  firstName: 'Mark',
  lastName: 'Anderson',
  mass: 10900,
  height: 60,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (john.calcBmi() > mark.calcBmi()) {
  console.log(john.firstName + john.lastName + ' has the higher BMI at ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.firstName + mark.lastName + ' has the higher BMI at ' + mark.bmi);
} else {
  console.log(john.firstName + ' and ' + mark.firstName + ' have the same BMI at ' + john.bmi);
}; */

/***************************
 * Loops and iteration
 */

// For Loop
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop
var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++
}

// Continue and Break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
} */

/******************
 * CODING CHALLENGE 5
 */

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
      this.tips = [];
      this.finalValues = [];
              
      for (var i = 0; i < this.bills.length; i++) {
          // Determine percentage based on tipping rules
          var percentage;
          var bill = this.bills[i];
          
          if (bill < 50) {
              percentage = .2;
          } else if (bill >= 50 && bill < 200) {
              percentage = .15;
          } else {
              percentage = .1;
          }
          
          // Add results to the corresponing arrays
          this.tips[i] = bill * percentage;
          this.finalValues[i] = bill + bill * percentage;
      }
  }
}

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function() {
      this.tips = [];
      this.finalValues = [];
              
      for (var i = 0; i < this.bills.length; i++) {
          // Determine percentage based on tipping rules
          var percentage;
          var bill = this.bills[i];
          
          if (bill < 100) {
              percentage = .2;
          } else if (bill >= 100 && bill < 300) {
              percentage = .1;
          } else {
              percentage = .25;
          }
          
          // Add results to the corresponing arrays
          this.tips[i] = bill * percentage;
          this.finalValues[i] = bill + bill * percentage;
      }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
      sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}