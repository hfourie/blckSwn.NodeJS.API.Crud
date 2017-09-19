(function(controllers) {

    var homeController = require('./homeController');
    var userController = require("./userController");
    var taskController = require("./taskController");
    var scheduleController = require("./scheduleController");

    controllers.init = function(app){
        homeController.init(app);
        userController.init(app);
        taskController.init(app);
        scheduleController.init(app);
    };
    
})(module.exports);