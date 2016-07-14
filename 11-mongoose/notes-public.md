## Week 6

Mongoose - we saw the mongodb driver we can use inside .js files, mongoose is a
framework that simplifies the use of mongodb inside node applications.

http://mongoosejs.com/docs/guide.html

Tuesday:
1. get mongod running
2. ensure the enron emails dataset is imported
3. create new express app
4. npm install mongoose
5. connect to mongod
6. create schema for email collection - why do we need a schema? Mainly for
   validation when we are saving things, but also for reference when we are
   writing our application code
    a. DB, Schema, Model, Document (i.e new Model)
7. find and delete (remove)
8. create a route that responds with the data from the collection
9. create new and save
10. special mongoose chaining query syntax

exercise:
Make new routes that pull data from the enron email collection
1. first route should respond with the number of elements in the collection
2. second route should respond with emails that have bob somewhere in the
   sender's name.

Thursday:

exercise:
get a new project going and get mongoose connected to a locally running mongod

1. Route for getting count
2. Route for adding new data
3. Route for updating data
4. Route for deleting data

Left to learn: request and cheerio. High level overview of how it fits together

Request https://github.com/request/request:
1. Simple request
2. What is in the callback (err, response, body)
3. Change http method
4. Proper syntax with options object and callback
5. Query String


