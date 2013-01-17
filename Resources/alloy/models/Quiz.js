exports.definition = {
    configuration: {
        columns: {
            question: "String",
            answer: "String"
        },
        defaults: {
            question: "-",
            answer: "-"
        },
        adapter: {
            type: "sql",
            collection_name: "quizzes"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (key === "question" && value.length <= 0) return "Error: No Question!";
                }
            },
            customProperty: "quiz",
            customFunction: function() {
                Ti.API.info("I am a model");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(quiz) {
                return quiz.get("question");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("quiz", exports.definition, []);

collection = Alloy.C("quiz", exports.definition, model);

exports.Model = model;

exports.Collection = collection;