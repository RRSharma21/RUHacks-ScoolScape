angular.module('questionsList', [])
  .controller('QuestionsController', function(){
    var questions = this;
    questions.quests = [
      {text: 'How do I use NodeJs'},
      {text: 'What is MongoDB'}];

    questions.addToQ = function() {
      questions.quest.push({text: question.qText});
      question.qText = '';
    };
  });
