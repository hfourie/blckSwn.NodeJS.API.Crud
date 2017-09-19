
(function(taskController){

var taskModel = require("../models/taskModel");
var ObjectID = require('mongodb').ObjectID;
var moment = require('moment');

    taskController.init = function(app){

        //Get all user tasks - working
        app.get("/api/users/:user_id/tasks", function(req, res){
            var myquery ={
                _id: ObjectID(req.params.user_id), 
            };

            var projection = {
                "tasks": "0"
            };

            taskModel.getUserTasks(myquery, projection, function(err, tasks){
                if(err){
                    res.send(400, err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send(tasks);
                }
            });
        });

        //Get user task - working
        app.get("/api/users/:user_id/tasks/:task_id", function(req, res){

            var myquery ={
                _id: ObjectID(req.params.user_id)
            };

            var projection = {
                "tasks": {
                    $elemMatch: 
                    { 
                       _id: ObjectID(req.params.task_id)
                    }
                }
            };

            taskModel.getUserTask(myquery, projection, function(err, task){
                if(err){
                    res.send(400, err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send(task);
                }
            });
        });

        //Create user task -working
        app.post("/api/users/:user_id/tasks", function(req, res){

            var myquery ={
                _id: ObjectID(req.params.user_id), 
            };

            var taskToInsert = {
                _id:new ObjectID(),
                name: req.body.name,
                description:req.body.description,
                date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                next_execute_date_time: moment().add(5, 'm').toDate(),
                status:"pending"
            };

            taskModel.creatUserTask(myquery, taskToInsert, function(err){
                if(err){
                    res.send(400, "Failed to add note to data store" + err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(201).send(taskToInsert);
                }
            });
        });

        //Update user task - working
        app.put("/api/users/:user_id/tasks/:task_id", function(req, res){

            var myquery ={
                _id: ObjectID(req.params.user_id), 
                "tasks._id": ObjectID(req.params.task_id)
            };

            var taskDetailsToUpdate = { 
                $set: {
                    "tasks.$.name": req.body.name, 
                    "tasks.$.description": req.body.description
                }
            };

            taskModel.updateUserTask(myquery, taskDetailsToUpdate, function(err){
                if(err){
                    res.status(400).send("Failed to update color to data store" + err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send(taskDetailsToUpdate);
                }
            });
        });

        //Delete user task - working
        app.delete("/api/users/:user_id/tasks/:task_id", function(req, res){

           var myquery ={
                _id: ObjectID(req.params.user_id), 
                "tasks._id": ObjectID(req.params.task_id)
            };

            var taskToRemove = { 
                "$pull":{
                    "tasks": { _id: ObjectID(req.params.task_id)}
                }
            };

            taskModel.deleteUserTask(myquery,taskToRemove, function(err){
                if(err){
                    res.status(400).send("Failed to delete category from data store" + err);
                }else{
                    res.set("Content-Type", "application/json");
                    res.status(200).send();
                }
            });
        });
    };
})(module.exports);