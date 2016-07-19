## Cheerio Introduction

Cheerio is a node library that will help us parse html data. Parsing in this
case is identifying pieces of the html we want by some kind of query.

### First steps:

What we need to pass to cheerio is a string of html (this we will get from
request in the cheerio example directory)

```
var cheerio = require('cheerio')
var $ = cheerio.load(<html string>)
```

Now we have a $ variable, which contains a cheerio object that wraps whatever
html you pass to it. With that object we can now do two important things:

1. create a selector
2. use the find() method on the selected item to do iteration
3. extract text from what our find method returns.


## selectors

with the $ object (or whatever you assign the cheerio.load call to) we can pass
a selector string. The way we will use it will typically look like:

```
'htmlElement.class'
or
'htmlElement#id'
or just
'.class'
'#id'
```

The query syntax can be more advanced, and is basically the same as jquery, so
you can use this guide for that: http://www.w3schools.com/jquery/jquery_ref_selectors.asp

## find
With the find method, we can gather a collection of children that we can then
traverse over. Often when we are scraping there is a collection of things we
want to do the same thing to. The find method will give us back something we can
loop/map over. They query syntax is the same as selectors

```
$('div.fragment-list').find('div.review')
// will return all div's with class review that are descendants of the div with
// class fragment-list
```

## Text
to get the text we are interested in, we can call .text() if we are still
dealing with a cheerio object. When we use the find method we drill down to the
data property on the object we are iterating over.
