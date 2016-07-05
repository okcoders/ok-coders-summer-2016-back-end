#### mongo

#### References

1. install
2. get mongod instance running which locks a particular part of your filesystem
down, and listens on a port on your localhost
3. connect with the client (defaults to localhost)
4. show dbs, use new db, insert into new collection, show collections
5. select all from collection

all the above to show that there is a cli for dealing with your mongo database,
we can also do these things from node by using the mongodb driver

6. npm install --save mongodb

### quick guide
mongo
show dbs
use <db>
db.<collection>.insert()
db.<collection>.find()
db.<collection>.find({<where clause>, {<select clause>}}.sort()
db.<collection>.count()
db.<collection>.distinct({<some attribute>})

db.<collection>.find({<attribute>: {$ne: undefined}})
db.<collection>.findOne({_id: ObjectId("blah blah")})._id.getTimestamp()
db.<collection>.distinct(<attribute>)

#### update
db.<collection>.update({}, { $set: {diet: "veg"} }, {multi: true})

#### delete

AND and OR

$and: [{}, {}]
$or: [{}, {}]
db.example.find({ $and: [{$or: [{name: "zach"}, {name: "test"}]}, {$or: [{diet: "veg"}, {wow: "oh"}]}]})

### exercise
answer these questions from the sample dataset
http://jsonstudio.com/resources/
mongoimport --db enron --collection emails --drop --file enron.json
1. how many emails are there?
2. what is the earliest email (in terms of date)
3. what is the latest email?
4. do any emails contain the word "money" in their text?
4. what sender sent the most emails?

### answers
db.emails.find({text: /money/i}).limit(10)
db.emails.find().sort({date: -1}).limit(1)
db.emails.aggregate([{$group: {_id: "$sender", count: {$sum:1}}}, {$sort: {count: -1}}]
