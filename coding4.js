/****************************
 * CODING CHALLENGE 4
 */

var mark = {
  fullName: 'Mark Smith',
  mass: 245,
  height: 4.2,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: 'John Christensen',
  mass: 245,
  height: 4.2,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBmi();
john.calcBmi();

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same mass!');
}