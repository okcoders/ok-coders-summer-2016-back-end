### http, html, css, rest
1. visual diagram (client, internet and dns, server)
   a. client browser can make http requests
   b. browser can also interpret http responses, by using the graphics
   card, v8, and an internal representation of the dom (text, html, css,
   javascript, json)
   c. Internet and DNS handle the connection between servers and clients
   d. server understands http requests (get, post, put, delete) for a particular
   url/uri/resource, the server then does a bunch of stuff to generate what you
   are asking for (maybe queries a database, crunches some numbers, etc.) and
   then turns that into a response the browser can understand.
2. hyper-text-transfer-protocol
3. curl -v --request
4. html, css
   a. header
   b. body (p, a tags, h1, div, span)
   c. classes, and id
   d. css makes it look the way it does, our scraper won't care
5. rest

### an express server
1. node framework we will use to create a server that will communicate through http
   a. express framework vs. express library
   b. express newDir
   c. what was created?
1. specifying methods (get, post, put, delete)

http://expressjs.com/en/4x/api.html

### exercise
using the api docs, find out how to respond with json data using express. Make a
route that responds with some sample json data (you can just hardcode an array
of objects, for example, and use that as your sample data).

## Day 2:

### express
1. nodemon
2. path and path matching (order matters)
3. express app and express router
  router.all, router.all('wildcard'), router.get, etc.

### mongoose
1. connecting
2. making calls to our database
3. responding with json from our database

### exercises

#### exercise 1:
```
express exercise-app
cd exercise-app
npm install
```

open app.js in your editor
add a get, post, put, and delete method for a '/chicken' route - respond with any json you like
bonus: make it so anything that has /chicken (i.e /chicken/duck should match) at the beginning of the route is
mapped to your get, post, put, and delete methods

#### exercise 2:
make a length route that responds with how many items are in the collection




