(function(scheduleController){    

var taskModel = require("../models/taskModel");
var schedule = require('node-schedule');
var moment = require('moment');
var ObjectID = require('mongodb').ObjectID;
var isodate = require("isodate");


scheduleController.init = function(app){

    var rule = new schedule.RecurrenceRule();
    rule.minute = new schedule.Range(0, 59, 1);
    schedule.scheduleJob(rule, function(){

        var myquery ={ 
            $and: [
                { 
                    "tasks.next_execute_date_time": { 
                        $lt: new Date(moment().toISOString()) 
                    } 
                },{ 
                    "tasks.status": "pending" 
                }] 
        };

         var projection = {
            "_id": "0", 
            "tasks._id":"0",
            "tasks.status": "pending",
            "tasks.next_execute_date_time":"0"
        };

        taskModel.getPendingTasks(myquery, projection, function(err, pendingTasks){
            if(err){
                res.send(400, err);
            }else{
                var currentDateTime = new Date(moment().toISOString());
                pendingTasks.forEach(function(pendingTask)
                {   
                    pendingTask.tasks.forEach(function(item){

                        if(item.status === "pending" && currentDateTime > item.next_execute_date_time){
                                var myquery ={
                                    _id: ObjectID(pendingTask._id), 
                                    "tasks._id": ObjectID(item._id)
                                };

                                var taskDetailsToUpdate = { 
                                    $set: {
                                        "tasks.$.status": "done", 
                                    }
                                };

                                taskModel.updateUserTask(myquery, taskDetailsToUpdate, function(err){
                                    if(err){
                                        console.log("Failed to update statusfrom pending to done for user_id "+ pendingTask._id +" and task_Id " + item._id, err);
                                    }else{
                                        console.log("Updated status from pending to done for user_id "+ pendingTask._id +" and task_Id " + item._id);
                                    }
                                });
                            }
                    });
                });
            }
        });
    });
};

})(module.exports);