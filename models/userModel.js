(function (userModel) {
    
    var database = require("../data/database");

        //User functions

        userModel.getUsers = function(next){
            database.getDb(function(err, db){
                if(err){
                    next(err);
                }else{
                    console.log('user code called');
                    db.users.find().toArray(function(err, users) {
                    if(err){
                        next(err);
                    }else{
                        next(users);
                    }
                });
                }
            });
        };

        userModel.getUser = function(myquery,next){
            database.getDb(function(err, db){
                if(err){
                    next(err);
                }else{
                    db.users.findOne(myquery, next);
                }
            });
        };

        userModel.createUser = function(userToInsert, next){
            database.getDb(function(err, db){
                if(err){
                    next(err);
                } else {
                    //check if username already exists
                    db.users.find({username: userToInsert.username}).count(function(err, count){
                        if(err){
                            next(err);
                        } else {
                            if(count != 0){
                                next("User already exists");
                            } else {
                                var user = {
                                    username: userToInsert.username,
                                    first_name: userToInsert.first_name,
                                    last_name : userToInsert.last_name,
                                    tasks:[]
                                };
                                db.users.insert(user,next);
                            }
                        }
                    });
                }
            });
        };

        userModel.updateUser = function(myquery, userDetailsToUpdate, username, next){
            database.getDb(function(err, db){
                if(err){
                    next(err);
                } else {
                    //check if username already exists
                    db.users.find({username: username}).count(function(err, count){
                        if(err){
                            next(err);
                        } else {
                            if(count != 0){
                                next("User already exists");
                            } else {
                                db.users.updateOne(myquery,userDetailsToUpdate, next);
                            }
                        }
                    });
                }
            });
        };

        userModel.deleteUser = function(myquery, next){
            database.getDb(function(err, db){
                if(err){
                    next(err);
                } else {
                    db.users.deleteOne(myquery, next);
                }
            });
        };

})(module.exports);