(function(homeController){

    //this is a basic page to display some HTML on the home page
    homeController.init = function(app){

        app.get('/', function(req, res){
                res.render("index", {title:"Welcome to my API project", });
        });
    };

})(module.exports);