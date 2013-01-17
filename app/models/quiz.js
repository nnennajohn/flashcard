exports.definition = {
		configuration: {
				"columns": {
						"question": "String",
						"answer": "String"
				},
				"defaults": {
						"question": "-",
						"answer": "-"
				},
				"adapter": {
						"type": "sql",
						"collection_name": "quizzes"
				}
		},
		extendModel: function(Model) {
				_.extend (Model.prototype, {
						validate: function(attrs) {
								for (var key in attrs) {
										var value = attrs[key];
										if (key === "question") {
												if (value.length <= 0) {
														return "Error: No Question!";
												}
										}
								}
						},
						customProperty: 'quiz',
						customFunction: function() {
								Ti.API.info("I am a model");
						},
				});
				return Model;
		},
		extendCollection: function(Collection) {
				_.extend (Collection.prototype, {
						// Implement the comparator method.
						comparator: function(quiz) {
								return quiz.get('question');
						}
				}); // end extend
				return Collection;
		}
};
