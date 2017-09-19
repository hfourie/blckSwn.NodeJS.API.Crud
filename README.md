# Black Swan Node API Project

#the project is setup to run on http://localhost:8000/

#I have created a basic document of the project on the home page

#User Functions
#Get Users
#http://localhost:8000/api/users

#Get User
#http://localhost:8000/api/users/{user_id}

#Create User
#http://localhost:8000/api/users

#{ "username": "efourie", "first_name": "Etresea", "last_name": "Fourie" }

#Update User
#http://localhost:8000/api/users/{user_id}

#{ "username": "sfourie", "first_name": "Sarie", "last_name": "Fourie" }

#Delete User
#http://localhost:8000/api/users/{user_id}

#User Task Functions
#Get User Tasks
#http://localhost:8000/api/users/{user_id}/tasks

#Get User Task
#http://localhost:8000/api/users/{user_id}/tasks/{task_id}

#Create User Task
#http://localhost:8000/api/users/{user_id}/tasks

#{ "name": "Task 3", "description":"Task 3 Description" }

#Update User Task
#http://localhost:8000/api/users/{user_id}/tasks/{task_Id}

#{ "name": "Task 4", "description":"Task 4 Description" }

#Delete User Task
#http://localhost:8000/api/users/{user_id}/tasks/{task_Id}

#Task Update Schedule
#A task update schedule has been setup to run every minute and update records with status: pending.

#The next_execute_date_time has been set to 5 minutes after task creation.

#With the limited experiance I have in mongodb I could not figure out how to select multiple sub-documents in time(guessing it has to do with aggregation...), to bring as little back from the databse as possible. I have setup code in the task schedular to check for next_execute_date_time and pending status codes.

#MongoDb
#I have setup the project to read and write to a mongodb database

#When the project is started using the gulp command the database will be seeded with test USERS and TASKS

#Comments
#I just want to thank you for this opportuny. I really had a lot of fun creating an API project with node.js and using Mongodb.
