(function (data) {
    
    var seedData = require('./seedData');
    var database = require("./database");

    function seedDatabase(){
        database.getDb(function(err, db){
            if(err){
                console.log("Failed to seed the database: " + err);
            }else{

                //test to see if data exist
                db.users.count(function(err, count){
                    if(err){
                        console.log("Failed to retrieve databse count:" + err);
                    }else{
                        if(count == 0){

                            console.log("Seeding the database");

                            seedData.initialUsers.forEach(function(item){
                                db.users.insert(item, function(err){
                                    if(err){
                                        console.log("Failed to insert user into database" + err);
                                    }
                                });
                            });
                        }else{
                            console.log("database already seeded");
                        }
                    }
                });
            }
        });
    };

    seedDatabase();

})(module.exports);