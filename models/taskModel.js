(function (taskModel) {
    
    var database = require("../data/database");

    //User Task API Functions

    taskModel.getUserTasks = function(myquery, projection, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.findOne(myquery, projection, next);
            }
        });
    };

    taskModel.getUserTask = function(myquery, projection, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.findOne(myquery, projection, next);
            }
        });
    };

    taskModel.creatUserTask = function(myquery, taskToInsert, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.update(myquery,{$push:{tasks:taskToInsert}}, next);
            }
        });
    };

    taskModel.updateUserTask = function(myquery, taskDetailsToUpdate, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.updateOne(myquery, taskDetailsToUpdate, next);
            }
        });
    };

    taskModel.deleteUserTask = function(myquery,taskToRemove, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.update(myquery, taskToRemove, next);
            }
        });
    };

    //I did not create a separate model 
    //for the task schedular as the data 
    //still manipulates the task data

    //Task Schedule Functions
    taskModel.getPendingTasks = function(myquery, projection, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.find(myquery, projection, next);
            }
        });
    };

    taskModel.updateUserTask = function(myquery, taskDetailsToUpdate, next){
        database.getDb(function(err, db){
            if(err){
                next(err);
            } else {
                db.users.updateOne(myquery, taskDetailsToUpdate, next);
            }
        });
    };

})(module.exports);
