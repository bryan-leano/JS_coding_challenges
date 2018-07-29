/****************************
 * CODING CHALLENGE 2
 */

var teamScoreJohn = (105 + 134 + 98) / 3;
var teamScoreMike = (120 + 89 + 115) / 3;


if (teamScoreJohn > teamScoreMike) {
  console.log('Team John wins with a score of ' + teamScoreJohn);
} else if (teamScoreMike > teamScoreJohn) {
  console.log('Team Mike wins with a score of ' + teamScoreMike);
} else {
  console.log('It\'s a tie at a score of ' + teamScoreJohn); 
}