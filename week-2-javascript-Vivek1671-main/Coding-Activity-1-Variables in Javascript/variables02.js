//Instructions
// - Check the instructions in the summary file and calculate the current year
//console log the resultlet currentYear;
const d = new Date();
currentYear=d.getFullYear();
console.log('current year result: ', currentYear);  //should be the value of the currentYear variable
//don't change this line
if (typeof module !== 'undefined')
 {
  module.exports = currentYear;
}
