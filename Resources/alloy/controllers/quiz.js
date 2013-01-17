function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createWindow({
        id: "container"
    }), "Window", null);
    $.addTopLevelView($.__views.container);
    $.__views.quiz - group = A$(Ti.UI.createTabGroup({
        id: "quiz-group"
    }), "TabGroup", $.__views.container);
    $.__views.container.add($.__views.quiz - group);
    $.__views.__alloyId1 = A$(Ti.UI.createWindow({
        id: "__alloyId1"
    }), "Window", null);
    $.__views.__alloyId1.activity.onCreateOptionsMenu = function(e) {};
    $.__views.__alloyId4 = A$(Ti.UI.createView({
        id: "__alloyId4"
    }), "View", $.__views.__alloyId1);
    $.__views.__alloyId1.add($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        text: "",
        id: "__alloyId5"
    }), "Label", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = A$(Ti.UI.createInput({
        id: "__alloyId6"
    }), "Input", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = A$(Ti.UI.createButton({
        title: "",
        id: "__alloyId7"
    }), "Button", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = A$(Ti.UI.createTableView({
        id: "__alloyId8"
    }), "TableView", $.__views.__alloyId1);
    $.__views.__alloyId1.add($.__views.__alloyId8);
    $.__views.quiz = A$(Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "quiz"
    }), "Tab", null);
    $.__views.quiz - group.addTab($.__views.quiz);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var quiz = Alloy.createModel("quiz", {
        question: "What is a car in korea?",
        answer: "foobaz"
    });
    quiz.isValid() && quiz.customProperty == "quiz" ? quiz.save() : quiz.destroy;
    var quizzes = Alloy.createCollection("quiz");
    quizzes.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;