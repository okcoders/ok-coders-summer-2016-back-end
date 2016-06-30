var mongo = require('mongodb')
var MongoClient = mongo.MongoClient

// Connection URL
// localhost = ip
// 27017 is the port
// enron is the database
// make sure your mongod is running
var url = 'mongodb://localhost:27017/enron'

MongoClient.connect(url, function(err, db) {
  if (err) { console.log("error!") }

  var collection = db.collection('emails')
  collection.find({}).toArray(function(err, docs) {
    console.log(docs[0])
    db.close()
  })

})
