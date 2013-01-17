var quiz = Alloy.createModel('quiz', {question:'What is a car in korea?', answer:'foobaz'});
if (quiz.isValid() && quiz.customProperty == "quiz") {
		//Save data to persistent storage
		quiz.save();
}
else {
		quiz.destroy;
}

//var question = quiz.get('question');
//var answer = quiz.get('answer');

var quizzes = Alloy.createCollection('quiz');
quizzes.fetch(); // Grab data from persistent storage
