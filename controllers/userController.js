(function(userController){

var userModel = require("../models/userModel")
var ObjectID = require('mongodb').ObjectID;

    userController.init = function(app){

        //Get all users
        app.get("/api/users", function(req, res){
            userModel.getUsers(function(err, users){
                if(err){
                    res.status(400).send(err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send(users);
                }
            });
        });

        //Get User by Id
        app.get("/api/users/:user_id", function(req, res){

            var myquery ={
                _id: ObjectID(req.params.user_id)
            };

            userModel.getUser(myquery, function(err, tasks){
                if(err){
                    res.status(400).send(err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send(tasks);
                }
            });
        });

        //Create a user
        app.post("/api/users", function(req, res){

            var userToInsert = {
                username: req.body.username,
                first_name:req.body.first_name,
                last_name:req.body.last_name,
            };

            userModel.createUser(userToInsert, function(err){
                if(err){
                    res.status(400).send(err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(201).send(userToInsert);
                }
            });
        });

        //Update a user by Id
        app.put("/api/users/:user_id", function(req, res){

            var myquery ={
                _id: ObjectID(req.params.user_id)
            };

            var username = req.body.username;

            var userDetailsToUpdate = { 
                $set: {
                    username: username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    }
                };
            
            userModel.updateUser(myquery, userDetailsToUpdate, username, function(err){
                if(err){
                    res.status(400).send("Failed to update user details. " + err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(201).send(userDetailsToUpdate);
                }
            });
        });

        //Delete User
        app.delete("/api/users/:user_id", function(req, res){
            var myquery ={
                _id: ObjectID(req.params.user_id)
            };

            userModel.deleteUser(myquery, function(err){
                if(err){
                    res.status(400).send("Failed to delete user. " + err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send();
                }
            });
        });
    };

})(module.exports);