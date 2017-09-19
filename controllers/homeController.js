(function(homeController){

    var data = require("../data");
    var userModel = require("../models/userModel")

    homeController.init = function(app){

        app.get('/', function(req, res){
                res.render("index", {title:"Welcome to my API project", });
        });
    };

})(module.exports);