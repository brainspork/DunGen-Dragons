'use strict';

// var firstAlign = [['Lawful', 0], ['Neutral', 0], ['Chaotic', 0]];
// var secondAlign = [['Good', 0], ['Neutral', 0], ['Evil', 0]];

var questionText = document.getElementById('question');
var answerText = document.getElementById('answers');

function Question(question, answers, values){
  this.question = question;
  this.answers = answers;
  this.values = values;
  qArr.push(this);
}

var qArr = [];

new Question('Rules are...', ['1. Necessary and must be followed to maintain order.', '2. Generally fine, but sometimes get in the way of what needs to be done.', '3. A list of suggestions for how not to live an interesting life.'], ['Lawful', 'Neutral', 'Chaotic']);

new Question('You strive for...', ['1. Dominance over others', '2. Balance in all things', '3. Peace and prosperity', '4. Nothing in particular'], ['Evil', 'Neutral', 'Good', 'Neutral']);

new Question('When it comes down to it, which do you prioritize?', ['1. The community', '2. My own friends/family', '3. Myself', '4. Fun!'], ['Lawful', 'Good', 'Evil', 'Chaotic']);

new Question('To you, money is...', ['1. Power', '2. Good to have', '3. A means of helping others', '4. Inconsequential', '5. Flammable'], ['Evil', 'Neutral', 'Good', 'True Neutral', 'Chaotic']);

new Question('What sort of leader are you?', ['1. Fair and just', '2. Feared by all', '3. No thanks', '4. When I\'m in charge, every mission is a suicide mission!'], ['Lawful', 'Evil', 'Neutral', 'Chaotic']);

new Question('You find a bag of gold on the ground...', ['1. Try to return it to the rightful owner', '2. Donate it to a good cause', '3. Keep it for yourself', '4. Just put it back and move on', '5. Leave it, but fill the bag with venemous spiders, because why not?'], ['Lawful', 'Good', 'Neutral', 'True Neutral', 'Chaotic']);

new Question('A friend of yours is arrested and all evidence points to their guilt...', ['1. Trust that the law will be fair but merciful', '2. Defend your friend any way you can, even if it means lying', '3. Share more dirt on your "friend" for a decent price'], ['Lawful', 'Good', 'Evil']);

new Question('Your hometown is besieged by bandits. You...', ['1. Take up arms and fight!', '2. Hole up in the local tavern, have a pint, and wait for this whole thing to blow over', '3. Join the bandits. You can even point out the best houses to loot!'], ['Lawful', 'Neutral', 'Evil']);

function quiz(){
  displayQuestion(qArr[0]);
}

function displayQuestion(q) {
  questionText.innerHTML = qArr[q].question;
  answerText.innerHTML = '';

  for (var i = 0; i < qArr[q].answers.length; i++) {
    var listAnswer = document.createElement('li');
    listAnswer.innerHTML = qArr[q].answers[i];
    answerText.appendChild(listAnswer).addEventListener('click', function(){
      console.log(qArr[q].values[i]);
      if(q < 7){
        displayQuestion(q+1);
      } else {
        console.log('End of quiz!');
      }
    });
  }
}

function scoreQuiz(){
  var first = indexMax(firstAlign);
  var second = indexMax(secondAlign);
  var playerAlign = '';

  if(first === 0){
    playerAlign += 'Lawful ';
  }
  if(first === 1){
    playerAlign += 'Neutral ';
  }
  if(first === 2){
    playerAlign += 'Chaotic ';
  }

  if(second === 0){
    playerAlign += 'Good';
  }
  if(first === 1 && second === 1){
    playerAlign = 'True Neutral';
  } else if (second === 1){
    playerAlign += 'Neutral';
  }
  if(second === 2){
    playerAlign += 'Evil';
  }

  console.log('Your alignment is ' + playerAlign + '.');
}

function indexMax(arr) {
  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      console.log('max is ', max);
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}