## The Request Module

We can use the built-in http module for more than just creating a server. With
it we can also make requests to other servers, just like what you do in the
browswer. This ability we will use to ask for content on the sites we are
interested in. The request module wraps the built-in http module, and gives us
an api (a set of methods), that makes it easier for us to get content from
websites.

### Install

First we need just a simple npm project. Make a new directory, cd into, make a
package.json and then install request:

```
mkdir request-example
cd request-example
npm init --yes
npm install --save request
```

now let's make an app.js file where we will put our code:

```
touch app.js
```

now open up that file in your text editor of choice.

### First steps:

Stick the below in your app.js:

```
var request = require('request')

request('http://pitchfork.com', genericCallback)

function genericCallback(err, response, body) {
  if (err) {
    console.log('oops!')
  } else {
    console.log('response:', response)
    console.log('body:', body)
  }
}
```

This will dump out a lot of stuff. The main things we care about are the
statusCode, and the headers properties on the response object. Modify your code
so we can look at less information:

```
request('http://pitchfork.com', genericCallback)

function genericCallback(err, response, body) {
  if (err) {
    console.log('oops!')
  } else {
    console.log('response:', response.statusCode, response.headers)
    console.log('body:', body.substring(0, 100))
  }
}
```

Now take a look at what we are getting back. The start of the html is there for
use to see in the body, and the headers are also there for us. Other sites may
give back some important headers like cookies that we may need to use in
subsequent requests, but for the pitchfork site, we don't have to worry about
that.

### Different HTTP Methods:

By default, the request method will do a get when passed a url and a callback.
We can do the syntax a little differently to specify the http method we want to
use:

```
request
  .get('http://pitchfork.com')
    .on('response', genericResponse)
    .on('error', genericError)

request
  .post('http://pitchfork.com')
    .on('response', genericResponse)
    .on('error', genericError)
```

These are just shorthand methods for the more proper way to make requests, which
we will go over now:

```
request(<options object>, <callback>)


var options = {
  url: 'http://pitchfork.com/reviews/best/albums',
  method: 'GET',
  headers: {
    chicken: 'duck',
    accept: 'text/html'
  }
}

request(options, genericCallback)

```

In options we can specify many things like the request type, and different
headers, and then the callback is the same that we saw before.

One extra thing we can set in options is the qs (query string), parameter. This
allows us to add parameters to our requests that will get chained on with the
?key=value&key=value&key=value syntax, for example:

```
var options = {
  url: 'http://pitchfork.com/reviews/best/albums',
  method: 'GET',
  qs: {
    page: 4
  }
}

```

Will turn our request into http://pitchfork.com/reviews/best/albums?page=5


