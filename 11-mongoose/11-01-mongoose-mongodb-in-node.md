Mongoose: MonogDB in Node
====================================

In this chapter we're going to learn how to connect to a mongo database from our node application. This is a significant step in the development of our web application as it finally allows us to connect our node code to dynamic data backed by a database.

Mongo provides a database adapter for communicating with mongo servers from a node application. We will not, however, use their adaptor directly. Instead we will use a node module called *mongoose* which provides a layer of abstraction between our application code and the adapter.

Mongoose calls itself an object-document mapper (ODM) which is related to object-relational mappers (ORMs) commonly found in applications which use SQL for data storage. The mapper converts between the database type system and the javascript type system. This conversion is straightforward for mongo, which is already using javascript in its implementation, but mongoose supplies additional functionality as well.

Most importantly mongoose provides *abstraction*. Rather than writing complex database code we will simply call methods on mongoose objects, and mongoose will construct the database code for us. Mongoose also allows us to define application level schemas for our documents and provides validation and some automatic handling of relationships between collections.

We won't take advantage of all of this functionality but we will be grateful for the abstraction and will certainly leverage the use of schemas and validations.

## References

[mongodb.org](http://www.mongodb.org/)

The MongoDB homepage, including documentation

[mongoosejs.com](http://mongoosejs.com/)

The mongoose object modeling library for node

[Object-relational mapping](http://en.wikipedia.org/wiki/Object-relational_mapping)

Wikipedia's entry on object-relational mapping. The concepts largely apply to object-document mapping.

## Setting up

**Install mongoose**

First we're going to install mongoose and ensure we're able to connect to our database. Let's begin by installing mongoose. It's hosted as a public node package so we can just `cd` into our project directory and:

	$ npm install mongoose --save

Make sure you do this from the root directory of your project. The installation should succeed and install mongoose and its dependencies in the *node_modules* directory. It also modifies *package.json* to list it as a dependency.

**Start up mongo**

Before using mongoose we'll need to start our mongo database daemon in the background. Refer to the previous chapter if you require more information.

On Windows make sure you already have a *\data\db* directory then find the `mongod.exe` file in the *bin* directory in *C:\Program Files\Mongo X\* and launch it. See additional instructions [here](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/).

On Linux and Mac `cd` into your project directory and create a "db" folder if you haven't already done so. Then start the mongo daemon with a `--path` argument pointing to that directory:

	$ mongod

At this point the mongo daemon should be running. Keep it running in a separate command prompt or terminal. Further work in the mongo client or with node will have to be done in another terminal.

**Confirm mongo is running**

Now that the database is running go ahead and run the mongo command line client. On windows fire up the `mongo.exe` file in that same *bin* directory. On Mac and Linux run the command:

	$ mongo

You should successsfully connect to the mongo daemon.

**Prep the enron database**

```
mongoimport --db enron --collection emails --file enron.json
```

## Connecting to the database

Now that we have mongoose installed and our database running with test data we are ready to connect to the database from our node application. In the project's main *app.js* file make the following modifications.

First require in the mongoose module. This should go near the top of the file:

	var mongoose = require('mongoose')

Then establish a connection and store the connection object in a local variable. Use the `mongoose.connect` method and give it a path to the mongo server and the database you want to use. I'm doing this after creating the app object:

	mongoose.connect('mongodb://localhost/enron')
	var db = mongoose.connection

Notice the path: `mongodb://localhost/enron`. This is a special kind of url that mongoose understands. It says connect to the mongo port on localhost and use the `enron` database, like launch the command line client and executing `use enron` in it.

Finally add error checking immediately after grabbing the connection:

	db.on('error', function(msg) {
	  console.log('Mongoose connection error ', msg)
	})

	db.once('open', function() {
	  console.log('Mongoose connection established')
	})

These two handlers add callbacks for the database events `error` and `open`. Any time mongoose encounters an error with the database its raises an `error` event and our callback will log the error. We'll also see a confirmation that the database connection was successful when the applicaiton first starts up.

Let's confirm that. If you're node application is already running Ctr-C to quit it and start it up again:

	$ npm start

If everything is working correctly you should see the open message printed to the console:

	Mongoose connection established

We're now ready to use mongo from our node application!

## Modeling an object

Mongoose uses a two step process to define an object that ultimately represents a document in the database. First we must define a schema for the object then we will create an object that associates that schema with a particular collection.

For those of you familiar with object-oriented programming, this schema object functions like a class with a number of static and instance methods for dealing with common database operations. Even if you aren't familiar with this style of programming, you'll see that the mongoose object makes it easy to create, retrieve, update and delete documents in a collection.

Why do we need to define a schema in advance? Recall that, unlike SQL, mongo itself does not support schemas directly in the database. But we need a way to translate data from the application layer to the database layer, and vice versa.

The schema does this. The schema makes it possible for the mongoose library to map object properties in our node application to attributes on a document actually saved in the database. It then creates special objects any time we retrieve documents from the database that have built-in support for further database operations as well as data validation, which we'll see in action in the next chapter.

Let's define a schema for our a emails object. Make a  *models/emails.js* file and define the following schema:

	var mongoose = require('mongoose')
        var Schema = mongoose.Schema // return constructor function

	var schema = new Schema({
          _id: Schema.Types.ObjectId
	  sender: String,
	  recipients: [],
	  cc: [],
          text: String,
          mid: String,
          fpath: String,
          bcc: [],
          to: [],
          replyto: Schema.Types.Mixed,
          ctype: String,
          fname: String,
          date: Date,
          subject: String
	})

We define a schema by calling `new Schema` and passing it a javscript object. The object contains a number of properties or key-value pairs. The most basic property names the attribute that is actually used in the document as it is stored in the database and then specifies the type of value it should be. Notice we're actually using javascript types for the values of the properties: `String` and `Number`.

In this schema I'm saying that my document will have the aforementioned properties

But the schema doesn't say anything about which collection is refers to, that is, what kind of document it is modeling. For that we need a model object. This is the second part of mongoose's two step process. The model object takes the name of the collection it operates on and the schema for documents in that collection.

Create a model object from this schema:

	var Email = mongoose.model('emails', schema);

With the `mongoose.model` command we create a `Post` model object that knows what its documents look like and which collection those documents belong to (emails).

Anything that is done using the `Emails` model in node will be done in the context of the *emails* collection in mongo, like executing `db.emails.<command>` in the mongo command line client.

Finally we must export the `Email` model to make it available to other parts of our application:

	module.exports = Email

We're now ready to use this `Email` model from other parts of our application. We'll do so from the router.

## Using a model object

A Mongoose model object abstracts out the interface to the database into methods that are simpler to use. We've seen how to interact with objects in the database from the mongo command line client. We've seen commands like:

	db.emails.insert( { ... } )
	db.emails.update( { ... }, { ... } )
	db.emails.find( { ... } )
	db.emails.remove( { ... } )

A mongoose model provides access to that underlying functionality with methods on the model object.

We will build up the database command we'd like to execute using methods on the model like `find`, `findById`, `sort`, `limit`, and so on. We'll then actually execute the command with a final `exec` statement. The `exec` statement will take a callback that is run once the database operation finishes. The callback will always look the same, with an `err` and `result` parameter, although not every operation will actually set a result.
