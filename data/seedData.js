(function(seedData){

    //I have created mock data to test with 
    //the following collections and subdocuments 
    //will be picked up in the index.js file and 
    //written to the database only when no data is present

    

    var ObjectID = require('mongodb').ObjectID;
    var moment = require('moment');
    var isodate = require("isodate");

    seedData.initialUsers = seedData.initialUsers = [
        {
            username: "hfourie",
            first_name:"Hardus",
            last_name:"Fourie",
            tasks:[
                {
                    _id:new ObjectID(),
                    name: "Task 1",
                    description:"Task 1 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                    next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                },{
                    _id:new ObjectID(),
                    name: "Task 2",
                    description:"Task 2 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                    next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                }]
    },{
            username: "mfourie",
            first_name:"Mandi",
            last_name:"Fourie",
            tasks:[
                {
                    _id:new ObjectID(),
                    name: "Task 1",
                    description:"Task 1 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                     next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                },{
                    _id:new ObjectID(),
                    name: "Task 2",
                    description:"Task 2 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                     next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                }]
    },{
            username: "rfourie",
            first_name:"Rudolph",
            last_name:"Fourie",
            tasks:[
                {
                   _id:new ObjectID(),
                    name: "Task 1",
                    description:"Task 1 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                    next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                },{
                    _id:new ObjectID(),
                    name: "Task 2",
                    description:"Task 2 Description",
                    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                     next_execute_date_time: new Date(moment().add(5, 'm').toISOString()),
                    status:"pending"
                }]
    }];

})(module.exports);