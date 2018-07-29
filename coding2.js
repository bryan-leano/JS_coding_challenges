/****************************
 * CODING CHALLENGE 2
 */

var teamScoreJohn = (105 + 134 + 98) / 3;
var teamScoreMike = (120 + 89 + 115) / 3;
var teamScoreMary = (197 + 134 + 110) / 3;

if (teamScoreJohn > teamScoreMike && teamScoreJohn > teamScoreMary) {
  console.log('Team John wins with a score of ' + teamScoreJohn);
} else if (teamScoreMike > teamScoreJohn && teamScoreMike > teamScoreMary) {
  console.log('Team Mike wins with a score of ' + teamScoreMike);
} else if (teamScoreMary > teamScoreJohn && teamScoreMary > teamScoreMike) {
  console.log('Team Mary wins with a score of ' + teamScoreMary);
}
  else {
  console.log('It\'s a tie at a score of ' + teamScoreJohn); 
}